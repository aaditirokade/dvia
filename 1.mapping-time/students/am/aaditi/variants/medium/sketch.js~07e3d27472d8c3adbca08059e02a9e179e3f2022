//arc(479, 300, 280, 280, PI, TWO_PI);
//aaditi_DVIA_mappingTime_medium

function setup() {
  createCanvas(1000,1000);
  print('starting time:', clock());
  
}

function draw() {
    
  var now = clock();
  background('white');
    
  noFill();
  noStroke();
  var opacityMs= 1000*now.ms/100;
  var opacitySec= 1000*now.progress.sec;
  var opacityMin= 1000*now.progress.min;
  var opacityHour= 1000*now.progress.hour;
  
  fill(239,83,80,opacityHour);
  arc(width/2, height/2, 750, 750, PI, -(2*PI*now.progress.hour));
  fill(77,208,225,opacityMin);
  arc(width/2, height/2, 500, 500, PI, -(2*PI*now.progress.min));
  fill(174,213,129,opacitySec);
  arc(width/2, height/2, 300, 300, PI, -(2*PI*now.progress.sec));
  fill(255,241,118,opacityMs);
  arc(width/2, height/2, 100, 100, PI, -(2*PI*now.ms/100));
  
}
