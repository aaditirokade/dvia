var selectedCity = 1;

d3.json('data.json')

.then((data) => {
    
    console.log( `selected city is ${selectedCity}` );
    
    // update headline with the selected City Name
    d3.select('h2')
      // .text( `Median Temperatures in ${data[selectedCity].city}` );
      .text( "Median Temperatures in " + data[selectedCity].city);
      
    
   
   //append an svg element
    // d3.select('body')
    //   .append('svg')
    //   .attr('width', '600px')
    //   .attr('height','600px');
      
    let svg = d3.select('body')
             .append('svg')
             .attr('width', 200)
             .attr('height',200);
             
  // append data to svg, then append a rectangle(bar) for each month (elements in temp array)
//  svg.selectAll('rect')
//     .data(data[selectedCity].temp)                   //apply data to the collection of the rects
//     .enter()
//     .append('rect');                                 //d3 is for binding data to the document (???? what doc?)
    
    let bars = svg.selectAll('rect')                     //storing into a variable in order to reuse it
        .data(data[selectedCity].temp)                   
        .enter()
        .append('rect'); 
    
   //style the barsd (=rectangles)
//   bars.attr('width',() => { 
//       //do whatever
//       return 100;

//   bars.attr('width',(temp) => { 
//       //do whatever
//       return temp;

   bars.attr('width', (temp) => { return temp*2;})
        .attr('height', 10)
        .attr('x', 10)
        .attr('y',(temp,i) => {return 10+ 15*i;})
        .attr('fill','#fa312b');
        
    svg.on('click', () =>{
        selectedCity = 1-selectedCity;
       //update the headline
       d3.select('h2').text('Meadian Temperature in ' + data[selectedCity].city);
       //1. Update the data in the svg; 2. define a transition; 3. change attributes to be animated
       bars.data(data[selectedCity].temp)
       .transition()
       .duration(1000)
       .attr('width', (temp) => { return temp*2;})
    })
});