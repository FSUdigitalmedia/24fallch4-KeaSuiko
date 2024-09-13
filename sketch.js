
let WFont;
let y = 0;
let speed = 3;  

function preload() {
  WFont = loadFont("assets/PlaywriteCU-VariableFont_wght.ttf")
}

function setup() {
  createCanvas(400, 400);
}


function draw() {
  background(141, 19, 19)
  fill(255, 255, 255)
  textFont(WFont)
  let d= map(mouseY, 0, width, 0, 1)
  textSize(y)
  let yPos = map2(y, 0, width, 0, width, SINUSOIDAL, BOTH)
  text("WILKERSON", 70, yPos)

  if (y > height || y < 0){
    speed = speed * -1;
  }
  y = y + speed;

}
