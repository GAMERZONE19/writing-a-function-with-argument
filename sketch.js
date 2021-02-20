var fixedRect, movingRect;

var truck , car ;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,400,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  truck = createSprite(200,300,100,30);
  car = createSprite(1000, 300,100,30);

  truck.shapeColor="red";
  car.shapeColor= "yellow";
  truck.velocityX=4;
  car.velocityX=-2;
}

function draw() {
  background(0,0,0);  
 // movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;

  if(collide(truck,car)){
    truck.velocityX=0;
    car.velocityX=0;
    truck.shapeColor="blue";
  car.shapeColor= "blue";
  }else{
    truck.velocityX=4;
    car.velocityX=-2;
    truck.shapeColor="red";
  car.shapeColor= "yellow";
  }
  
  drawSprites();
}
