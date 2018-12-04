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
  var angle = map(now.min,  0,60, 0, 360);
  
  var x =width/2;
  var y =height/2;
  
  stroke(255);
  strokeWeight(2);
  point(x,y);
  
  //var angle = -45;
  var r = min(width, height)/3;
  
  // var dx = r*cos(angle);
  // var dy = r*sin(angle);
  
  //point (dx,dy);
  //line(x,y,x+dx,y+dy);
  
  // for (i=0; i<angle; i++){
  //   background (50);
  //   var dx = r*cos(-i);
  //   var dy = r*sin(-i);
  //   //fill(random(color1),random(color1),random(color1));
  //   line(x,y,x+dx,y+dy);
  // }
  
    background (50);
    var dx= r*cos(-angle);
    var dy= r*sin(-angle);
    fill(255);
    line(x,y,x+dx,y+dy);
}