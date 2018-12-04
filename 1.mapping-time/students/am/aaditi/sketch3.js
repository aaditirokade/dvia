//radial movement
//angle is a function of minutes

var maxWidth = 400;

function setup() {
  createCanvas(800, 800);
  print('starting time:', clock());
  noStroke();
 
}

function draw() {
  
  
  // check the clock for the current time and unpack some of its fields to generate a time-string
  var now = clock();
  background(50);
  
  var axis1 = map(now.hour,0,24,0, 200);
  var axis2 = map(now.min,0,60,0,200);
  var axis3 = map(now.sec,0,60,0,200);
  var axis4 = map(now.ms,0,24,0,10);
  
  //var axis5 = map(now.day,0,30,0,200);
  
  
  var color1 =  map(now.sec,0,60,0,255);
  
  // fill(color1);
  // triangle(0, height, width-axis2, height-axis2, width, 0);
  
  stroke(color1);
  strokeWeight(2);
  
  // line(width/2, (height/2-axis1), (width/2+axis2), height/2);
  // line((width/2+axis2), height/2, width/2, (height/2+axis3));
  // line(width/2, (height/2+axis3), (width/2-axis4), height/2);
  // line((width/2-axis4), height/2, width/2, (height/2-axis1));
  fill(color1, 255-color1, 40);
  
  beginShape();
  vertex(width/2, (height/2-axis1));
  vertex((width/2+axis2), height/2);
  vertex(width/2, (height/2+axis3));
  vertex((width/2-axis4/10), height/2);
  vertex((width/2-axis4/10), height/2-axis5*2);
  endShape(CLOSE);
  
}