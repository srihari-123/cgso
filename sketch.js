var car ;
var wall;
var speed,weight;

function setup() {
  createCanvas(500,400);
 car= createSprite(20, 10, 20, 20);
 wall=createSprite(400,200,30,400);
 speed=random(55,90)
 weight=random(400,1500)
 car.velocityX=speed;
}

function draw() {
  background(255,255,255);  
  if(wall.x-car.x<(car.width+wall.width)/2)
  {
car.velocityX=0;
var deformation=0.5* weight*speed* speed/22509;
if (deformation>180)
{
  car.shapeColor="red"
}
if(deformation<180&& deformation>100){
  car.shapeColor="yellow"
}
if(deformation<100){
  car.shapeColor="green"
}

  }
  drawSprites();
}