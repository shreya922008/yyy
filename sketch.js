
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob1,bob2,bob3,bob4;
var roof


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1= new Bob(200,500);
	bob2= new Bob(250,500);
	bob3=new Bob(300,500);
	bob4=new Bob (350,500);
	bob5=new Bob(400,500);
roof=new Roof(300,200,450,20)
//  rope1= new Rope(bob1.body,ground.body,-25*2,0);
// rope2= new Rope(bob2.body,ground.body,-50*2,0);
//  rope3= new Rope(bob3.body,ground.body,-01*2,0);
//  rope4= new Rope(bob4.body,ground.body,25*2,0);
//  rope5= new Rope(bob5.body,ground.body,50*2,0);
	

	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background("white");
	bob1.display()
	bob2.display()
	bob3.display()
	bob4.display()
	bob5.display()
	roof.display()
	// rope1.display()
	// rope2.display()
	// rope3.display()
	// rope4.display()
	// rope5.display()
	drawSprites();

}

