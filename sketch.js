
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var b1


function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    
b1=new bob(200,200,30)
ground1=new Ground(200,50,385,30)
rope1=new Rope(b1.body,ground1.body,-00,0)

b2=new bob(170,200,30)
rope2=new Rope(b2.body,ground1.body,-30,0)

b3=new bob(150,200,30)
rope3=new Rope(b3.body,ground1.body,-60,0)

b4=new bob(230,200,30)
rope4=new Rope(b4.body,ground1.body,30,0)

b5=new bob(250,200,30)
rope5=new Rope(b5.body,ground1.body,60,0)


}

function draw(){
    
    background("skyblue");
    Engine.update(engine);
    strokeWeight(1)
    b1.display()
    ground1.display()
rope1.display()
b2.display()
rope2.display()

b3.display()
rope3.display()
b4.display()
rope4.display()
b5.display()
rope5.display()
KeyPressed()
}


function KeyPressed(){
if (keyDown(UP_ARROW)){
    Matter.Body.applyForce(b3.body, b3.body.position, {x: -30, y: -30})






}











}