const Engine = Matter.Engine
const World= Matter.World
const Bodies = Matter.Bodies

var engine;
var world;
var bola;
var solo;

function setup() {
  createCanvas(400,400);
//crie o mecanismo
engine= Engine.create();

//Adicione mundo ao mecanismo
  world = engine.world;


   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
  
//crie o solo
solo=Bodies.rectangle(200,390,400,20,ground_options);
World.add(world,solo);


  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);

  

  ellipse(ball.position.x,ball.position.y,20);
  rect(solo.position.x,solo.position.y,400,20);
}