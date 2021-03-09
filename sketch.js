const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var player;
var slingshot;
var balloonA1,balloonA2;
var balloonB1;
var balloonC1,balloonC2;
var path1,path2,path3,path4,path5,path6;
var bg = "images/bg1.png";
var backgroundImg;
var score = 0;

function preload(){
  getBackgroundImg();
}

function setup() {
  var canvas = createCanvas(1200,700);
  engine = Engine.create();
  world = engine.world;

  player = new Player(200,350,10);
  slingshot = new SlingShot(player.body,{x:250, y:350});
  balloonA1 = new BalloonA(650,190,40);
  balloonA2 = new BalloonA(850,490,40);

  balloonB1 = new BalloonB(650,390,40);

  balloonC1 = new BalloonC(650,590,40);
  balloonC2 = new BalloonC(850,290,40);

  path1 = new Path(650,200,100,5);
  path2 = new Path(650,400,100,5);
  path3 = new Path(650,600,100,5);
  path4 = new Path(850,300,100,5);
  path5 = new Path(850,500,100,5);
  path6 = new Path(150,400,300,5);
}

function draw() {
  if(backgroundImg){
    background(backgroundImg);
  }

  noStroke();
  textSize(35);
  fill("white");
  text("Score " + score, width-300, 50);
  text("Press space to get second chance",600,100);
  text("Drag the arrow using mouse to hit",300,50);
    
  Engine.update(engine);

  slingshot.display();
  player.display();
  balloonA1.display();
  balloonA1.score();
  balloonA2.display();
  balloonA2.score();

  balloonB1.display();
  balloonB1.score();

  balloonC1.display();
  balloonC1.score();
  balloonC2.display();
  balloonC2.score();

  path1.display();
  path2.display();
  path3.display();
  path4.display();
  path5.display();
  path6.display();
  
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(player.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
     slingshot.attach(player.body);
  }
}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=06 && hour<=19){
        bg = "images/bg1.png";
    }
    else{
        bg = "images/bg2.png";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}
