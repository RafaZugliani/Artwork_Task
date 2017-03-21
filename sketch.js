function preload() {
    Johnston = loadFont("assets/Johnston.ttf");
}

var stations = [
'     E U S T O N',
'   KINGS CROSS',
'    WARREN ST.',
'     RUSSEL SQ.',
'OXFORD CIRCUS',
'      BAKER ST.',
'   H O L B O R N',
'       A N G E L',
'      ST. PAULS',
'    OLD STREET',
'     BARBICAN',
'         B A N K ',
'     MOORGATE '
]

var index = 0;

function setup() {
  resizeCanvas(650, 650);
  
}

function draw() {
  ellipseMode (CENTER);
  rectMode (CENTER);

  stroke('rgba(246, 9, 56, 1)');
  strokeWeight(90);
  noFill();
  ellipse (330, 330, 400, 400);
  
  noStroke();
  fill('rgba(29, 45, 165, 1)');
  rect(330, 330, 600, 90);
  
s = stations[index];
fill(255);
textStyle(BOLD);
textSize(68);
text(s, 45, 355);
  

  translate(330, 330);
  //translate(width/2, height/2);
  rotate(radians(frameCount));
  translate(200, 0);
 noStroke();
 fill('rgba(255, 255, 255, 1)');
 rect (0, 0, 80, 40);
  //A rect rotating inside the red stroke
 //rotate(rad,axis)
 
}

function mousePressed() {
  index = index + 1;

if (index == stations.length) {
  index = 0;
}
}








