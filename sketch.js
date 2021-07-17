
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var bob1;
var bob2;
var bob3;
var bob4;
var bob5;
var roof;
var rope1
var rope2;
var rope3;
var rope4;
var rope5;

function preload()
{
	
}

function setup() {
createCanvas(400, 400);


engine = Engine.create();
world = engine.world;
bob1=new Bob(290,300,0.5);
bob2=new Bob(240,300,0.5);
bob3=new Bob(190,300,0.5);
bob4=new Bob(140,300,0.5);
bob5=new Bob(90,300,0.5)
roof=new Roof(200,100,5,50);
rope1=new Rope(bob1.body,roof.body,90,10);
rope2=new Rope(bob2.body,roof.body,40,10);
rope3=new Rope(bob3.body,roof.body,-10,10);
rope4=new Rope(bob4.body,roof.body,-60,10);
rope5=new Rope(bob5.body,roof.body,-110,10);

Engine.run(engine);
  
}


function draw() {
rectMode(CENTER);
background(128);
bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();
roof.display();
rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();


drawSprites();
}
