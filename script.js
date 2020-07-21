// Content behind double slashes is a comment. Use it for plain English notes,
// or for code that you want to temporarily disable.
/* global createCanvas, background, colorMode, HSB, noStroke, color, fill,
   ellipse, text, textSize, line, rect, stroke, strokeWeight, width, mouseX, mouseY , keyIsPressed, mouseIsPressed, pmouseX, pmouseY*/

var  brushHue, minStrokeWeight, maxStrokeWeight, brushHueRandom, brushSaturation, brushBrightness, backgroundColour;

let drawT = false; 
let drawE = false;
let drawR = false;
let drawL = false;
let erasePainting = false;
let changeColour = false; 
let randomBackground = false; 
let changeColourRandom = false; 
let randomEverything = false;


function setup() {
  canvas = createGraphics(windowWidth, windowHeight);
  createCanvas(windowWidth, windowHeight)
  colorMode(HSB, 360, 100, 100);
  brushHue = 0;
  brushSaturation = 0;
  brushBrightness = 0;
  backgroundColour = 0;
  minStrokeWeight = 1;
  maxStrokeWeight = 15;
  strokeWeight(minStrokeWeight)
  background(95);
}

function draw() {
  stroke (0);
    strokeWeight (1);
  strokeWeight (1);
  noFill ();
   textSize (13);
  text("Shapes are T: Triangle, R: Rectangle, E: Ellipse, L: Line",20, 20);
  text (" A: All Random Colours, B: Random Background", 20, 40);
  text ("C: Colour Change, Z: Random Colour Change, Backspace: Clear Canvas", 20, 60);
  chooseColors();
  
  if (drawT == true) {
    triangle (mouseX, mouseY, mouseX-30, mouseY +30, mouseX +30, mouseY +30);
 }
  if (drawE == true) {
   ellipse (mouseX, mouseY, 15, 15);
 }
if (drawR == true) {
   rect (mouseX, mouseY, 20, 20);
 }
if (drawL == true) {
   if (minStrokeWeight < maxStrokeWeight) {
    minStrokeWeight +=1;
  }
  else {
    minStrokeWeight = 1; 
  }
  strokeWeight (minStrokeWeight);
   line (mouseX, mouseY, pmouseX, pmouseY);
 }
  if (erasePainting == true) {
    setup ();
  }
  if (changeColour == true) {
   brushHue +=1;
  if (brushHue >360) {
    brushHue =0;
  }
}   
  if (changeColourRandom == true) {
    chooseColorsRandom ();
  }
  
  if (randomEverything == true ) {
    changeEverything ();
  }
  
  if (randomBackground == true ) {
    changeBackground ();
  }
  
  
}
function chooseColors() {
  stroke(brushHue, 50, 80);
  fill(brushHue, 50, 80);
}

function keyPressed() {
  if ((key == 'T') || (key == 't')) {
    drawT = true;
  }
   else if ((key == 'E') || (key == 'e')) {
    drawE = true;
  }
  else if ((key == 'R') || (key == 'r')) {
    drawR = true;
  }
   else if ((key == 'L') || (key == 'l')) {
    drawL = true;
  }
  else if (keyCode === BACKSPACE){
  erasePainting = true;
}
  else if ((key == 'C') || (key == 'c')) {
    changeColour =  true;
  }
  
  else if ((keyCode == 'Z') || (key == 'z')) {
    changeColourRandom = true; 
  }
  else if((key == 'A') || (key == 'a')) {
    randomEverything = true ;
  }
  else if ((key == 'B') || (key == 'b')) {
    randomBackground = true; 
  }
}
function keyReleased() {
  drawT = false;
  drawE = false; 
  drawR = false; 
  drawL = false;
  erasePainting = false;
  changeColour = false; 
  changeColourRandom =  false;
  randomEverything = false;
  randomBackground = false; 
}

function chooseColorsRandom () {
  brushHue = random (0, 360);
  stroke (brushHue, 80, 80);
   fill (brushHue, 80, 80);
}

function changeEverything () {
  brushHue = random (0, 360); 
  brushSaturation = random (0, 100); 
  brushBrightness = random (0, 100);
  stroke (brushHue, brushSaturation, brushBrightness);
  fill (brushHue, brushSaturation, brushBrightness);

}

function changeBackground () {
   backgroundColour = random (0, 100);
  background(backgroundColour);
}
  