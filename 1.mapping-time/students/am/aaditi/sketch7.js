//arc(479, 300, 280, 280, PI, TWO_PI);

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
