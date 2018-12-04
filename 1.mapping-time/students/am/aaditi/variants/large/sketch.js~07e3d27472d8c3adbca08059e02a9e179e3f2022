//arc(479, 300, 280, 280, PI, TWO_PI);
//aaditi_DVIA_mappingTime_large

function setup() {
  createCanvas(1000,1000);
  print('starting time:', clock());
  
}

function draw() {
    
  var now = clock();
  var color = map(now.day,0,60,0,255);
  background(color,200,255-color);
    
  noFill();
  strokeWeight(2);
  fill('black');
  arcX = 0;
  arcY = 100;
  
  console.log(now.ms);
  
  //-------------------------------second arcs

push();
push();
//translate(0,0);
noStroke();
fill(color,255-color,200);
    for(arcX>50; arcX< 900; arcX++){
      arc(arcX, arcY, 50, 50, PI, -(2*PI*now.ms/10));
      translate(50,0);
      arc(arcX, arcY, 50, 50,(2*PI*now.ms/10),-PI);
      translate(50,0);
    }
  pop();
  

  
  push();
  translate(0,120);
  arcX = 50;
  noStroke();
   fill(200, 255-color, color);
    for(arcY>100; arcY< 900; arcY++){
      arc(arcX, arcY, 100, 100, -PI, 2*PI*now.progress.sec);
      translate(100,0);
      arc(arcX, arcY, 100, 100, -(2*PI*now.progress.sec), PI);
      translate(100,0);
    }
  pop();
  pop();
  
  //---------------------------------minute arcs

 push();
  translate(0,450);
  arcX = 0;
  noFill();
  noStroke();
  fill(255-color,color,200);
  for(arcX>100; arcX< 900; arcX++){
  arc(0, 0, 200, 200,(2*PI*now.progress.min),-(PI));
  translate(200,0);
  arc(0, 0, 200, 200,(PI),-(2*PI*now.progress.min));
  translate(200,0);
  }
pop();
  
  
  //----------------------------hour arcs
  
  push();
  translate(0,750);
  arcX = 0;
  noFill();
  noStroke();
  fill(190, color, 255-color);
  for(arcX>100; arcX< 900; arcX++){
  arc(0, 0, 300, 300, -(2*PI*now.progress.hour), (PI));
  translate(300,0);
  arc(0, 0, 300, 300, -(PI), (2*PI*now.progress.hour));
  translate(300,0);
  }
}
