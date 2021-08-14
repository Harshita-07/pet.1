//Create variables here
var dog, happyDog, foodS, foodStock, database

function preload(){ 
  dogImg=loadImage("dogImg.png"); 
  dogImg1=loadImage("dogImg1.png"); 
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(250, 250, 20, 20)
  dog.addImage(dogImg);
  dog.scale=0.3;
  database = firebase.database();
  foodStock = database.ref('food');
  foodStock.on("value",readStock);

  if(keyWentDown(UP_ARROW)){
    food=food-1;
    writeStock(foodS);
    dog.addImage(happyDogImg);
  }
  
}


function draw() {  
background(46, 139, 87)
  drawSprites();
  //add styles here
textsize(18)
fill('black')
stroke(4)
text('NOTE : press up arrow key to feed dargo milk', 250, 250)
}

function readStock() {
  foodS = data.val();
}
function writeStoke(){
  if(x<=0){
    x=0
  }
  else {
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}



