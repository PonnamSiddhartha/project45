var plant;
var plantImage1,plantImage2,plantImage3,plantImage4;
var sun,sunImage;
var obstacle,obstacleImage;
var player1,player1Animation;
var player1,player2Animation;
var alien,alienAnimation;
var ground1,groundImage,ground2,ground3;

function preload(){
  sunImage = loadImage("sun.png");
  plantImage1 = loadImage("s.jpg");
  plantImage2 = loadImage("s1.jpg");
  plantImage3 = loadImage("s2.jpg");
  plantImage4 = loadImage("s3.jpg");

  obstacleImage = loadImage("obstacle.png");

  player1Animation = loadAnimation("player1.png","player2.png");
  player2Animation = loadAnimation("player3.png","player4.png");

  alienAnimation = loadAnimation("alien1.png","alien2.png");

  groundImage = loadImage("ground.png")
}
function setup() {
  createCanvas(1400,650);
  plant=createSprite(100,400,20,20)
  plant.addImage("s.jpg",plantImage1);

  sun = createSprite(200,20,20,20);
  sun.addImage("sun",sunImage)
  sun.scale=0.1;

  player1 = createSprite(750,180,20,20);
  player1.addAnimation("player1",player1Animation);
  player1.scale=0.5;
  
  player2 = createSprite(750, 380, 20, 20);
  player2.addAnimation("player1", player2Animation);
  player2.scale = 0.5;
  
  ground1 = createSprite(1055,225,20,20);
  ground1.addImage("ground1", groundImage);
  //ground.velocityX = -(6 + 3 * score / 100);
  ground1.scale= 0.28 ;

  ground2 = createSprite(1055, 425, 20, 20);
  ground2.addImage("ground1", groundImage);
  //ground.velocityX = -(6 + 3 * score / 100);
  ground2.scale = 0.28;

  ground3 = createSprite(1055, 590, 20, 20);
  ground3.addImage("ground1", groundImage);
  //ground.velocityX = -(6 + 3 * score / 100);
  ground3.scale = 0.28;
  
  alien = createSprite(750,550,20,20);
  alien.addAnimation("aeghi",alienAnimation)
  alien.scale=0.5;

}

function draw() {
  background(255, 255, 255);
 // ground.velocityX = -(6 + 3 * score / 100);
  line(700,0,700,600) 
  line(700, 400, 1400, 400);  
  line(700, 580, 1400, 580);  
  drawSprites();
}
function level1(){
  player2.visible
}