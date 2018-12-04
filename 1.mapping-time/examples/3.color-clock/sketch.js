function setup() {
  // set the width & height of the sketch
  createCanvas(400, 200)

  // draw will be called this many times per second
  frameRate(60)

  // specify colors in hue/saturation/brightness mode & use 0–1 values rather than 0–255
  colorMode(HSB, 1.0)
}

function draw() {
  // check the clock for the current time and unpack some of its fields to generate a time-string
  var now = clock()

  // use the current 'doneness' of the current hour to choose the hue for the background color
  // (note that setting the background also clears the canvas from our previous round of drawing)
  background(now.progress.hour, 1, .3)

  // set up typography & drawing-color
  let pointSize = 42
  textFont("Nixie One")
  textSize(pointSize)
  textAlign(CENTER)
  fill('white')

  // print the time string to the canvas
  text(now.text.time, width/2, height/2 + pointSize/3)
}
