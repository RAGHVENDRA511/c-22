//namespacing
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var object_options ={
      restitution: 1.5
    }

   object= Bodies.circle(200,100,30,object_options);
    World.add(world,object);

    var ground_options ={
        isStatic: true
    }
    ground=Bodies.rectangle(200,380,400,20,ground_options);
    World.add(world,ground);
    
}

function draw(){
    background(0);
    Engine.update(engine);
    ellipseMode(RADIUS);
    ellipse(object.position.x,object.position.y,30,30);


    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20)
}
