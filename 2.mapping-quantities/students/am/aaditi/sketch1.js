//arrays to store years, details, undersground tests, atmospheric tests, tests
var yr = [];            
var details = [];
var underground = [];
var atmospheric = [];
var tests = [];
var yeartext = '';

var uk = [];
var us = [];
var ru = [];
var pk = [];
var id = [];
var fr = [];
var ch = [];
var nk = [];
var all = [];

function preload(){
  
    //load json data
    allData = loadJSON('all1.json');
    atmData = loadJSON('atmospheric1.json');
    ugData = loadJSON('underground1.json');
    totalData = loadJSON('totals1.json');
    
    //console.log('complete data: ');console.log(allData);
   // console.log('atmospheric data: ');console.log(atmData);
 
    
}

function setup() {
  
 //object for country
 function con (name, yer, ung,atmp, testss){
      this.name = name;
      this.yer = yer;
      this.ung = ung;
      this.atmp = atmp, 
      this.testss = testss;
  }
  
    
  years = allData['years'];
  countries = allData['countries'];
  console.log(countries);
  
  x=0;
  y=windowHeight/2;
    
    //all arrays
    years.forEach((d,i) =>{
      
        yr.push(d.year);
        details.push(d.details)
        underground.push(d.total.underground);
        atmospheric.push(d.total.atmospheric);
        tests.push(d.total.tests);
        
        //United Kingdom : array of objects
        uk[i] = new con('United Kingdom', d.year, d.details['United Kingdom'].underground, d.details['United Kingdom'].atmospheric,d.details['United Kingdom'].tests);
        
        //United States : array of objects
        us[i] = new con('United States', d.year, d.details['United States'].underground, d.details['United States'].atmospheric,d.details['United States'].tests);

        //Russia : array of objects
        ru[i] = new con('Russia', d.year, d.details['Russia'].underground, d.details['Russia'].atmospheric,d.details['Russia'].tests);

        //Pakistan : array of objects
        pk[i] = new con('Pakistan', d.year, d.details['Pakistan'].underground, d.details['Pakistan'].atmospheric,d.details['Pakistan'].tests);

        //India : array of objects
        id[i] = new con('India', d.year, d.details['India'].underground, d.details['India'].atmospheric,d.details['India'].tests);

        //France : array of objects
        fr[i] = new con('India', d.year, d.details['France'].underground, d.details['France'].atmospheric,d.details['France'].tests);
        
        //China : array of objects
        ch[i] = new con('China', d.year, d.details['China'].underground, d.details['China'].atmospheric,d.details['China'].tests);
       
        //North Korea : array of objects
        nk[i] = new con('North Korea', d.year, d.details['North Korea'].underground, d.details['North Korea'].atmospheric,d.details['North Korea'].tests);
        
        all.push(uk[i]); all.push(us[i]); all.push(ru[i]); all.push(pk[i]); all.push(id[i]); all.push(fr[i]); all.push(ch[i]); all.push(nk[i]);

        noStroke();
        fill('#345687');
        ellipse(x,y,2,2);
         x += (windowWidth-40)/72;
        
    });
    
   console.log(atmospheric[2]);
   console.log(underground[2]);
   
   all.push(uk);
   all.push(us);
   console.log('All: '); console.log(all);
   console.log('United Kingdom: '); console.log(uk);
   console.log('United States: '); console.log(us);
   console.log('Russia: '); console.log(ru);
   console.log('Pakistan: '); console.log(pk);
   console.log('India: '); console.log(id);
   console.log('France: '); console.log(fr);
   console.log('China: '); console.log(ch);
   console.log('North Korea: '); console.log(nk);

   
    //min max for ug, at, and total
    var minUG = d3.min(underground); var maxUG = d3.max(underground);
    var minAT = d3.min(atmospheric); var maxAT = d3.max(atmospheric);
    var minTotal = d3.min(tests); var maxTotal = d3.max(tests);
    
}

function draw(){
    
    createCanvas(windowWidth, windowHeight);
    
    stroke(0.5);
    line(20, windowHeight/2, windowWidth-20, windowHeight/2);
    
    x=20;
    xr=17;
    y=windowHeight/2;
    
    noStroke();
    fill(126,204,238,30);
    rect(0,0,windowWidth,windowHeight/2);
    fill(89,66,70,30);
    rect(0,windowHeight/2,windowWidth,windowHeight);
    
    for(i=0;i<73;i++){
     
        noStroke();
        fill('#345687');
        ellipse(x,y,2,2);
       
        fill('#345687');
        rect(xr, (windowHeight/2-(atmospheric[i]*2)) , 3, atmospheric[i]*2)

         fill('#594246');
         rect(xr, windowHeight/2 , 3, underground[i]*2)
         
          x += (windowWidth-40)/72;
         xr += (windowWidth-40)/72; //594246
         
    }
    
    
    x=30;
    for(i=0;i<countries.length; i++){
        textFont('Roboto', 14);
        textStyle(BOLD);
        text(countries[i].toUpperCase(),x,50,windowWidth/8-20,70);
        textAlign(CENTER);
    
        x+=windowWidth/8-10;
    }


    // countries.forEach((d,i) =>{
        
    //     var svg = d3.select('svg')
    //              .append('div')
    //              .text((d,i)=>{ return d[i];})
    //              .attr('x',(d,i)=>{ return i*windowWidth/8-10 })
    //              .attr('y',50);
           
        
    //});
    
    
    
}


  
