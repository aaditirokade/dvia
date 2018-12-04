// load weather data file
d3.json('data.json')

// after loading, append to 
.then((weatherData) => {
    
    // selected element in data array
    let selectedCity = 0;
    
    // update headline
    d3.select('h2').text( 'Median monthly temperatures in ' + weatherData[selectedCity].city );
    
    // create <svg> element
    var svg = d3.select("body")
             .append("svg")
             .attr("width", 200)
             .attr("height", 315);
    
    // append a rectangle for each temperature element (i.e. each month)
    var bars = svg.selectAll("rect")
                  .data(weatherData[selectedCity].temp)
                  .enter()
                  .append("rect");
    
    // style rectangles using data
    bars.attr("width", (d) => { return d *2; })
        .attr("height", 20)
        .attr("x", 10)
        .attr("y", (d,i) => { return 10 + 25*i; } )
        .attr("fill", "#FF7F50")
    
    // add event handler for mouse clicks
    svg.on("click", () => {
        // toggle city between 1 and 0
        selectedCity = 1 - selectedCity;
        // update data and animate attr width    
        svg.selectAll("rect")
            .data(weatherData[selectedCity].temp)
            .transition()
            .duration(250)
            .attr("width", (d) => { return d *2; });
        // update headline
        d3.select('h2').text( 'Median monthly temperatures in ' + weatherData[selectedCity].city );
    });
});
