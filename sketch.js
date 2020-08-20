
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;



function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground = new Ground(600,680,1200,20);

paper = new Paper(100,200,50);

box1 = new Dustbin(1000,660,180,20);

box2 = new Dustbin(920,620,20,100);

box3 = new Dustbin(1080,500,20,300);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  text("PRESS RIGHT ARROW KEY TO SAFELY LAND THE PAPER IN THE WASTE BASKET!",200,200);
 fill("red");
  ground.display();
  paper.display();
  box1.display();
  box2.display();
  box3.display();
 
 // keyPressed();
}


function keyPressed(){
	if(keyCode === RIGHT_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:500,y:-500});
	}

}


