//circle density

function setup() {
  createCanvas(1000,1000);
  print('starting time:', clock());
  background(250);
  fill(248,187,208,80);
  noStroke();
  rect(10,10,(width/2)-10,(height/2)-10);
  rect((width/2)+10, (height/2)+10, width-10, height-10);
  rect((width/2)+10, 10, width-10, (height/2)-10);
  rect(10, (height/2)+10, (width/2)-10, height-10);
  
  var now = clock();
   
  maxr1 = map(now.sec, 0, 60, 0, 60);
  
  maxr2 = map(now.min, 0, 60, 0, 50);
  maxr3 = map(now.hour, 0, 24, 0, 100);
  maxr4 = map(now.day, 0, 60, 0, 100);
  
  for(var i=0; i<now.sec; i++){
  var x1= random(30,((width/2)-30));
    var y1= random(30,((height/2)-30));
    var r= 10;
    noFill();
    stroke(194,24,91);
    ellipse(x1,y1,r,r);}
    
    for(var i=0; i<now.min; i++){
      var x2= random(width/2+30, width-30);
    var y2= random(height/2+30, height-30);
    var r= 20;
    noFill();
    stroke(194,24,91);
    ellipse(x2,y2,r,r);
  }
}

function draw() {
}
  // var now = clock();

  // //console.log(now);
  
  // maxr1 = map(now.sec, 0, 60, 0,10);
  // maxr2 = map(now.min, 0, 60, 0, 50);
  // maxr3 = map(now.hour, 0, 24, 0, 100);
  // maxr4 = map(now.day, 0, 60, 0, 100);
 
  // //for(var i=0; i<1; i++){
  //   var x1= random(30,((width/2)-30));
  //   var y1= random(30,((height/2)-30));
  //   var r= maxr1;
  //   noFill();
  //   stroke(194,24,91);
  //   ellipse(x1,y1,r,r);
    
    
  //   var x2= random(width/2+30, width-30);
  //   var y2= random(height/2+30, height-30);
  //   var r= maxr3;
  //   noFill();
  //   stroke(194,24,91);
  //   ellipse(x2,y2,r,r);
    
    
  //   var x2= random(30, width/2-30);
  //   var y2= random(height/2+30, height-30);
  //   var r= maxr2;
  //   noFill();
  //   stroke(194,24,91);
  //   ellipse(x2,y2,r,r);
    
  //   var x2= random(width/2+30, width-30);
  //   var y2= random(30, height/2-30);
  //   var r= maxr4;
  //   noFill();
  //   stroke(194,24,91);
  //   ellipse(x2,y2,r,r);

   
    
    
  //}
  
    // for (var i=0; i<now.min; i++){
    // var x= random(30,(width/2)-30);
    // var y= random(30,(height/2)-30);
    // var r= 20;
    // noFill();
    // stroke(194,24,91);
    // ellipse(x,y,r,r);
  // }

//}