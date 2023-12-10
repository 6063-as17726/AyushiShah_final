function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(183,54, 26); 
    character1(); 
}


function character1() {
    //x1, y1
    fill("#FF69B4");  // Pink color for the body
    stroke(0);
    strokeWeight(2);
    rect(180, 300, 40, 80);
  
    // Face
    strokeWeight(0);
    fill("#FFDAB9");  // Peach color for the face
    ellipse(200, 280, 50, 50);
  
    // Hair
    fill("#8B4513");  // Brown color for hair
    arc(200, 270, 50, 50, PI, 0, CHORD);
  
    // Eyes
    fill(0);
    ellipse(190, 275, 5, 5);
    ellipse(210, 275, 5, 5);
  
    // Nose
    triangle(200, 280, 195, 290, 205, 290);
  
    // Mouth
    fill("#FF1493");  // Pink color for lips
    arc(200, 290, 20, 10, 0, PI);
  
    // Dress
    fill("#6495ED");  // Blue color for the dress
    noStroke();
    rect(180, 330, 40, 40);
  
    // Arms
    fill("#FFDAB9");  // Peach color for arms
    rect(160, 310, 20, 10);
    rect(220, 310, 20, 10);
  
    // Legs
    fill("#FFDAB9");  // Peach color for legs
    rect(185, 380, 10, 20);
    rect(205, 380, 10, 20);
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

// function description1() {

// }
// function description2() {

// }
// function desciption3() {

// }
// function description4() {

// }

// function story1() {
  //button 1 - click through story, audio, visuals 
// }
// function story2() {
  //button 1 - click through story, audio, visuals 
// }
// function story3() {
  //button 1 - click through story, audio, visuals 
// }
// function story4() {
  //button 1 - click through story, audio, visuals 
// }

// function mouseClicked() {
//   if (
//     mouseX > x1 &&
//     mouseX < x1 + characterWidth &&
//     mouseY > y1 &&
//     mouseY < y1 + characterHeight
//     )  
//      { story1();
//       }
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

// }

  // drawing characters on homepage
    //character1(); 
    //character2(); 
    //character3(); 
    //character4();

    //hover preview
    // if (
    //   mouseX > x1 &&
    //   mouseX < x1 + characterWidth &&
    //   mouseY > y1 &&
    //   mouseY < y1 + characterHeight 
    //   ){
    //     description1(); 
    //    }
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