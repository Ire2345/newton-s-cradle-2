const Bodies=Matter.Bodies;
const Engine=Matter.Engine;
const Constraint=Matter.Constraint;
const World=Matter.World;

var engine,world,bodies,constraint;
function setup() {
   createCanvas(3000,800);
 engine=Engine.create();
world=engine.world;
pendulum1=new Pendulum(50,100,20,20)
pendulum2=new Pendulum(55,100,20,20)
pendulum3=new Pendulum(60,100,20,20)
pendulum4=new Pendulum(65,100,20,20)
pendulum5=new Pendulum(70,100,20,20)
sling1=new Sling(pendulum1.body,{x:50,y:100});
sling2=new Sling(pendulum2.body,{x:55,y:100});
sling3=new Sling(pendulum3.body,{x:60,y:100});
sling4=new Sling(pendulum4.body,{x:65,y:100});
sling5=new Sling(pendulum5.body,{x:70,y:100});
}

function draw() {
  background(180);  
Engine.update(engine);
pendulum1.display();
pendulum2.display();
pendulum3.display();
pendulum4.display();
pendulum5.display();
sling1.display();
sling2.display();
sling3.display();
sling4.display();
sling5.display();

}



function mouseDragged(){
Matter.Body.setPosition(pendulum1.body,{x:mouseX,y:mouseY});
}



function mouseReleased(){
sling1.fly();
sling2.fly();
sling3.fly();
sling4.fly();
sling5.fly();
}

function keyPressed(){

if (keyCode===32){
  Matter.Body.setPosition(pendulum1.body,{x:50,y:100})
  sling1.attach(pendulum1.body);
    
  Matter.Body.setPosition(pendulum2.body,{x:55,y:100})
  sling2.attach(pendulum2.body);
    
  Matter.Body.setPosition(pendulum3.body,{x:60,y:100})
  sling3.attach(pendulum3.body);
    
  Matter.Body.setPosition(pendulum4.body,{x:65,y:100})
  sling4.attach(pendulum4.body);
    
  Matter.Body.setPosition(pendulum5.body,{x:70,y:100})
  sling5.attach(pendulum5.body);
    

}



}


