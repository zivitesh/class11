var ground,groundimg
var trex ,trex_running;
function preload(){
  trex_running = loadAnimation ("trex1.png","trex3.png","trex4.png")
groundimg=loadImage ("ground2.png")
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex = createSprite (50,160,10,10)
 trex.addAnimation("trex_running",trex_running)
 trex.scale = 0.5
 //create a ground sprite
 ground = createSprite (300,180,600,20)
ground.velocityX = -7
ground.addImage (groundimg)
}

function draw(){
  background("lightblue")
 if(keyDown("space")){
  trex.velocityY = -10 
 }  
trex.velocityY = trex.velocityY+0.5

trex.collide(ground)
 
 
 drawSprites()

}
