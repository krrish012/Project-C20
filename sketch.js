var wall, thickness;
var bullet, speed, weight, damage;

function setup() {
  createCanvas(1600,400);

  bullet = createSprite(50,200,30,10);
  bullet.shapeColor = "black";

  wall = createSprite(1200,200,thickness,height/2); 
  wall.shapeColor = "grey";

  thickness = createSprite(0, 0 , 0, 0 );
  thickness.visible = false;
  thickness = random(22, 83);

  weight = createSprite(10,10,10,10);
  weight.visible = false;
  weight = random(30, 52);

}

function draw() {
  background("LavenderBlush"); 

  bullet.velocityX = random(233, 321);

  //wall.debug = true;
  //bullet.debug = true;
  
  if (bullet.isTouching(wall))  { 

    bullet.velocityX = 0;

    damage = 0.5 * weight * bullet.velocityX * bullet.velocityX / (thickness * thickness * thickness);
  } 

  if (damage > 10) {
    bullet.shapeColor = color(255,0,0);
  }
  if (damage < 10) {
    bullet.shapeColor = color(0,255,0);
  }

  drawSprites();

}