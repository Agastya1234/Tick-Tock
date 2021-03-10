var hr,mn,se;
var hrAngle,mnAngle,seAngle;

function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);
}

function draw() {
  background("black");
  //Translation and rotation
    translate(200,200);
    rotate(-90);

  //Calculating the time using predefined functions from p5.js
    hr = hour();
    mn = minute();
    se = second();

  //Creating rotation
  hrAngle = map(hr % 12,0,12,0,360);
  mnAngle = map(mn,0,60,0,360);
  seAngle = map(se,0,60,0,360);

  //Drawing seconds hand
  push();
  rotate(seAngle);
  stroke(255,0,0);
  strokeWeight(5);
  line(0,0,100,0);
  pop();

  //Drawing minutes hand
  push();
  rotate(mnAngle);
  stroke(0,255,0);
  strokeWeight(5);
  line(0,0,75,0);
  pop();

  //Drawing Hours hand
  push();
  rotate(hrAngle);
  stroke(0,0,255);
  strokeWeight(5);
  line(0,0,50,0);
  pop();
  
  stroke(255,0,255);
  point(0,0);

  //Drawing the arcs
  strokeWeight(10);
  noFill();
  //seconds
  stroke(255,0,0);
  arc(0,0,300,300,0,seAngle);
  //minute
  stroke(0,255,0);
  arc(0,0,280,280,0,mnAngle);
  //hour
  stroke(0,0,225);
  arc(0,0,260,260,0,hrAngle);

}