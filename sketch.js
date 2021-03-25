var bullet,wall;
var speed,weight,thickness;
function setup() {
  createCanvas(1200,400);
  speed=random(223,321);
  weight=random(30,52);
  bullet=createSprite(50,200,50,50);
  thickness=random(22,83);
  wall=createSprite(800,200,thickness,height/2);
  bullet.velocityX=speed;
}

function draw() {
  background(255,255,255);  
  if(hasCollied(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness)
  }
if(damage>10){
  wall.shapeColor+color(255,0,0);
}
if(damage<10){
  wall.shapeColor=color(0,255,0);
}
  drawSprites();
}
function hasCollied(lbullet,lwall){
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
}