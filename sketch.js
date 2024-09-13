
let WFont;
let y = 0;

let speed = 5;  
let WILKERSON;

function preload() {
  WFont = loadFont("assets/PlaywriteCU-VariableFont_wght.ttf")
  WILKERSON = loadImage("assets/wilk.jpg")
}

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(141, 19, 19)
  fill(255, 255, 255)

  //let d= map(mouseY, 0, width, 0, 1)
  let yPos = map2(y, 0, height, 0, height, SINUSOIDAL, BOTH)
  let r = mouseX;
  let p = mouseY;
  image(WILKERSON, 0, yPos, yPos, yPos)

 if (p > 1500) { p = 1500}
  if (r > 500) { r = 500}
  
  if (y > height - 190 || y < 0){
    speed = speed * -1;
  }
  y = y + speed;

}
