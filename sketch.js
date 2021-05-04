var canvas;
var music;
var r1,r2,r3,r4;
var ball;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    r1=createSprite(0,580,300,20);
    r1.shapeColor="blue"

    r2=createSprite(260,580,200,20);
    r2.shapeColor="orange"

    r3=createSprite(470,580,200,20);
    r3.shapeColor="pink"

    r4=createSprite(690,580,200,20);
    r4.shapeColor="green"

    ball=createSprite(random(20,700),50,40,40)
    ball.shapeColor="white"
    ball.velocityX=4;
    ball.velocityY=8;



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    if(r1.isTouching(ball)){
        ball.shapeColor="blue";
        ball.bounceOff(r1)
        music.stop();
        ball.setVelocity(0,0);
    }

    if(r2.isTouching(ball)){
        ball.shapeColor="orange";
        ball.bounceOff(r2)
    }

    if(r3.isTouching(ball)){
        ball.shapeColor="pink";
        ball.bounceOff(r3)
        music.play();
        
    }

    if(r4.isTouching(ball)){
        ball.shapeColor="green";
        ball.bounceOff(r4)
    }
    //create edgeSprite



    //add condition to check if box touching surface and make it box
    drawSprites();
}
