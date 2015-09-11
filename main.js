var turnCounter = 0;
var xscore = 0;
var oscore = 0;
var tiescore = 0;

function specialButton() {
	var special = alert("You're good enough. You're smart enough. And gosh darn it, people like you.")
}

function resetButtons() {
	$(".button").text("").removeClass("deny").removeClass("bluebackground").removeClass("greenbackground");
	turnCounter =0;
}

function resetScore() {
	xscore = 0;
	oscore = 0;
	tiescore = 0;
	$(".scoreboard").text("").removeClass("redbackground1").removeClass("redbackground2").removeClass("redbackground3");
}

$(document).ready(function(){

	$("#playerO").addClass("hidden");


// use an if statement for the turn numbers.
// onClick add a number to a counter. make variable COUNTER and every time something gets clicked, it adds 1 to it. Divide it by 2, if there is a remainder then it's odd which should equal O, if it's even it's X

// var playerOne = "X" make array that if playerOne is in a1,a2,a3 then alert(PLayer One Wins!)

	$(".button").click(function(){
		if ($(this).hasClass("deny")) {
			return;
		}
		
		if (turnCounter %2 === 0) {
			$(this).text("X");
			$(this).addClass("deny");
			$(this).toggleClass("bluebackground");
			$("#playerX").addClass("hidden");
			$("#playerO").removeClass("hidden");
		} 

		else {
			$(this).text("O");
			$(this).addClass("deny");
			$(this).toggleClass("greenbackground");
			$("#playerO").addClass("hidden");
			$("#playerX").removeClass("hidden");
		}

		turnCounter++;

		getWinner();
	});

// RESET GAME BUTTON
	$(".reset").click(resetButtons);

// RESET SCORE BUTTON
	$(".resetscore").click(resetScore);

// SPECIAL BUTTON

	$(".special").click(specialButton);

	// $(".button").click(function(){
		
	// 	if (turnCounter %2 === 0) {
	// 		$(this).text("X");
	// 		$(this).addClass("deny");
	// 	} 

	// 	else {
	// 		$(this).text("O");
	// 		$(this).addClass("deny");
	// 	}


// HOW SCORE OF X IS CALCULATED
	function getScoreX() {
		xscore++;
		console.log("xscore is ", xscore);

		if (xscore === 1) {
			$(".scoreX1").text("X").toggleClass("redbackground1");
		}

		if (xscore === 2) {
			$(".scoreX2").text("X").toggleClass("redbackground2");
		}

		if (xscore === 3) {
			$(".scoreX3").text("X").toggleClass("redbackground3");
		}
	}

// HOW SCORE OF O IS CALCULATED
	function getScoreO() {
		oscore++;
		console.log("oscore is ", oscore);

		if (oscore === 1) {
			$(".scoreO1").text("O").toggleClass("redbackground1");
		}

		if (oscore === 2) {
			$(".scoreO2").text("O").toggleClass("redbackground2");
		}

		if (oscore === 3) {
			$(".scoreO3").text("O").toggleClass("redbackground3");
		}
	}

// HOW SCORE OF TIE IS CALCULATED 
	function getScoreTie() {
		tiescore++;
		console.log("tiescore is ", tiescore);

		if (tiescore === 1) {
			$(".scoreTie1").text("cat").toggleClass("redbackground1");
		}

		if (tiescore === 2) {
			$(".scoreTie2").text("cat").toggleClass("redbackground2");
		}

		if (tiescore === 3) {
			$(".scoreTie3").text("cat").toggleClass("redbackground3");
		}
	}




	function getWinner(){
		var a = $(".a").text();
		var b = $(".b").text();
		var c = $(".c").text();
		var d = $(".d").text();
		var e = $(".e").text();
		var f = $(".f").text();
		var g = $(".g").text();
		var h = $(".h").text();
		var i = $(".i").text();

// TOP ROW X WINS
		if (a === "X" && b === "X" && c ==="X") {
			alert("X WON THE TOP ROW!");
			getScoreX();
			resetButtons();
		}

// MIDDLE ROX X WINS
		else if (d === "X" && e === "X" && f ==="X") {
			alert("X WON THE MIDDLE ROW!");
			getScoreX();
			resetButtons();
		}

// BOTTOM ROW X WINS
		else if (g === "X" && h === "X" && i ==="X") {
			alert("X WON THE BOTTOM ROW!");
			getScoreX();
			resetButtons();
		}

// LEFT COLUMN X WINS
		else if (a === "X" && d === "X" && g ==="X") {
			alert("X WON THE LEFT COLUMN!");
			getScoreX();
			resetButtons();
		}

// MIDDLE COLUMN X WINS
		else if (b === "X" && e === "X" && h ==="X") {
			alert("X WON THE MIDDLE COLUMN!");
			getScoreX();
			resetButtons();
		}

// RIGHT COLUMN X WINS
		else if (c === "X" && f === "X" && i ==="X") {
			alert("X WON THE RIGHT COLUMN!");
			getScoreX();
			resetButtons();
		}

// DIAGONAL X LEFT DOWN
		else if (a === "X" && e === "X" && i ==="X") {
			alert("X WON DIAGONALLY STARTING AT THE TOP LEFT SQUARE GOING ALL THE WAY DOWN TO THE BOTTOM RIGHT SQUARE! I couldnt think of a better way to discribe this. Also, they"+"'"+"re technically not squares because they have rounded edges. But hey! At least I know the difference between "+'"you'+"'"+'re"'+'and "your."');
			getScoreX();
			resetButtons();
		}

// DIAGONAL X UP RIGHT
		else if (g === "X" && e === "X" && c ==="X") {
			alert("X WON BY GETTING Xs IN THE BOTTOM LEFT, MIDDLE, AND TOP RIGHT!");
			getScoreX();
			resetButtons();
		}

// TOP ROW O WINS
		else if (a === "O" && b === "O" && c ==="O") {
			alert("O WON THE TOP ROW!");
			getScoreO();
			resetButtons();
		}

// MIDDLE ROX O WINS
		else if (d === "O" && e === "O" && f ==="O") {
			alert("O WON THE MIDDLE ROW!");
			getScoreO();
			resetButtons();
		}

// BOTTOM ROW O WINS
		else if (g === "O" && h === "O" && i ==="O") {
			alert("O WON THE BOTTOM ROW!");
			getScoreO();
			resetButtons();
		}

// LEFT COLUMN O WINS
		else if (a === "O" && d === "O" && g ==="O") {
			alert("O WON THE LEFT COLUMN!");
			getScoreO();
			resetButtons();
		}

// MIDDLE COLUMN O WINS
		else if (b === "O" && e === "O" && h ==="O") {
			alert("O WON THE MIDDLE COLUMN!");
			getScoreO();
			resetButtons();
		}

// RIGHT COLUMN O WINS
		else if (c === "O" && f === "O" && i ==="O") {
			alert("O WON THE RIGHT COLUMN!");
			getScoreO();
			resetButtons();
		}

// DIAGONAL O LEFT DOWN
		else if (a === "O" && e === "O" && i ==="O") {
			alert("O WON DIAGONALLY IN A 135 DEGREE ANGLE");
			getScoreO();
			resetButtons();
		}

// DIAGONAL O UP RIGHT
		else if (g === "O" && e === "O" && c ==="O") {
			alert("O WON DIAGONALLY IN A 45 DEGREE ANGLE!");
			getScoreO();
			resetButtons();
		}

// TIE GAME
		else if (turnCounter === 9) {
			alert('"Tying is like kissing your sister." -Abraham Lincoln, 1954');
			getScoreTie();
			resetButtons();
		}

	}

// ^^^^^^^^^^^^^^^^^^^^THIS IS THE END OF THE CONFETTI CODE^^^^^^^^^^^^^^^^

// 		function cellValue(key) {
// 		switch(key) {
// 		    case 'a': return null;
// 		    case 'b': return null;
// 		    case 'c': return null;
// 		    case 'd': return null;
// 		    case 'e': return null;
// 		    case 'f': return null;
// 		    case 'g': return null;
// 		    case 'h': return null;
// 		    case 'i': return null;
// 		    default : return null;
// 		}
// 	}

// // THE FUNCTION BELOW DETERMINES THE WINNER for the original script i wrote

	// function getWinner() {
	// 	if (winnerIsX()) {
	// 		return 'x';
	// 	}
	// 	if (winnerIsO()) {
	// 		return 'o';
	// 	}
	// 	return null;
	// }			


// // X WINNING

// 	function winnerIsX() {
// 		return winsRowX() || winsColumnX() || winsDiagonalX();
// 	}


// // X WINNING BY ROWS

// 	function winsRowX() {
// 		return allThreeX(cellValue('a'), cellValue('b'), cellValue('c')) ||
// 				allThreeX(cellValue('d'), cellValue('e'), cellValue('f')) ||
// 				allThreeX(cellValue('g'), cellValue('h'), cellValue('i'));
// 	}


// // X WINNING BY COLUMNS

// 	function winsColumnX() {
// 		return allThreeX(cells('a'), cells('d'), cells('g')) ||
// 				allThreeX(cells('b'), cells('e'), cells('h')) ||
// 				allThreeX(cells('c'), cells('f'), cells('i'));
// 	}

// // X WINNING BY DIAGONALS

// 	function winsDiagonalX() {
// 		return allThreeX(cells('a'), cells('e'), cells('i')) ||
// 				allThreeX(cells('c'), cells('e'), cells('g'));
// 	}

// 	function allThreeX(cellOne, cellTwo, cellThree) {
// 		return (cellOne === 'x') && (cellTwo === 'x') && (cellThree === 'x');

// 		if(allThreeX===true) {
// 			alert("X HAS WON!");
// 		}
// 	}



 // var topRow = ["X","O",null]
	// function checkRow(topRow) {
	// 	//top row is an array of three values

	// 	// if there are nulls, then return still playing

	// 	// create previous value variable
	// 	var prevVal = "";
	// 	//loop through top row
	// 	for (var i=0; i<topRow.length; i++) {
	// 		// compare current value to previous value
	// 		// if current and previous value are the same, keep going to the next value
	// 		// if the current and previous value are not the same (except for the first one), then return tie
	// 		// save value of current space to a variable holding previous value
			
	// 		if (topRow[i] === prevVal || i===0) {
	// 			prevVal = topRow[i];	
	// 		}
	// 		else {
	// 			return "tie";
	// 		}
	// 	}


	// 	//out should win for X, win for O, tie, or still playing
	// }

	// alert(checkRow(topRow));


	// var topRowWin = {
	// 	"arr01" : ["X","X","X"]
	// }

	// if (topRowWin === true) {
	// 	alert("Player One Wins!");
	// }

//If top left cell equals top middle cell and top right cell, then

});