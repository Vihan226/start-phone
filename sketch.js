var soccer;
var pingPong;
var gameState=null;
var player;
var fieldImage;
var soccerPlayerScore;
var soccerComScore;
var home;
var goal1;
var goal2;
var goal3;
var goal4,goal5,goal6;
var border1,border2,border3,border4;
var soccerBall;
var uplayer;
function preload(){
fieldImage=loadImage("usefield.png")
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  
 soccer= createButton("Soccer")

  soccer.position(width/1.2-width/2,height/2-60)

  home= createButton("Home")
  home.position(width/1.8-width/2,height/2-400)


  player=createSprite(width/1.2-width/2,height/2-340,470,15)
  player.shapeColor="yellow"

  player.visible=false;

  goal1=createSprite(width/1.2-width/2,height/2-440,10,60)
  goal1.visible=false

  goal2=createSprite(width/.858-width/2,height/2-440,10,60)
  goal2.visible=false

  goal3=createSprite(width/1-width/2,height/2-400,600,15)
goal3.visible=false

border1=createSprite(width/1.97-width/2,height/2,10,1000)
border1.visible=false

border2=createSprite(width/.68-width/2,height/2,10,1000)
border2.visible=false



goal4=createSprite(width/1.2-width/2,height/2+427,10,60)
goal4.visible=false

goal5=createSprite(width/.860-width/2,height/2+427,10,60)
goal5.visible=false

goal6=createSprite(width/1-width/2,height/2+380,600,15)
goal6.visible=false



soccerBall=createSprite(width/1-width/2,height/2,50,40)
soccerBall.visible=false
soccerBall.shapeColor="black"

uplayer=createSprite(width/1-width/2,height/2+250,300,15)
uplayer.shapeColor="yellow"

border3=createSprite(width/1-width/2,height/2+450,1900,10)
border3.visible=false;

border4=createSprite(width/1-width/2,height/2-460,1900,10)
border4.visible=false;

  soccerPlayerScore=0
  soccerComScore=0


  player.velocityX=-12.1

  soccerBall.velocityY=-3;
soccerBall.velocityX=15;

}

function draw() {
  background("white");

  uplayer.velocityX=0
  uplayer.velocityY=0
// presses
player.bounceOff(border1)
player.bounceOff(border2)



soccerBall.bounceOff(border1)
soccerBall.bounceOff(border2)
soccerBall.bounceOff(border4)
soccerBall.bounceOff(border4)

soccerBall.bounceOff(player)
soccerBall.bounceOff(uplayer)


uplayer.visible=false

if(gameState==="home"){
background("white")
player.visible=false
soccerBall.visible=false

soccer.show()
}





  soccer.mousePressed(()=>{
gameState="play"
  })

  home.mousePressed(()=>{
gameState="home"
      })



  //soccer play.
  if(gameState==="play"){
   
    background(fieldImage)
player.visible=true;
soccerBall.visible=true;
uplayer.visible=true

player.bounceOff(border1)
player.bounceOff(border2)



soccerBall.bounceOff(border1)
soccerBall.bounceOff(border2)
soccerBall.bounceOff(border4)
soccerBall.bounceOff(border4)

soccerBall.bounceOff(player)
soccerBall.bounceOff(uplayer)
// the score conditions
if(soccerBall.isTouching(goal1)||soccerBall.isTouching(goal2)||soccerBall.isTouching(goal3)){
  soccerPlayerScore=soccerPlayerScore+1
  soccerBall.x=width/1-width/2
  soccerBall.y=height/2
}
if(soccerBall.isTouching(goal4)||soccerBall.isTouching(goal5)||soccerBall.isTouching(goal6)){
  soccerComScore=soccerComScore+1
  soccerBall.x=width/1-width/2
  soccerBall.y=height/2
}


soccer.hide();
fill("black")
textSize(50)
text(""+soccerPlayerScore,width/1.6-width/2,height/2+20)

text(""+soccerComScore,width/1.6-width/2,height/2-60)


//movement to our player

if((touches.length>0 && touches[0].x<width/2  )||keyDown("a")){
  uplayer.velocityX=-8
  touches=[]
}

if((touches.length>0 && (touches[0].x>width/2 && touches[0].x<width) )||keyDown("d")){
  uplayer.velocityX=8
  touches=[]
}

  }
  //come back to home

 drawSprites();
    
}

  