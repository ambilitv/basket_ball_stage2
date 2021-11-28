const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

function preload(){
    basketballImage = loadImage("Images/basketball.png");
    courtImage = loadImage("Images/court.png");
}


function setup(){
    createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    ball = new Ball(600,300);
    platform_down= new Platform(600,590,1200,10);
    platform_left= new Platform(180,50,10,90);
    platform_right= new Platform(1010,50,10,90);
   
    player11= new Player(550,300,10,100);
   

  
  
}//


function draw(){
    background(189);
    image(courtImage, 0, 0, width, height);
    Engine.update(engine);
    drawSprites();
    ball.display()
    //platform_player1.display();
    player11.display();
    
    platform_left.display();
    platform_right.display();
    platform_down.display();
   

}
function keyPressed(){

    if(keyCode===32){
     
        Matter.Body.applyForce(player11.body, player11.body.position, {x:1, y:-90});
       
    }

    //Left Arrow
    if(keyCode===37){
        
        Matter.Body.applyForce(player11.body, player11.body.position, {x:-90, y:0});
    }
    if(keyCode===39){
       
        Matter.Body.applyForce(player11.body, player11.body.position, {x:60, y:0});
        
    }
}