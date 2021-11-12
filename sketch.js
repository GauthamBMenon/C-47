var plainimg, plain1,passenger,passengerimg
var gamestate = 0

function preload () {
  plainimg =loadImage ("PLAIN_TAKE_OFF.jpg")
  passengerimg=loadImage("PASSENGERS.jpg")
}                     

function setup() {
  createCanvas(800,400);

}

function draw() {
  background("black");  
  if (gamestate==0){
    plain1=createSprite (400,200)
    plain1.addImage(plainimg)
  }
  if(keyDown("down")){
    gamestate=1
  }
  if (gamestate==1){
    passenger =createSprite (400,200)
    passenger.addImage(passengerimg)
  }
  drawSprites();
}