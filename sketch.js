
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = Bodies.circle(100,200,20,{restitution:0.3, friction:0, density:1.2});
	World.add(world,ball);

	ground = Bodies.rectangle(400,650,800,10,{isStatic:true});
	World.add(world,ground);

	left = Bodies.rectangle(500,600,10,80,{isStatic:true});
	World.add(world,left);

	right = Bodies.rectangle(700,600,10,80,{isStatic:true});
	World.add(world,right);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20)
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,10)
  rect(left.position.x,left.position.y,10,80)
  rect(right.position.x,right.position.y,10,80)
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:50,y:-70})
	}
}


