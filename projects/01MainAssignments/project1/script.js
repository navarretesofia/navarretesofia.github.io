
let letras = ["F", "A", "S", "T", "E", "R",]
let spacing = 100;
let amplitude = 60;
let speed = 0.05;
let phaseOffset = 1;
let letterSize=50;


function setup() {
	createCanvas(windowWidth,windowHeight);
	rectMode (CENTER);
	textFont("Silkscreen");
	textAlign(CENTER,CENTER);	
}

function  draw() {
	background("black");


	if (amplitude>300) {
		fill("red");
		textSize(400);

let shakeX = random(-2,2);
let shakeY = random(-2,2);


		text("STOP", width/2+shakeX, height/2+shakeY);
		return;


	}



	fill("blue")

	let totalWidth = (letras.length -1)* spacing;
	let startX = (width - totalWidth)/2;

	for (let i=0; i<letras.length; i++) {

		let x= startX+ i * spacing; 

		let y = height/2 + sin(frameCount * speed + i * phaseOffset) * amplitude;
	
		fill("white");
		textSize(letterSize)
		text(letras[i], x, y);
		
	}

	function windowResized() {
		resizeCanvas(windowWidth, windowHeight);
	}


	}

		function mousePressed() { 
		amplitude+=10;
		speed+=0.05;
		spacing+=10;
		letterSize+=10;

	}


