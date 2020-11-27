var car;
var wall;
var s, s1,s2,s3;
var speed,weight;
var joker;
var sw;
function preload(){
 //load your images here 
 s=loadImage("red car.jpg");
 s1=loadImage("green car.png");
 s2=loadImage("yellow car.png");
 s3=loadImage("brown car.png");
  sw=loadImage("wall.jpg");
  
}

function setup() {
  createCanvas(1600, 400);
  car=createSprite(50,190,40,40);
  wall=createSprite(1550,200,20,height/2);
  wall.addImage(sw);
  car.addImage("s3",s3)
  car.addImage("s",s)
  car.addImage("s1",s1)
  car.addImage("s2",s2)
  car.scale=0.3;
  joker=0;
if(joker==0){
  speed=random(55,90);
  weight=random(400,1500);
}
}

function draw() {
background("white");
  car.velocityX=speed;
  console.log(wall.x-car.x)
  if(wall.x-car.x<car.width/2+wall.width/2){
    car.velocityX=0;
    joker=2;
    var deformation=0.5*speed*weight*speed/22509;
    if(deformation>180){
       car.changeImage("s")
      car.scale=0.4;
      
    }
    if(deformation<180 && deformation>100){
    car.changeImage("s2");
      car.scale=0.4;
    }
    if(deformation<100){
      car.changeImage("s1");
      
    }
  }
  
  
  drawSprites();
  
  
}