
var bg,bgImg
var olaf,olafImg
function preload(){
 bgImg=loadImage("tree.jpg")
 olafImg=loadImage("olaf.png")
}

function setup(){
  createCanvas(800,800)
  
  bg=createSprite(500,500,1000,1000);
  bg.addImage("bg",bgImg)
bg.scale=7

olaf=createSprite(100,700,10,10)
olaf.addImage("olaf",olafImg)
 bg.velocityX=-3
 
 invisiblebg=createSprite(400,780,1000,1)
 invisiblebg.visible=false
}

function draw(){
  background("white");
 
  if(bg.x<0){
    bg.x=bg.width/2
  }

  if(keyDown("space")){
    olaf.velocityY=-12
  }
  olaf.velocityY+=0.8

  olaf.collide(invisiblebg)
  
drawSprites()
}
