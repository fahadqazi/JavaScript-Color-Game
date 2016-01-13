
var numSquares = 6;
var colors = generateRandomColors(numSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButons = document.querySelectorAll(".mode");

for(i=0; i<modeButons.length; i++){
	modeButons[i].addEventListener("click", function(){
		modeButons[0].classList.remove("selected");
		modeButons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numSquares = 3: numSquares =6;
		// if(this.textContent === "Easy"){
		// 	numSquares = 3;
		// }else{
		// 	numSquares = 6;
		// }
		reset();
	})
}

function reset(){
	colors = generateRandomColors(numSquares);
	//new random colors
	pickedColor = pickColor();
	//
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";

	messageDisplay.textContent = "";
	//change colors of squares
	for(i=0; i<squares.length; i ++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		}else{
			squares[i].style.background = "none";
		}
	}
	h1.style.background = "steelblue";
}

// easyBtn.addEventListener("click", function(){
// 	hardBtn.classList.remove("selected");
// 	easyBtn.classList.add("selected");
// 	numSquares = 3;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;	
// 	for(i=0; i<squares.length; i++){
// 		if(colors[i]){
// 			squares[i].style.background = colors[i];
// 		}else{
// 			squares[i].style.background = "none";
// 		}
// 	}		
// });

// hardBtn.addEventListener("click", function(){
// 	easyBtn.classList.remove("selected");
// 	hardBtn.classList.add("selected");
// 	numSquares = 6;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;	
// 	for(i=0; i<squares.length; i++){
// 		if(colors[i]){
// 			squares[i].style.background = colors[i];
// 		}else{
// 			squares[i].style.background = "none";
// 		}
// 	}
// });

colorDisplay.textContent = pickedColor;

resetButton.addEventListener("click", function(){
	reset();
	// //when click, get all new colors
	// colors = generateRandomColors(numSquares);
	// //new random colors
	// pickedColor = pickColor();
	// //
	// colorDisplay.textContent = pickedColor;
	// this.textContent = "New Colors";

	// messageDisplay.textContent = "";
	// //change colors of squares
	// for(i=0; i<squares.length; i ++){
	// 	squares[i].style.background = colors[i];
	// }
	// h1.style.background = "steelblue";
});


for(i=0; i<squares.length; i++){
	//add colors to squares
	squares[i].style.background = colors[i];
	//add click listenrs to squares
	squares[i].addEventListener("click", function(){
		//grab color of clicked square 
		var clickedColor = this.style.background;
		//compare to picked square.
		if (clickedColor === pickedColor){
			messageDisplay.textContent = "Correct";
			resetButton.textContent = "Play Again";
			changeColors(clickedColor);
			h1.style.background = clickedColor;
		}else{
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again!";
		}

	});
}

function changeColors(color){
	//loop through all squares
	//change color to match given color
	for(i=0; i<colors.length; i++){
		squares[i].style.background = color;
	}
}

function pickColor(){
	//pick a random number
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//makes array
	var arr = [];
	//add num random colors
	for(i=0; i<num; i++){
		//get random color and push to array
		arr.push(randomColor());
	}
	//return array at the end
	return arr;
}


function randomColor(){
	//pick a red from 0-255
	var r = Math.floor(Math.random() *256);
	//pick a green from 0-255
	var g = Math.floor(Math.random() *256);
	//pick a blue from 0-255
	var b = Math.floor(Math.random() *256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}


















