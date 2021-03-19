var GameState = 1;

var PLAY = 1

var END = 0;

var player, play;

var bullet, butI;

var scene, sceneI;

var scene2, scene3;

var bullet, bull, bullG;

var black, black2, black3, blaI2, blaI3, blaI, blackG;

var coins, coinc, coinG;

var tex, tex2, tex3, te1, te2, te3;

var ufo, ufoI, ufoG;

var ar, arr;

var score;

function preload(){
play = loadAnimation("cr61.png", "cr62.png");
sceneI = loadImage("space.jpg");
bullet = loadAnimation("bull1.png", "bull2.png");
blaI = loadImage("monster1.png");
blaI2 = loadImage("monster2.png");
blaI3 = loadImage("monster3.png");
coinc = loadImage("coin.png");
ufoI = loadImage("UFO.png");
buti = loadImage("play.png");
te1 = loadImage("tex1.png");
te2 = loadImage("tex2.png");
te3 = loadImage("tex3.png");
arr = loadImage("arrow.png");
}

function setup(){
createCanvas(1800, 1000);

scene = createSprite(1100, 500, 2050, 2050);
scene.velocityX = -36;
scene.addImage(sceneI);
scene.scale = 8.5;

scene3 = createSprite(900, 500, 2050, 2050);
scene3.shapeColor = "white";

tex2 = createSprite(900, 340, 50, 50);
tex2.addImage(te3); 
tex2.scale = 1.5;

scene2 = createSprite(900, 500, 2050, 2050);
scene2.shapeColor = "lime";

tex = createSprite(980, 300, 50, 50);
tex.addImage(te1);
tex.scale = 2.3;

player = createSprite(100, 900);
player.addAnimation("player", play);
player.scale = 0.2;
player.visible = false;

but = createSprite(900, 500, 50, 50);
but.addImage(buti);
but.scale = 0.2;

score = 0;

bullG = new Group();

blackG = new Group();

ufoG = new Group();

coinG = new Group();
}

function draw(){
background("blue");

console.log(scene.x);

if(GameState === PLAY){

if(scene.x < 700){
  scene.x = 940;
}

var edges = createEdgeSprites();
player.collide(edges);

if(keyDown(UP_ARROW)){
  player.y = player.y - 25;
}

if(keyDown(DOWN_ARROW)){
  player.y = player.y + 25;
}

if(keyDown("space")){
  spawnBullets();
}

if(blackG.isTouching(player)){
  player.visible = false;
  }

if(player.visible = false){
  textSize(50);
  text("You lose", 800, 500);
}

if(coinG.isTouching(player) && player.visible === true && bullG.visible === true && blackG.visible === true){
  score = score + 1;
  coinG.destroyEach();
}

if(bullG.isTouching(blackG)){
  score = score + 10;
  blackG.destroyEach();
  bullG.destroyEach();
}

}

if(mousePressedOver(but)){
  scene2.destroy();
  but.destroy();
  tex.destroy();
}

if(keyDown("s")){
  scene3.destroy();
  tex2.visible = false;
}

if(tex2.visible === false){
  player.visible = true;
  bullG.visible = true;
  blackG.visible = true;
}

   
  spawnBlacks();
  drawSprites();

  textSize(50);
  fill("cyan");
  strokeWeight(7);
  stroke("pink");
  fill("cyan");
  text("Score: " + score, 100, 100);

}

function spawnBullets(){
bull = createSprite(110, 900);
bull.shapeColor = "gold";
bull.velocityX = 25;
bull.y = player.y;
bull.lifetime = 140;  
bull.addAnimation("bull", bullet);
bull.scale = 0.1;
bullG.add(bull);
}

function spawnBlacks(){
  if(frameCount % 100 === 0){
    black = createSprite(1800, Math.round(random(10, 1000)), 50, 50);
    black.velocityX = -25;
    black.addImage(blaI);
    black.scale = 0.4;
    black.lifetime = 150;
    blackG.add(black);
  }

  if(frameCount % 150 === 0){
    black2 = createSprite(1800, Math.round(random(10, 1000)), 50, 50);
    black2.velocityX = -25;
    black2.addImage(blaI2);
    black2.lifetime = -25;
    black2.scale = 0.2;
    blackG.add(black2);
  }

  if(frameCount % 200 === 0){
    black3 = createSprite(1800, Math.round(random(10, 1000)), 50, 50);
    black3.velocityX = -25;
    black3.addImage(blaI3);
    black3.scale = 0.2;
    black.lifetime = 150;
    blackG.add(black3);
  }
}