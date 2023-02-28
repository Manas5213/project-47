let ground;
let lander;
var lander_image;
var bg_img;
var background1;
var landerflying;
var vx = 0;
var g = 0.01;
var vy = 0;
var rocketsound;
var asteroid1img;
var asteroid2img;
var asteroid3img;
var asteroid1_sprite;
var asteroid2_sprite;
var asteroid3_sprite;
var background_sprite, background_stars;

function preload()
{
  lander_image = loadAnimation("rocket.png");
  bg_img = loadImage("bg.png");
  background1 = loadAnimation("bg_sur.png");
  landerflying = loadAnimation("rocketflying.png");
  rocketsound = loadSound("rocketSound.wav");
  asteroid1img = loadImage("asteroid1.png");
  asteroid2img = loadImage("asteroid2.png");
  asteroid3img = loadImage("asteroid3.png");
  background_stars = loadAnimation("spacebackground.jpg");
  
}

function setup() {
  createCanvas(1200,800);
  frameRate(80);

  
  
  background_sprite = createSprite(0,0,1000,700);
  background_sprite.scale = 2;
  background_sprite.addAnimation("bgSprite", background1);
  background_sprite.addAnimation("bgStars", background_stars);
  background_sprite.changeAnimation("bgSprite", background1);
  

  lander = createSprite(100,50,30,30);
  lander.addAnimation("lander", lander_image);
  lander.addAnimation("landerFlying", landerflying);
  lander.scale = 0.5;
  
  ground = createSprite(0,height - 100, 900, 20);
  ground.visible = false;
  rectMode(CENTER);
  textSize(15);
}
function asteroid1(){
  if(frameCount%150 === 0){
asteroid1_sprite = createSprite(400,100);
asteroid1_sprite.scale = 0.5;
asteroid1_sprite.velocityY = 2;
asteroid1_sprite.x = Math.round(random(100, 700));
asteroid1_sprite.addImage("asteroid1", asteroid1img);
asteroid1_sprite.visible = true;
console.log(World.frameCount);
}
}

function asteroid2(){
  if(frameCount%150 === 0){
asteroid2_sprite = createSprite(700,100);
asteroid2_sprite.scale = 0.5;
asteroid2_sprite.velocityY = 2;
asteroid2_sprite.x = Math.round(random(100, 700));
asteroid2_sprite.addImage("asteroid2", asteroid2img);
asteroid2_sprite.visible = true;
console.log(World.frameCount);
}
}

function asteroid3(){
  if(frameCount%150 === 0){
asteroid3_sprite = createSprite(1000,100);
asteroid3_sprite.scale = 0.2;
asteroid3_sprite.velocityY = 2;
asteroid3_sprite.x = Math.round(random(100, 700));
asteroid3_sprite.addImage("asteroid3", asteroid3img);
asteroid3_sprite.visible = true;
console.log(World.frameCount);
}
}




function draw() 
{
  background(51);
  //image(background1,0,0);
  push()
  fill(255);
  text("Vertical Velocity: "+round(vy),800,75);
  pop();
  asteroid1();
  asteroid2();
  asteroid3();
  lander.collide(ground);
  //fall down
  vy +=g;
  lander.position.y+=vy;
  drawSprites();
  if (keyDown(UP_ARROW)){
    vy = vy - 0.5;
    lander.changeAnimation("landerFlying");
    lander.scale = 1
    rocketsound.play();
    rocketsound.setVolume(0.03);
  }
  
  if(lander.y<50){
    background_sprite.changeAnimation("bgStars", background_stars);
    background_sprite.scale = 2.4;
    lander.y = 500;
    lander.x = 550;
    

  }
  
}


