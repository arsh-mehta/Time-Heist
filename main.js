alert("This is a Practice Level. \n You Have To Collect Two Of Each Gems And Touch The Red Box.")

gameState = 1;
var player;

// Indivisual gems
var gem1, gem2, gem3, gem4;

// Gems Group
var gems1,gems2,gems3,gems4;

// Platform Group
var platforms;

// Gems Scores
var timeGem = 0;
var leapGem = 0;
var weaponGem = 0;

function setup() {
  createCanvas(600, 400);

  ground = createSprite(300, 400, 600, 20);
  ground.shapeColor = "#964B00"

  player = createSprite(200, 370, 20, 40);
  player.shapeColor = "Black";

  platforms = createGroup()

  platform1 = createSprite(200, 270, 80, 20);
  platforms.add(platform1)
  platform2 = createSprite(400, 320, 80, 20);
  platform3 = createSprite(300, 200, 80, 20);
  platform4 = createSprite(500, 120, 80, 20);
  platform5 = createSprite(100, 180, 80, 20);
  platform6 = createSprite(300, 300, 80, 20); 
  platforms.add(platform1);
  platforms.add(platform2);
  platforms.add(platform3);
  platforms.add(platform4);
  platforms.add(platform5);
  platforms.add(platform6);



  // Top Red Box To Teleport To next level
  next_level = createSprite(300,0,100,20); 
  next_level.shapeColor = "#e3242b"

  gems1 = createGroup();
  gems2 = createGroup();
  gems3 = createGroup();
  gems4 = createGroup();
}

function draw() {
  background("white");
  textSize(10);
  fill("blue");
  // Display Scores
  text("Time Gem : " + timeGem, 20, 20);
  text("Leap gem : " + leapGem, 20, 40);
  text("Weapon Gem : " + weaponGem, 20, 60);
  player.velocityY += 0.5;

  // Level One
  if(gameState == 1){
    player.collide(ground);
    // To Teleport To The Next Level
    if(player.collide(next_level) && (leapGem >= 2 && timeGem >= 2 && weaponGem >= 2)) {
      gameState = 2; 
      alert("Congratulations You Have Passes The Practice Level.")
    }


  }
  // Level  Two
  else if (gameState == 2){
    // Remove The Ground and level teleporter
    next_level.destroy();
    ground.destroy();
  }
  

  // Game Over If the player Falls
  if(gameState == 2 && player.y >400){
    window.location.href = "gameover.html";
  }

  
  player.collide(platforms);


  // Increase The Scores
  if(player.collide(gems1)){
    leapGem ++;
    gems1.destroyEach()
  }
  else if(player.collide(gems2)){
    timeGem++;
    gems2.destroyEach()
  }
  else if(player.collide(gems3)){
    weaponGem++;
    gems3.destroyEach()
  }

  createGems();

  drawSprites();
}

function keyPressed() {
  if (keyCode == 39 ) {
    player.x = player.x + 20;
  } else if (keyCode == 37 ) {
    player.x = player.x - 20;
  } else if (keyCode == 38) {
    player.velocityY = -6;
  } 
}
function createGems() {
  if (frameCount % 100 === 0) {
    var a = Math.round(random(1, 3));
    switch (a) {
      case 1:
        gem1 = createSprite(30, 50, 10, 10);
        gem1.shapeColor = "yellow";
        gem1.lifetime = 100;
        gems1.add(gem1)
        break;
      case 2:
        gem2 = createSprite(random(50, 580), random(20, 350), 10, 10);
        gem2.shapeColor = "green";
        gem2.lifetime = 100;
        gems2.add(gem2);
        break;

      case 3:
        gem3 = createSprite(random(50, 580), random(20, 350), 10, 10);
        gem3.shapeColor = "black"
        gem3.lifetime = 100;
        gems3.add(gem3);
        break;
      default:
        break;
    }
  }
}
