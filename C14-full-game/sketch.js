var trex;
var trex_running;
var ground;
var groundImage;


function preload(){
trex_running=loadAnimation("trex1.png","trex3.png","trex4.png");
groundImage=loadImage("ground2.png")
}


function setup(){
  createCanvas(600,200);
  trex=createSprite(50,150,10,70)
  trex.addAnimation("running",trex_running);
  trex.scale=0.5

  ground=createSprite(300,180,600,10);
  ground.addImage("abc",groundImage);
  ground.velocityX=-6;

}


function draw(){
background(180);

if(keyDown("space")){
  trex.velocityY=-10
}
trex.velocityY=trex.velocityY+1

trex.collide(ground)

drawSprites()
}












