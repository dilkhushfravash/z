const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;




function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);
  base1 = new Base(300,height/2+50,600,100,"yellow",true);
  base2 =new Base(width-300,height/2+50,600,100,"yellow",true);
  base3 = new Base(0,height-10,width*2,20,"green",true);
function draw() {
  background(51);
  Engine.update(engine);
 // bridge = new Bridge(15,{x:width/2-400,y:height/2})
  //Matter.Composite.add(bridge.body,jointPoint);
//jointLink = new Link(bridge,jointPoint);
//jointPoint = new Base(width - 600, height / 2 + 10, 40, 20, "#8d6e63", true);

}
 //bridge.show();
 base1.show();
 base2.show();
 base3.show();
}
