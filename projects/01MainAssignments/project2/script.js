let digits = [];

function setup() {
  createCanvas(windowWidth,windowHeight);
  rectMode(CORNER);
  	textFont("Quantico");




  let startDay = 50;  
  let startMonth = 400;
  let startYear = 750;
  let gap = 140;    

  for (let i = 0; i < 2; i++) {
    digits.push(createDigit(startDay + i * gap, 50));
  }

 for (let i = 0; i < 2; i++) {
    digits.push(createDigit(startMonth + i * gap, 50));
  }

   for (let i = 0; i < 4; i++) {
    digits.push(createDigit(startYear + i * gap, 50));
  }

}

function draw() {
  background(10);

  fill(200);
  textSize(60);
  text("DAY", 70, 100);
  text("MONTH", 430, 100);
  text("YEAR", 780, 100);

  // Dibujar todos los dígitos
  for (let d of digits) {
    drawDigit(d);
  }

  noStroke();
  rect(365, 390, 20, 20,4);
  rect(715, 390, 20, 20,4);
}


function createDigit(offsetX, offsetY) {
  return [
    { name:"A", x: offsetX+40,  y: offsetY+100,     w: 80, h:20, on:false },
    { name:"B", x: offsetX+120, y: offsetY+120,  w:20, h:100, on:false },
    { name:"C", x: offsetX+120, y: offsetY+240, w:20, h:100, on:false },
    { name:"D", x: offsetX+40,  y: offsetY+340, w:80, h:20, on:false },
    { name:"E", x: offsetX+20,  y: offsetY+240, w:20, h:100, on:false },
    { name:"F", x: offsetX+20,  y: offsetY+120,  w:20, h:100, on:false },
    { name:"G", x: offsetX+40,  y: offsetY+220, w:80, h:20, on:false }
  ];
}



function drawDigit(digit) {
  for (let s of digit) {
    if (s.on) fill(255);  
    else fill(60);              

    rect(s.x, s.y, s.w, s.h, 5);
  }
}




function mousePressed() {
  for (let digit of digits) {
    for (let s of digit) {
      if (
        mouseX > s.x &&
        mouseX < s.x + s.w &&
        mouseY > s.y &&
        mouseY < s.y + s.h
      ) {
        s.on = !s.on;
      }
    }
  }
}
