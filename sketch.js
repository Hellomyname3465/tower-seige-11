const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup() {
    createCanvas(900, 400);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
    ground = new Ground();


    block1 = new Block(300, 275, 30, 40);
    console.log(block1);
    block2 = new Block(330, 275, 30, 40);
    block3 = new Block(360, 275, 30, 40);
    block4 = new Block(390, 275, 30, 40);
    block5 = new Block(420, 275, 30, 40);
    block6 = new Block(450, 275, 30, 40);
    block7 = new Block(480, 275, 30, 40);
    //level two
    block8 = new Block(330, 235, 30, 40);
    block9 = new Block(360, 235, 30, 40);
    block10 = new Block(390, 235, 30, 40);
    block11 = new Block(420, 235, 30, 40);
    block12 = new Block(450, 235, 30, 40);
    //level three
    block13 = new Block(360, 195, 30, 40);
    block14 = new Block(390, 195, 30, 40);
    block15 = new Block(420, 195, 30, 40);
    //top
    block16 = new Block(390, 155, 30, 40);


    box1 = new Block(500, 275, 30, 40);
    console.log(block1);
    box2 = new Block(530, 275, 30, 40);
    box3 = new Block(560, 275, 30, 40);
    box4 = new Block(590, 275, 30, 40);
    box5 = new Block(420, 275, 30, 40);
    box6 = new Block(450, 275, 30, 40);
    box7 = new Block(480, 275, 30, 40);
    //level two
    box8 = new Block(530, 235, 30, 40);
    box9 = new Block(560, 235, 30, 40);
    box10 = new Block(590, 235, 30, 40);
    box11 = new Block(620, 235, 30, 40);
    box12 = new Block(650, 235, 30, 40);
    //level three
    box13 = new Block(560, 195, 30, 40);
    box14 = new Block(590, 195, 30, 40);
    box15 = new Block(620, 195, 30, 40);
    //top
    box16 = new Block(690, 155, 30, 40);

}


function draw() {
    background(56, 44, 44);

    ground.display();

    strokeWeight(2);
    stroke(15);
    fill("skyblue");
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    fill("pink");
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    fill("turquoise");
    block13.display();
    block14.display();
    block15.display();
    fill("grey");
    block16.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    fill("pink");
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    fill("turquoise");
    box13.display();
    box14.display();
    box15.display();
    fill("grey");
    box16.display();

}