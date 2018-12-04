<<<<<<< HEAD
function setup() {
  // set the width & height of the sketch
  createCanvas(400, 130)

  // print the time to the console once at the beginning of the run. try opening up the
  // web inspector and poking around to see the various values the clock function gives you
  print('starting time:', clock())

}

function draw() {
  // check the clock for the current time and unpack some of its fields to generate a time-string
  var now = clock()

  // set the background to 'white' – you can also specify colors use integers, hex-color strings and more.
  // note that setting the background also clears the canvas from our previous round of drawing
  background('white')

  // set up typography & drawing-color
  textFont("Anonymous Pro") // ← check index.html to see how it was loaded from google-fonts
  textSize(42) // make it big
  fill(100, 50, 50)

  // draw the time string to the canvas
  text(now.text.date, 30, 50)
  text(now.text.time, 30, 100)

}
=======
//arc(479, 300, 280, 280, PI, TWO_PI);
//aaditi_DVIA_mappingTime_small

function setup() {
  createCanvas(1000,1000);
  print('starting time:', clock());
  
}

function draw() {

  var now = clock();
    
  arcX = 200;
  arcY = 200;
  
  console.log('am'+now.am);
  console.log('pm'+now.pm);
  
  
  if(!now.am){

fill('black');
rect(0,0,width, (height/2)+20);
fill('white');
rect(-1,height/2, width+1, height);

if ((now.sec%2) === 0){
noFill();
stroke('white');
strokeWeight(1);
var spaceX = 30;
for (var i=0; i<(height/2);i++){
arc(700, 500, 500+spaceX, 500+spaceX,-PI*now.progress.sec, PI/180);
spaceX += 30;
}
fill('white');
arc(700, 500, 500, 500,-PI*now.progress.sec, PI/180);
}

else{
noFill();
stroke('black');
strokeWeight(1);
var spaceX = 30;
for (var spaceX=30;spaceX<1500; spaceX++){
arc(300, 500, 500+spaceX, 500+spaceX,PI/180,PI*now.progress.sec);
spaceX +=30;
}

fill('black');
arc(300, 500, 500, 500,PI/180,PI*now.progress.sec);}
}
  else{
  fill('white');
  rect(0,0,width, (height/2)+20);
  fill('black');
  rect(-1,height/2, width+1, height);
  
  if ((now.sec%2) === 0){
  noFill();
  stroke('black');
  strokeWeight(1);
  var spaceX = 30;
  for (var i=0; i<(height/2);i++){
     arc(700, 500, 500+spaceX, 500+spaceX,-PI*now.progress.sec, PI/180);
     spaceX += 30;
  }
  fill('black');
  arc(700, 500, 500, 500,-PI*now.progress.sec, PI/180);
  }
  else{
  noFill();
  stroke('white');
  strokeWeight(1);
  var spaceX = 30;
  for (var spaceX=30;spaceX<1500; spaceX++){
  arc(300, 500, 500+spaceX, 500+spaceX,PI/180,PI*now.progress.sec);
  spaceX +=30;
  }
    
     fill('white');
     arc(300, 500, 500, 500,PI/180,PI*now.progress.sec);}
  }
  
}
>>>>>>> 07e3d27472d8c3adbca08059e02a9e179e3f2022
