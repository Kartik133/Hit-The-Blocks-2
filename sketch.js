const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world,polygen,block1,block2,block3,block4,block5,block6,block7,block8,block9;

function setup() {
    createCanvas(1200,500);

    engine = Engine.create();
    world = engine.world;

    polygen = new Polygen(150,250,40,40);

    block1 = new Block(430,235);
    block2 = new Block(460,235);
    block3 = new Block(490,235);
    block4 = new Block(520,235);
    block5 = new Block(550,235);
    block6 = new Block(460,195);
    block7 = new Block(490,195);
    block8 = new Block(520,195);
    block9 = new Block(490,155);
    block10 = new Block(520,275);
    block11 = new Block(550,275);
    block12 = new Block(580,275);
    block13 = new Block(400,275);
    block14 = new Block(430,275);
    block15 = new Block(460,275);
    block16 = new Block(490,275);

    block17 = new Block(730,135);
    block18 = new Block(760,135);
    block19 = new Block(790,135);
    block20 = new Block(820,135);
    block21 = new Block(850,135);
    block22 = new Block(760,95);
    block23 = new Block(790,95);
    block24 = new Block(820,95);
    block25 = new Block(790,55);

    blockGround1 = new BlockGround(490,350,250,10);
    blockGround2 = new BlockGround(790,210,190,10);
    ground = new BlockGround(600,490,1200,20);

    slingShot = new SlingShot(polygen.body,{x:150,y:250})

}

function draw() {
    background(60,46,46);

   Engine.update(engine); 

   fill(255);
   stroke(0);
   textSize(35);
   text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",35,40);

   polygen.display();

   push();
    fill(255,190,196)
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block25.display();
   pop();

   push();
    fill(0,228,208);
    block6.display();
    block7.display();
    block8.display();
    block22.display();
    block23.display();
    block24.display();
   pop();

   push();
    fill(128,125,120);
    block9.display();
   pop();

   push();
   fill(103,209,234)
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
   pop();
   
   blockGround1.display();
   blockGround2.display();
   ground.display();
   slingShot.display();
}

function mouseDragged() {
    Matter.Body.setPosition(polygen.body,{x:mouseX,y:mouseY})
}

function mouseReleased() {
   slingShot.fly();
}

function keyPressed() {
    if(keyCode===32) {
        slingShot.attach(polygen.body);
    }
}