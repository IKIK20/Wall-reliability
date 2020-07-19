var bullet,wall,speed,weight,deformation,thickness;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 50, 20);
  bullet.shapeColor=color("white")
  wall=createSprite(1200,200,thickness,height/2)
  wall.shapeColor=color("blue")
  speed=random(123,221)
  weight=(30,52)
  thickness=random(22,83)
}

function draw() {
  background("black");  
  bullet.velocityX=speed
  if(wall.x-bullet.x < bullet.width + wall.width/2){
    bullet.velocityX=0
    var deformation=0.5 * weight * speed * speed/(thickness * thickness * thickness)
    if(deformation>10){
      bullet.shapeColor=color("red")
      wall.shapeColor=color("red")
    }
    if(deformation<10){
      bullet.shapeColor=color("green")
      wall.shapeColor=color("green")
    }
    
  }

  drawSprites();
}