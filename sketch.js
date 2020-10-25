
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var bobObject1,bobObject2, bobObject3,bobObject4,bobObject5;
var roof;
var rope1, rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	bobObject1 = new Bob(200,400,20);
	bobObject1.shapeColor = "red";

	bobObject2 = new Bob(220,400,20);
	bobObject2.shapeColor = "red"

	bobObject3 = new Bob (240,400,20);
	bobObject3.shapeColor = "red";

	bobObject4 = new Bob (260,400,20);
	bobObject4.shapeColor = "red";

	bobObject5 = new Bob(280,400,20);
	bobObject5.shapeColor = "red";

	roof = new Roof(200,200,80,40);
	roof.shapeColor = "blue";

	rope1 = new Rope(bobObject1.body,roof.body,-bobDiameter*2,0);
	rope2 = new Rope(bobObject2.body,roof.body,-bobDiameter*2,0);
	rope3 = new Rope(bobObject3.body,roof.body,-bobDiameter*2,0);
	rope4 = new Rope(bobObject4.body,roof.body,-bobDiameter*2,0);
	rope5 = new Rope(bobObject5.body,roof.body,-bobDiameter*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();


  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}



