//radial movement
//angle is a function of minutes

var maxWidth = 400;

function setup() {
  createCanvas(1000,1000);
  print('starting time:', clock());
  noStroke();
 
}

function draw() {
   
  var now = clock();
  background(245);
  
  
  //rect
  var sqWidth = width/30;
  var sqHeight = height/30;
  var secsWidth = map(now.sec,  0,60, 0, maxWidth);

  var color1= map(now.sec, 0, 60, 0,255)
  for (i=0;i<width; i++){
    for (j=0; j<height;j++){
       fill(color1, 40, 100);
       rect(i,j,secsWidth/8, sqHeight);
       j+=sqHeight;
    }
    i+=secsWidth/8;
  }
  
  
  //arc
  
  var axis1 = map(now.hour,0,24,0, 100);
  var axis2 = map(now.min,0,60,0,100);
  var axis3 = map(now.sec,0,60,0,100);
  var axis4 = map(now.ms,0,1000,0,100);
  
  // fill('#ea3c53');
  // //strokeWeight(1);
  // //stroke(120,20,40);
  // //arc(width/2, height/4, 10*axis3/4, 20, PI*2/360, 2*PI*now.progress.sec);
  // arc(width/2, height/4, 20*axis3/4, 60, PI*2/360, 2*PI*now.progress.sec);
  
  // fill('#50c878');
  // //strokeWeight(1);
  // //stroke(20,120,60);
  // //arc(width/2, height/4*2, 10*axis2/4, 40, 2*PI/360, 2*PI*now.progress.min);
  // arc(width/2, height/4*2, 40*axis2/4, 60, 2*PI/360, 2*PI*now.progress.min);
  
  // fill('#0080ff');
  // //strokeWeight(1);
  // //stroke(20,20,120);
  // //arc(width/2, height/4*3, 20*axis1/4, 40, 2*PI/360, 2*PI*now.progress.hour);
  // arc(width/2, height/4*3, 60*axis1/4, 60, 2*PI/360, 2*PI*now.progress.hour);
  
  //shape
  var color2 = map(now.sec,0,60,0,255);
  fill(color2, 255-color2, 40);
  stroke(color2);
  strokeWeight(0.5);
  
  beginShape();
  vertex(width/2, (height/2-axis1)*2);
  vertex((width/2+axis2), height/2);
  vertex(width/2, (height/2+axis3*2));
  vertex((width/2-axis4), height/2);
  //vertex((width/2-axis4/10), height/2-axis5*2);
  endShape(CLOSE);
  
}