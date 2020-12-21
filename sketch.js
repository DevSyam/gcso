var car, wall;
var speed, weight;
var deformation;


function setup() {
  createCanvas(1000,400);

  car = createSprite(50, 200, 70, 30);
  
  wall = createSprite(900,200,60,height/2);
  
  speed = random(55,90);
  car.velocityX = speed;
  
  weight = random(400,1500);
  deformation = 0;
}

function draw() {
  background(0); 
  
  if (wall.x - car.x <= wall.width/2 + car.width/2) {
    car.velocityX = 0;
    deformation = (0.5 * weight * speed * speed)/22500;
    if (deformation < 100) {
      car.shapeColor = "green";
    }
    if (deformation >= 100 && deformation <= 180) {
      car.shapeColor = color(230,230,0);
    }
    if (deformation > 180){
      car.shapeColor = "red";
    }
  }
  drawSprites();
}