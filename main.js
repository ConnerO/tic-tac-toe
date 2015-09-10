$(document).ready(function(){


// use an if statement for the turn numbers.
// onClick add a number to a counter. make variable COUNTER and every time something gets clicked, it adds 1 to it. Divide it by 2, if there is a remainder then it's odd which should equal O, if it's even it's X

// var playerOne = "X" make array that if playerOne is in a1,a2,a3 then alert(PLayer One Wins!)



	var turnCounter = 0;


	$(".button").click(function(){
		if ($(this).hasClass("deny")) {
			return;
		}
		if (turnCounter %2 === 0) {
			$(this).text("X");
			$(this).addClass("deny");
		} else {
			$(this).text("O");
			$(this).addClass("deny");
		}

		turnCounter++;

		getWinner();

});

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
			alert("X won! top row")
		}

// MIDDLE ROX X WINS
		if (d === "X" && e === "X" && f ==="X") {
			alert("X won! middle row")
		}

// BOTTOM ROW X WINS
		if (g === "X" && h === "X" && i ==="X") {
			alert("X won! bottom row")
		}

// LEFT COLUMN X WINS
		if (a === "X" && d === "X" && g ==="X") {
			alert("X won! left column")
		}

// MIDDLE COLUMN X WINS
		if (b === "X" && e === "X" && h ==="X") {
			alert("X won! middle column")
		}

// RIGHT COLUMN X WINS
		if (c === "X" && f === "X" && i ==="X") {
			alert("X won! right column")
		}




// TOP ROW O WINS
		if (a === "O" && b === "O" && c ==="O") {
			alert("O won! top row")
		}

// MIDDLE ROX O WINS
		if (d === "O" && e === "O" && f ==="O") {
			alert("O won! middle row")
		}

// BOTTOM ROW O WINS
		if (g === "O" && h === "O" && i ==="O") {
			alert("O won! bottom row")
		}

// LEFT COLUMN O WINS
		if (a === "O" && d === "O" && g ==="O") {
			alert("O won! left column")
		}

// MIDDLE COLUMN O WINS
		if (b === "O" && e === "O" && h ==="O") {
			alert("O won! middle column")
		}

// RIGHT COLUMN O WINS
		if (c === "O" && f === "O" && i ==="O") {
			alert("O won! right column")
		}


	}

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