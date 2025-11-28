let font;
let totalPoints = 2000;  
let pts = [];
let state = false;                
let numbers = ["uno", "dos", "tres", "cuatro","cinco","seis","siete","ocho","nueve","diez"];
let numbersIndex = 0;

function preload() {
  font = 'Momo Trust Display';
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(font);
  textSize(200);

  for (let i = 0; i < totalPoints; i++) {
    pts.push({
      x: random(width),
      y: random(height),
      tx: random(width),
      ty: random(height),
      vx: random(-7, 7),
      vy: random(-7, 7)
    });
  }

  setTargets(numbers[numbersIndex]);

  for (let p of pts) {
    p.x = p.tx;
    p.y = p.ty;
  }
}

function draw() {
  background(20);

  if (state) {
    moveFreely();
  } else {
    moveToWord();
  }

  drawPoints();
}

function moveFreely() {
  for (let p of pts) {
    p.x += p.vx;
    p.y += p.vy;

    if (p.x < 0 || p.x > width) p.vx *= -1;
    if (p.y < 0 || p.y > height) p.vy *= -1;
  }
}

function setTargets(word) {
  let bounds = textBounds(word);
  let wordPoints = createWordPoints(word, bounds);

  for (let i = 0; i < pts.length; i++) {
    let t = wordPoints[i % wordPoints.length];
    pts[i].tx = t.x;
    pts[i].ty = t.y;
  }
}

function textBounds(word) {
  let w = textWidth(word);
  let h = 200;
  return { x: (width - w) / 2, y: height / 2, w, h };
}

function createWordPoints(word, bounds) {
  let arr = [];
  let g = createGraphics(width, height);
  g.pixelDensity(1);
  g.background(0);
  g.fill(255);
  g.textFont(font);
  g.textSize(200);
  g.text(word, bounds.x, bounds.y);

  g.loadPixels();

  for (let x = 0; x < width; x += 6) {
    for (let y = 0; y < height; y += 6) {
      let idx = (x + y * width) * 4;
      if (g.pixels[idx] > 200) {
        arr.push({ x, y });
      }
    }
  }

  return arr;
}

function moveToWord() {
  for (let p of pts) {
    p.x = lerp(p.x, p.tx, 0.08);
    p.y = lerp(p.y, p.ty, 0.08);
  }
}

function drawPoints() {
  noStroke();
  fill(255);
  for (let p of pts) {
    circle(p.x, p.y, 4);
  }
}

function mousePressed() {
  state = !state;

  if (!state) {
    numbersIndex = (numbersIndex + 1) % numbers.length;
    setTargets(numbers[numbersIndex]);
  } else {
    for (let p of pts) {
      p.vx = random(-7, 7);
      p.vy = random(-7, 7);
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  setTargets(numbers[numbersIndex]);
}
