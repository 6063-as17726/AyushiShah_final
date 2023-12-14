//characters 
let characterWidth = 160; 
let characterHeight = 600; 
let x1; 
let y1;
let tellingstory1 = 0; 
let image1; 
let counter1 = 0; 
let x2; 
let y2; 
let tellingstory2 = 0;  
let image2; 
let counter2 = 0; 
let x3; 
let y3; 
let tellingstory3 = 0;
let image3; 
let counter3 = 0; 

//text 
let MARGIN = 50;
let currentMaxIndex = 0;
let nextUpdateMillis = 0;

function preload() { 
  image1 = loadImage("./Character1.png");
  image2 = loadImage("./Character2.png");
  image3 = loadImage("./Character3.png");
}

function setup() {
    createCanvas(1200, windowHeight);
    x1 = 100; 
    y1 = windowHeight/2; 
    x2 = 500; 
    y2 = windowHeight/2; 
    x3 = 900; 
    y3 = windowHeight/2; 

    pixelDensity(1);
}

function draw() {
  background(219, 62, 62); 
  if(tellingstory1 ==0 && tellingstory2 ==0 && tellingstory3 ==0) {
    drawCharacters(); } 
    
  //hover preview
  if (
    mouseX > x1 &&
    mouseX < x1 + characterWidth &&
    mouseY > y1 &&
    mouseY < y1 + characterHeight && 
    tellingstory1 == 0 && 
    tellingstory2 == 0 && 
    tellingstory3 == 0 
    ){
      description1(); 
      }
  if (
    mouseX > x2 &&
    mouseX < x2 + characterWidth &&
    mouseY > y2 &&
    mouseY < y2 + characterHeight && 
    tellingstory1 == 0 && 
    tellingstory2 == 0 && 
    tellingstory3 == 0 
    ){
      description2(); 
      }
  if (
    mouseX > x3 &&
    mouseX < x3 + characterWidth &&
    mouseY > y3 &&
    mouseY < y3 + characterHeight && 
    tellingstory1 == 0 && 
    tellingstory2 == 0 && 
    tellingstory3 == 0 
    ){
      description3(); 
      }

  if (tellingstory1 == 1) {
    story1();
  } 
  if (tellingstory2 == 1) {
    story2();
  } 
  if (tellingstory3 == 1) {
    story3();
  } 
  
  //button 2 - return to homepage 
}

function drawCharacters() {
  let phrase = "WELCOME!"
  background(219, 62, 62); 
  textAlign(LEFT, TOP);
  fill(255); 
  stroke(255); 
  textSize(45);

  text(phrase, MARGIN, MARGIN, width - 2 * MARGIN, height);

  character1(x1, y1);
  character2(x2, y2);
  character3(x3, y3);
}

function character1(X, Y) {
  //x1, y1
  push();
  translate(X,Y);
  scale(2); 

  stroke(0);
  strokeWeight(1);

   //arms
   fill("LightSalmon");
   rect(0, 55, 20, 50);
   rect(40, 55, 20, 50);

    // Body
    fill("LightPink");
    rect(10, 55, 40, 50);

    // Face
    fill("LightSalmon");
    ellipse(30, 35, 50, 50);

   // Hair
   fill(0);
   arc(30, 30, 50, 50, PI, 0, CHORD);
   ellipse(30, 0, 30, 30); 

  // Eyes
  fill(255);
  ellipse(20, 40, 10, 10);
  ellipse(40, 40, 10, 10);
  fill(0);
  ellipse(20, 40, 5, 5);
  ellipse(40, 40, 5, 5);

  //smile 
  fill(255, 0, 0); 
  arc(30, 50, 10, 10, 0, PI, CHORD);

  // Skirt
  fill("MediumPurple");
  beginShape(); 
  vertex(10, 105); 
  vertex(50, 105); 
  vertex(60, 130); 
  vertex(0, 130);
  endShape(CLOSE); 

  // Legs
  fill(0);
  rect(15, 130, 20, 20);
  rect(25, 130, 20, 20);

  pop(); 
} 

function character2(X,Y) {
  //x2, y2
  push();
  translate(X,Y);
  scale(2); 

  stroke(0);
  strokeWeight(1);

  //arms
  fill("SaddleBrown");
  rect(0, 55, 20, 50);
  rect(40, 55, 20, 50);

   // Body
   fill("DarkSeaGreen");
   rect(10, 55, 40, 50);

   // Face
   fill("SaddleBrown");
   ellipse(30, 35, 50, 50);

  // Hair
  fill(0);
  arc(30, 30, 50, 50, PI, 0, CHORD);
  ellipse(9, 75, 15, 50); 
  ellipse(51, 75, 15, 50); 

 // Eyes
 fill(255);
 ellipse(20, 40, 10, 10);
 ellipse(40, 40, 10, 10);
 fill(0);
 ellipse(20, 40, 5, 5);
 ellipse(40, 40, 5, 5);

 //smile 
 fill(255, 0, 0); 
 arc(30, 50, 10, 10, 0, PI, CHORD);

 // Skirt
 fill("AntiqueWhite");
 beginShape(); 
 vertex(10, 105); 
 vertex(50, 105); 
 vertex(60, 150); 
 vertex(0, 150);
 endShape(CLOSE);  

// Legs
fill(0);
rect(15, 150, 20, 5);
rect(25, 150, 20, 5);

 pop(); 


}

function character3(X,Y) {
  //x3, y3
  push();
  translate(X,Y);
  scale(2); 

  stroke(0);
  strokeWeight(1);

   // Hair 1
   fill(0);
   beginShape(); 
   vertex(50,15);
   vertex(10,15); 
   vertex(0,80); 
   vertex(60,80); 
   endShape(CLOSE); 

  //arms
  fill("SandyBrown");
  rect(0, 55, 20, 50);
  rect(40, 55, 20, 50);

   // Body
   fill("LightSkyBlue");
   rect(10, 55, 40, 50);

   // Face
   fill("SandyBrown");
   ellipse(30, 35, 50, 50);

  // Hair 2
  fill(0);
  arc(30, 30, 50, 50, PI, 0, CHORD);

 // Eyes
 fill(255);
 ellipse(20, 40, 10, 10);
 ellipse(40, 40, 10, 10);
 fill(0);
 ellipse(20, 40, 5, 5);
 ellipse(40, 40, 5, 5);

 //smile 
 fill(255, 0, 0); 
 arc(30, 50, 10, 10, 0, PI, CHORD);

// Legs
fill(0);
rect(13, 106, 15, 45);
rect(33, 106, 15, 45);
fill("Cornsilk");
rect(13, 151, 15, 5);
rect(33, 151, 15, 5);

 pop(); 
}

function speechbubble(X, Y) {
  let bubbleWidth = 150; 
  let bubbleHeight = 150; 
  fill(211, 237, 237);
  stroke(0);
  strokeWeight(2);
  rect(X, Y, bubbleWidth, bubbleHeight, 20);

  // Speech bubble tail
  beginShape();
  vertex(X + bubbleWidth / 2 - 10, Y + bubbleHeight);
  vertex(X + bubbleWidth / 2 + 10, Y + bubbleHeight);
  vertex(X + bubbleWidth / 2, Y + bubbleHeight + 15);
  endShape(CLOSE);
}

 function description1() {
  speechbubble(x1, 120); 
  textSize(20);
  fill(0);
  stroke(0);
  strokeWeight(1);

  text('This is a test', x1+10, 120+30, 120, 100 ); 
 }

function description2() {
  speechbubble(x2, 120); 
  textSize(20);
  fill(0);
  stroke(0);
  strokeWeight(1);
  text('This is a test', x2+10, 120+30, 120, 100 ); 
 }

function description3() {
  speechbubble(x3, 120); 
  textSize(20);
  fill(0);
  stroke(0);
  strokeWeight(1);
  text('This is a test', x3+10, 120+30, 120, 100 );
}

function story1() {
  background(219, 62, 62);  
  //button 1 - click through story, audio, visuals 
  let phrase = "THIS IS A TEST THIS IS A TEST THIS IS A TEST THIS IS A TEST THIS IS A TEST THIS IS A TEST";  
  //let end = "The End! Click 'd' to go back to main page."; 
  textAlign(LEFT, TOP);
  fill(255); 
  stroke(255); 
  textSize(20); 
  if (keyIsPressed) {
    if (key == "a" && prevKey != "a") {
      counter1++;
    }
    prevKey = key;
  } else {
    prevKey = -1;
  }
  if(counter1 >= 1) { 
    image1.resize(500, 450); 
    image(image1, 600, 50);  
  }
  if(counter1 >= 2) { 
    if (millis() > nextUpdateMillis) {
      currentMaxIndex = min(currentMaxIndex + 1, phrase.length);
          
      nextUpdateMillis = millis() + random(30, 160);
    }
  let phraseToDraw = phrase.slice(0, currentMaxIndex);
  text(phraseToDraw, MARGIN, MARGIN, 500, height);
  }
   if (keyIsPressed) {
    if (key == "d" && prevKey != "a") {
      drawCharacters(); 
      tellingstory1 = 0;
      counter1 = 0;  
    }
  }
}

// function story2() {
  //button 1 - click through story, audio, visuals 
// }
// function story3() {
  //button 1 - click through story, audio, visuals 
// }
// function story4() {
  //button 1 - click through story, audio, visuals 
// }

function mouseClicked() {
   if (
     mouseX > x1 &&
     mouseX < x1 + characterWidth &&
    mouseY > y1 &&
     mouseY < y1 + characterHeight
     )  
      { //connecttoserial
        //if function - open serial only if it already is not open 
        //if (!mSerial.opened())
        tellingstory1 = 1; 
       }
    else if (
      mouseX > x2 &&
      mouseX < x2 + characterWidth &&
      mouseY > y2 &&
      mouseY < y2 + characterHeight
     )  
      { //connecttoserial
        //if function - open serial only if it already is not open 
        //if (!mSerial.opened())
        tellingstory2 = 1; 
       }
      else if (
        mouseX > x3 &&
        mouseX < x3 + characterWidth &&
        mouseY > y3 &&
        mouseY < y3 + characterHeight
     )  
      { //connecttoserial
        //if function - open serial only if it already is not open 
        //if (!mSerial.opened())
        tellingstory3 = 1; 
       }
}
  
