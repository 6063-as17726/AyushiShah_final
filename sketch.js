let characterWidth = 80; 
let characterHeight = 300; 

function setup() {
    createCanvas(1200, windowHeight);
}

function draw() {
    let x1 = 100; 
    let y1 = windowHeight/2; 

    background(183,54, 26); 

    character1(x1, y1); 
  
    //hover preview
     if (
       mouseX > x1 &&
       mouseX < x1 + characterWidth &&
       mouseY > y1 &&
       mouseY < y1 + characterHeight 
       ){
         description1(); 
        }
     // if (
    //   mouseX > x2 &&
    //   mouseX < x2 + characterWidth &&
    //   mouseY > y2 &&
    //   mouseY < y2 + characterHeight 
    //   ){
    //     description2(); 
    //    }
     // if (
    //   mouseX > x3 &&
    //   mouseX < x3 + characterWidth &&
    //   mouseY > y3 &&
    //   mouseY < y3 + characterHeight 
    //   ){
    //     description3(); 
    //    }
     // if (
    //   mouseX > x4 &&
    //   mouseX < x4 + characterWidth &&
    //   mouseY > y4 &&
    //   mouseY < y4 + characterHeight 
    //   ){
    //     description4(); 
    //    }
  
  //button 2 - return to homepage 
}


function character1(X, Y) {
  //x1, y1
  push();
  translate(X,Y);

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
  fill(0);
  ellipse(20, 40, 10, 10);
  ellipse(40, 40, 10, 10);

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
  endShape(); 

  // Legs
  fill(0);
  rect(15, 130, 20, 20);
  rect(25, 130, 20, 20);

  pop(); 
} 

// function character2() {
  //x2, y2
// }
// function character3() {
  //x3, y3
// }
// function character4() {
  //x4, y4
// }

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
  speechbubble(70, 120); 
 }

// function description2() {

// }
// function desciption3() {

// }
// function description4() {

// }

 function story1() {
  //button 1 - click through story, audio, visuals 
  background(183,54, 26); 
  text('Click the button to start the story', windowWidth/2, windowHeight/2);
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
      { story1();
       }
//    else if (
//     mouseX > x2 &&
//     mouseX < x2 + characterWidth &&
//     mouseY > y2 &&
//     mouseY < y2 + characterHeight
//     )  
//      { story2();
//       }
//    else if (
//     mouseX > x3 &&
//     mouseX < x3 + characterWidth &&
//     mouseY > y3 &&
//     mouseY < y3 + characterHeight
//     )  
//      { story3();
//       }
//    else if (
//     mouseX > x4 &&
//     mouseX < x4 + characterWidth &&
//     mouseY > y4 &&
//     mouseY < y4 + characterHeight
//     )  
//      { story4();
//       }

 }

  