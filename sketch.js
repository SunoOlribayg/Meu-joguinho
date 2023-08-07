var spermatosoide1, espermatosoide2, spermatosoide3;
var homen1, homen2, homen3;
var planoDeFundo1, planoDeFundo2, planoDeFundo3;

function preload(){
    spermatozoide1 = loadImage("sperma1.png","sperma2.png","sperma3.png");
    homen1 = loadImage("primeirohomen1.png","primeirohomen2.png","primeirohomen3.png");
    planoDeFundo1 = loadImage("planoDeFundo1.png");
    planoDeFundo2 = loadImage("planoDeFundo2.png");
    planoDeFundo3 = loadImage("planoDeFundo3.png");
}
function setup(){
    createCanvas(800,800)
  

}
function draw (){
    background(planoDeFundo1)
    drawSprites();
}