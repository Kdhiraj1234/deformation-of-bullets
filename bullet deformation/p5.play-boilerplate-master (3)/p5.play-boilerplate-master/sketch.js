var wall, bullet;
var thickness,speed,weight;
var bulletRightEdge,wallLeftEdge;

function setup() {
  createCanvas(1600,400);
  
  thickness=random(22,83);

  speed=random(223,321);

  weight=random(30,52);

  bullet=createSprite(50,200,30,10);

  wall = createSprite(1200,200,thickness,height/2);


}

function draw() {
  background(255,255,255);
  
  bullet.velocityX = speed;

  if(hasCollided(bullet,wall)){

    bullet.velocityX = 0;
    var deformation = 0.5*speed*weight*speed/thickness*thickness*thickness

    if(deformation < 100){
      bullet.shapeColor = "green";
    }
    if(deformation > 100){
      bullet.shapeColor = "red";
    }

  }
  
  drawSprites();
}

function hasCollided(bullet,wall){

  bulletRightEdge = bullet.x + bullet.width; 
  wallLeftEdge = wall.x;

  if(bulletRightEdge >= wallLeftEdge){
    return true;
  }
   return false
}