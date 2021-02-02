var PLAY=1;
var END=0;
var monkey , monkey_runningl;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstaclesGroup;
var s=0;
var score=0;
var gameState=PLAY;
var junglee;
var back1;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  junglee = loadImage("jungle.jpg");
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  
  back1=createSprite(300,300,40,40);
  back1.addImage(junglee);
  ground=createSprite(300,470,600,20);
  ground.shapeColor="green";
  monkey= createSprite(100,415,20,20);
  monkey.addAnimation("run",monkey_running);
  monkey.scale=0.15;
  obstaclesGroup = createGroup();
  FoodGroup = createGroup();
  
}


function draw() {
 createCanvas(600,550);
 background("lightgreen");

 if(monkey.isTouching(FoodGroup)){
  
          score = score+1;
   
  }
  
     if(gameState===PLAY){
       
       
     
  s = s + Math.round(getFrameRate()/60);
   if(keyDown("space")&& monkey.y >= 410) {
        monkey.velocityY = -17;
    }
  //  monkey.collide(obstaclesGroup);
  if(FoodGroup.isTouching(monkey)){
    FoodGroup.destroyEach();
   
  }
       if(obstaclesGroup.isTouching(monkey)){
         gameState = END;
         
       }
          
  bana();
 aobstacle();   
        
     }
  if(gameState===END){
    
    obstaclesGroup.setVelocityXEach(0);
    FoodGroup.setVelocityXEach(0);
    monkey.velocityY=0;
    FoodGroup.setVelocityEach(0);
    obstaclesGroup.setLifetimeEach(-2);
    FoodGroup.setLifetimeEach(-2);
    
  }
    monkey.velocityY = monkey.velocityY + 0.8
   monkey.collide(ground);
                                                           
 drawSprites(); 
   text("Score: "+ score, 280,100);
  
   text("Survival Time: "+ s, 250,50);
}

function aobstacle(){
 if (frameCount % 200 === 0){
    obstacle = createSprite(600,425,10,40);
    obstacle.velocityX = -5;
    obstacle.addImage(obstaceImage);   
    obstacle.scale = 0.19;
    obstacle.lifetime = 200;
    obstaclesGroup.add(obstacle);
 }
}
function bana(){
 if (frameCount % 70 === 0){
    banana = createSprite(600,225,10,40);
    banana.velocityX = -5;
    banana.addImage(bananaImage);   
    banana.scale = 0.08;
    banana.lifetime = 200;
    FoodGroup.add(banana);
 }
}




