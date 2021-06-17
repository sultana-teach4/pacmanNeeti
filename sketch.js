//const Engine = Matter.Engine;
//const World= Matter.World;
//const Bodies = Matter.Bodies;
//const Constraint = Matter.Constraint;

//var engine, world;

var wall1, wall2, wall3, wall4, wall5, 
wall6, wall7, wall8, wall9, wall10, 
wall11, wall12, wall13, wall14, wall15, 
wall16, wall17, wall18, wall19, wall20;

var gost1, gost2, gost3, gost4;
var pacMan;
var iwall1, iwall2, iwall3, iwall4, iwall5;
var redImage;

function preload(){
redImage=loadImage("images/Rgost.png")
}

function setup() {
  createCanvas(800,400);

  //Outer walls
  wall1 = createSprite(400, 50, 600, 5);
  wall2 = createSprite(100, 200, 5, 300); 
  wall3 = createSprite(400, 350, 600, 5);
  wall4 = createSprite(700, 200, 5, 300);

  //Inner walls
  wall5 = createSprite(240, 150, 280, 5);
  wall5.shapeColor = "white";
  
  wall6 = createSprite(300, 100, 300, 5);
  wall6.shapeColor = "red";
  
  wall7 = createSprite(445, 150, 5, 100);
  wall7.shapeColor = "blue";
  
  wall8 = createSprite(325, 200, 250, 5);
  wall8.shapeColor = "cyan";
  
  wall9 = createSprite(200, 250, 5, 100);
  wall9.shapeColor = "pink";
  
  wall10 = createSprite(150, 250, 5, 100);
  wall10.shapeColor = "green";
  
  wall11 = createSprite(300, 300, 200, 5);
  wall11.shapeColor = "orange";
  
  wall12 = createSprite(390, 250, 300, 5);
  wall12.shapeColor = "purple";

  wall13 = createSprite(540, 175, 5, 150);
  wall13.shapeColor = "yellow";

  wall14 = createSprite(200, 150, 200, 5);
  wall14.shapeColor = "brown";

  wall15 = createSprite(495, 150, 5, 100);
  wall15.shapeColor = "lightblue";

  wall16 = createSprite(590, 100, 100, 5);
  wall16.shapeColor = "golden";
  
  wall17 = createSprite(590, 220, 5, 150);
  wall17.shapeColor="white"
  wall18 = createSprite(470, 280, 5, 60);
  wall18.shapeColor="yellow"
  wall19 = createSprite(640, 220, 5, 150);

  //Gost Creation
 
  red=new reddy();
  gost2 = createSprite(160, 80, 20, 20);
  gost2.shapeColor = "pink";
  gost2.velocityX = 2;
  gost2.debug = true;
  gost2.setCollider("rectangle", 0, 0, 40, 40);

  gost3 = createSprite(190, 80, 20, 20);
  gost3.shapeColor = "cyan";
  gost3.velocityX = 4;
  gost3.debug = true;
  gost3.setCollider("rectangle", 0, 0, 40, 40);

  gost4 = createSprite(220, 80, 20, 20);
  gost4.shapeColor = "orange";
  gost4.velocityX = 5;
  gost4.debug = true;
  gost4.setCollider("rectangle", 0, 0, 40, 40);

  pacMan = createSprite(670, 325, 20, 20);
  pacMan.shapeColor = "yellow";

  //invisible walls
  iwall1 = createSprite(470, 330 , 5, 5);
  iwall1.shapeColor = "green";

  iwall2 = createSprite(490, 80, 5, 5);
  iwall2.shapeColor = "green";

  iwall3 = createSprite(150, 400, 5, 5);
 iwall3.shapeColor = "green";
iwall1.debug=true;
iwall1.setCollider("rectangle",0,0,1,1)
  //iwall4 = createSprite(400, 345, 600, 5);
  //iwall4.shapeColor = "green";

  iwall5 = createSprite(100, 90, 5, 5);
  iwall5.shapeColor = "green";

  //gost1 = new Gost(200, 200);
  
}

function draw() {
  background("black"); 
  //gostMovement(gost4); 
  //gostMovement(gost3); 
  //gostMovement(gost2); 
  //gostMovement(gost1); 
  
red.display();

  //Engine.update(engine);
  //gost1.display();
  drawSprites();
}

