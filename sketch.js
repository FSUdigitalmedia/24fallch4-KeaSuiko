
let WFont;
let y = 0;
let speed = 5;  
let speed2 = 8;
let WILKERSON;
let x = 0;

function preload() {
  WFont = loadFont("assets/PlaywriteCU-VariableFont_wght.ttf")
  WILKERSON = loadImage("assets/wilk.jpg")
}

function setup() {
  createCanvas(500, 500);
}

function draw(){
  background(141, 19, 19)
  fill(255, 255, 255)
  
  //textFont(WFont)
  

  let yPos = map2(y, 0, height, 0, height, SINUSOIDAL, OUT)
  let r = mouseX;
  let p = mouseY;

  let xPos = map2(x, 0, width, 0, width, CUBIC, IN)

  textSize(50)
  fill(255, mouseY)
  text("Kamiya", yPos, 400, 50, 50)

  textSize(50)
  fill(255, mouseY)
  text("神谷", xPos , 100, 50, 50)

  

  if (keyIsPressed){
  image(WILKERSON, 0, yPos, yPos, yPos)}

  //if (p > 1500) { p = 1500}
  //if (r > 500) { r = 500}
  
  if (y > width || y < 0){
    speed = speed * -1;
  }
  y = y + speed;

   
  if (x > width || x < 0){
    speed2 = speed2 * -1;
  }
  x = x + speed2;
} 


//function mousePressed(){text("W", 10, 10, 10, 10)}
