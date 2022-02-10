var bg, bg_img;
var girl, girl_img;




function preload(){
  bg_img = loadImage("bg-img.jpg");
}

function setup() {
  createCanvas(700, 600);
  bg = createSprite(600,300,1200,600);
  bg.addImage(bg_img);
  bg.scale = 3.5;
  girl = createSprite(200,500,200,200);
  invisibleGround = createSprite(600,580,1200,10);
  invisibleGround.visible=false;
}

function draw() {
  //trex.debug = true;
  background(0);
  bg.velocityX = -4;
  if(bg.x<0){
    bg.x=bg.width/2
  }

  if(keyDown("space")){
   girl.velocityY = -5;
  }
girl.velocityY = girl.velocityY+0.5
girl.collide(invisibleGround);
 console.log(bg.x)
  
   
  
  
  drawSprites();
}


    
   