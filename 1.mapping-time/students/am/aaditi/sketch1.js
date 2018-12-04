var maxWidth = 400;

function setup() {
  createCanvas(800, 800);
  print('starting time:', clock());
  noStroke();
 

}

function draw() {
  background ('lightgray');
  var sqWidth = width/30;
  var sqHeight = height/30;
  // check the clock for the current time and unpack some of its fields to generate a time-string
  var now = clock();
  
  var secsWidth = map(now.sec,  0,60, 0, maxWidth);
  

  // // draw the time string to the canvas
  // text(now.text.date, 30, 50);
  // text(now.text.time, 30, 100);
  
  var r = random(255);
  var g = random(255);
  var b = random(255);
  fill(130, 90, 60);
  maxXPos = width;
  var maxShift1 = map(now.sec,  0,60, 0, maxXPos);
  //ellipse(maxShift1, height/3, 30,30);
  
  var maxShift2 = map(now.min,  0,60, 0, maxXPos);
  //ellipse(maxShift2*2, height/3*2, 30,30);
  
  var color1= map(now.sec, 0, 60, 0,255)
  for (i=0;i<width; i++){
    for (j=0; j<height;j++){
       fill(color1, 40, 100);
       rect(i,j,secsWidth/8, sqHeight);
       j+=sqHeight;
    }
    i+=secsWidth/8;
  }
  
  textFont('Roboto');
   textSize(40);
   fill('#ffffff');
   //text(now.ms, 370, 400);
   
   
  
}