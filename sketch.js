
let WFont;

function preload() {
  WFont = loadFont("assets/PlaywriteCU-VariableFont_wght.ttf")
}

function setup() {
  createCanvas(400, 400);
  textSize(45)
}



function draw() {
  background(141, 19, 19)
  fill(255, 255, 255)
  textFont(WFont)
  text("WILKERSON", 70, height/2)
}
