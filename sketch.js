var wall,car; 
var weight,speed;

function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);

  speed=random(55,90);
  weight=random(400,1500);
}

function draw() {
  background(255,255,255);  
  
  wall=createSprite(1500,200,60,height/2);
  car=createSprite(50,200,50,50);
  car.velocityX=speed;
 
  deformation();

 drawSprites();
}

function defrmation() {

if(wall.x-car.x < (car.x + wall.x/2))
{car.velocityX=0;
  var deformation = 0.5 * weight * speed * speed/22500;

  if (deformation > 180) {
    car.shapeClr=color(255,0,0);
  }
  
  if (deformation < 180 && deformation > 100) {
    car.shapeClr=color(230,230,0);
  }

  if (deformation < 80) {
    car.shapeClr=color(0,255,0);
  }

}
}



