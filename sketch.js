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


//serial connection
let mSerial;
let readyToRead;
let buttonIsPressed = 0; 
let button0;
let button1; 
let prevButton0 = -1; 
let prevButton1 = -1;   

 //text 
 let MARGIN = 50;
 let currentMaxIndex1 = 0;
 let nextUpdateMillis1 = 0;
 let currentMaxIndex2 = 0;
 let nextUpdateMillis2 = 0;
 let currentMaxIndex3 = 0;
 let nextUpdateMillis3 = 0;
 

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

   // setup serial
   mSerial = createSerial();
   readyToRead = false;
}

function draw() {
  background(219, 62, 62); 

  if (mSerial.opened() && readyToRead) {
    mSerial.clear();  
    mSerial.write(10); 
    readyToRead = false;
  }
  if (mSerial.opened() && mSerial.availableBytes()>0) {
    let mline = mSerial.readUntil("\n");  
    //print(mline);
    let vals = split(mline, " "); 
    //print('Vals 0:', vals[0]); 
    //print('Vals 1:', vals[1]);   
    readyToRead = true;
    if (vals[0] == 1 || vals[1] == 1) {
      buttonIsPressed = 1; 
      button0 = vals[0]; 
      button1 = vals[1];
    } else {
      buttonIsPressed = 0; 
      button0 = vals[0]; 
      button1 = vals[1];
    }

  }
  
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
  let phrase = "WELCOME! \n\n This is a collection that delves into the often overlooked realm of women's health. \n Did you know, medical research has largely excluded women until as recently as the 1990s. This collection of stories is a response to this, that aims to shine light on the unique health related experiences of women. \n Each narrative here pieces together the diverse, complicated, and real aspect of women’s health, that may resonate with your own experiences, or open your eyes to new perspectives."; 
  background(219, 62, 62); 
  textAlign(LEFT, TOP);
  fill(255); 
  stroke(255); 
  strokeWeight(0); 
  textSize(20);

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

function speechbubble(X, Y) {
  let bubbleWidth = 175; 
  let bubbleHeight = 75; 
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
  speechbubble(x1, 225); 
  textSize(15);
  fill(0);
  stroke(0);
  strokeWeight(0);

  text('THE STORY OF: \n MY TILTED CERVIX', x1+10, 120+125, 175, 100 ); 
 }

function description2() {
  speechbubble(x2, 225); 
  textSize(15);
  fill(0);
  stroke(0);
  strokeWeight(0);
  text('THE STORY OF: \n THE WHITE PANTS', x2+10, 120+125, 175, 100 ); 
 }

function description3() {
  speechbubble(x3, 225); 
  textSize(15);
  fill(0);
  stroke(0);
  strokeWeight(0);
  text('THE STORY OF: \n ADULT ACNE ', x3+10, 120+125, 175, 100 );
}

function story1() {
  background(219, 62, 62);  
  //button 1 - click through story, audio, visuals 
  let phrase = ' MY TILTED CERVIX \n\n Everytime I used a tampon, I kept noticing it would be tilted. I told some of my friends about this, and they all suggested a bunch of different things. Finally, I decided to do some of my own research to find out what was going on. I soon found out that I had a tilted cervix. At first I was confused because my doctor had never mentioned it to me although I had gone for all my regular health check ups. But through my research, I found that apparently a lot of women have a tilted cervix too. And apparently, it is quite harmless in most cases. This made me feel very relieved, and now I feel like I understand my body better.\n\n THE END';  
  //let end = "The End! Click 'd' to go back to main page."; 
  textAlign(LEFT, TOP);
  fill(255); 
  strokeWeight(0);
  textSize(20); 
  
  text("Press button 1 to move forward, and button 2 to go back", 50, 50); 

   if (buttonIsPressed) {
    if (button0 == 1 && prevButton0!= 1) {
      counter1++;
    }
    prevButton0 = button0;
  } else {
    prevButton0 = -1;
  } 
  if(counter1 >= 1) { 
    background(219, 62, 62);  
    image1.resize(500, 450); 
    image(image1, 600, 50);  
  }
  if(counter1 >= 2) { 
    if (millis() > nextUpdateMillis1) {
      currentMaxIndex1 = min(currentMaxIndex1 + 1, phrase.length);
          
      nextUpdateMillis1 = millis() + random(10, 80);
    }
  let phraseToDraw = phrase.slice(0, currentMaxIndex1);
  text(phraseToDraw, MARGIN, MARGIN, 500, height);
  }
   if (buttonIsPressed) {
    if (button1 == 1 && prevButton1!= 1) {
      //print (button1); 
      drawCharacters(); 
      tellingstory1 = 0;
      counter1 = 0;  
      text(phrase, MARGIN, MARGIN, 500, height);
    }
  }
  if(counter1>=3){
    background(219, 62, 62); 
    image1.resize(500, 450); 
    image(image1, 600, 50);  
    text(phrase, MARGIN, MARGIN, 500, height);
  }
}

function story2() {
  background(219, 62, 62);  
  //button 1 - click through story, audio, visuals 
  let phrase = 'THE WHITE PANTS \n\n I was at a movie theater when I got my first period. I did not notice the entire time, until I got up, and noticed something on my white pants. I was very far from home, and my parents were not able to pick me up for a few hours. I began panicking, but thankfully my friends stepped in. They helped me clean up and gave me a jacket I could tie around my hips. They reassured me that it would be okay and that it was normal. After that, I was able to continue my day normally. Looking back, the positive reaction I got has helped me create a good relationship with this very normal phenomenon.\n\n THE END';  
  //let end = "The End! Click 'd' to go back to main page."; 
  textAlign(LEFT, TOP);
  fill(255); 
  strokeWeight(0);
  textSize(20); 

  text("Press button 1 to move forward, and button 2 to go back", 50, 50); 

   if (buttonIsPressed) {
    if (button0 == 1 && prevButton0!= 1) {
      counter2++;
    }
    prevButton0 = button0;
  } else {
    prevButton0 = -1;
  } 
  if(counter2 >= 1) { 
    background(219, 62, 62);  
    image3.resize(500, 450); 
    image(image3, 600, 50);  
  }
  if(counter2 >= 2) { 
    if (millis() > nextUpdateMillis2) {
      currentMaxIndex2 = min(currentMaxIndex2 + 1, phrase.length);
          
      nextUpdateMillis2 = millis() + random(10, 80);
    }
  let phraseToDraw = phrase.slice(0, currentMaxIndex2);
  text(phraseToDraw, MARGIN, MARGIN, 500, height);
  }
   if (buttonIsPressed) {
    if (button1 == 1 && prevButton1!= 1) {
      //print (button1); 
      drawCharacters(); 
      tellingstory2 = 0;
      counter2 = 0;  
    }
  }
  if(counter2 >= 3){
    background(219, 62, 62); 
    image3.resize(500, 450); 
    image(image3, 600, 50);  
    text(phrase, MARGIN, MARGIN, 500, height);
  }
}
function story3() {
  background(219, 62, 62);  
  //button 1 - click through story, audio, visuals 
  let phrase = 'ADULT ACNE \n\n I never experienced acne growing up, but recently as an adult, I developed severe acne. Despite trying skincare products, diets, and water filters, nothing improved. Even a dermatologist prescribed medication had little effect. It was my gynecologist who identified the cause as a hormonal imbalance related to Polycystic Ovary Syndrome (PCOS). She told me there was no definitive cure, so I had to focus on lifestyle changes to manage the condition. So far, I have been making a conscious effort to make positive changes, and the PCOS has been under control. I also feel healthier overall too! \n\n THE END';  
  //let end = "The End! Click 'd' to go back to main page."; 
  textAlign(LEFT, TOP);
  fill(255); 
  strokeWeight(0);
  textSize(20); 

  text("Press button 1 to move forward, and button 2 to go back", 50, 50); 

   if (buttonIsPressed) {
    if (button0 == 1 && prevButton0!= 1) {
      counter3++;
    }
    prevButton0 = button0;
  } else {
    prevButton0 = -1;
  } 
  if(counter3 >= 1) { 
    background(219, 62, 62);  
    image2.resize(550, 450); 
    image(image2, 600, 50);  
  }
  if(counter3 >= 2) { 
    if (millis() > nextUpdateMillis3) {
      currentMaxIndex3 = min(currentMaxIndex3 + 1, phrase.length);
          
      nextUpdateMillis3 = millis() + random(10, 80);
    }
  let phraseToDraw = phrase.slice(0, currentMaxIndex3);
  text(phraseToDraw, MARGIN, MARGIN, 500, height);
  }
   if (buttonIsPressed) {
    if (button1 == 1 && prevButton1!= 1) {
      //print (button1); 
      drawCharacters(); 
      tellingstory3 = 0;
      counter3 = 0;  
    }
  }
  if(counter3>=3){
    background(219, 62, 62); 
    image2.resize(550, 450); 
    image(image2, 600, 50);  
    text(phrase, MARGIN, MARGIN, 500, height);
  }
}

function mouseClicked() {
   if (
     mouseX > x1 &&
     mouseX < x1 + characterWidth &&
    mouseY > y1 &&
     mouseY < y1 + characterHeight
     )  
      {
          mSerial.open(9600);   //connecttoserial
          tellingstory1 = 1; 
      }
    else if (
      mouseX > x2 &&
      mouseX < x2 + characterWidth &&
      mouseY > y2 &&
      mouseY < y2 + characterHeight
     )  
     {    mSerial.open(9600);   //connecttoserial
          tellingstory2 = 1;
    }
      else if (
        mouseX > x3 &&
        mouseX < x3 + characterWidth &&
        mouseY > y3 &&
        mouseY < y3 + characterHeight
     )  
     {  mSerial.open(9600);   //connecttoserial
        tellingstory3 = 1;
    }
}
  
