$(document).ready(function(){


// use an if statement for the turn numbers.
// onClick add a number to a counter. make variable COUNTER and every time something gets clicked, it adds 1 to it. Divide it by 2, if there is a remainder then it's odd which should equal O, if it's even it's X

// var playerOne = "X" make array that if playerOne is in a1,a2,a3 then alert(PLayer One Wins!)

	var turnCounter = 0;
	var playerOne = "X";
	var playerTwo = "O";


	$(".button").click(function(){
		if (turnCounter %2 === 0) {
			$(this).text("X");
		} else {
			$(this).text("O");
		}

		turnCounter++;
		


	});
 var topRow = ["X","O",null]
	function checkRow(topRow) {
		//top row is an array of three values

		// if there are nulls, then return still playing

		// create previous value variable
		var prevVal = "";
		//loop through top row
		for (var i=0; i<topRow.length; i++) {
			// compare current value to previous value
			// if current and previous value are the same, keep going to the next value
			// if the current and previous value are not the same (except for the first one), then return tie
			// save value of current space to a variable holding previous value
			
			if (topRow[i] === prevVal || i===0) {
				prevVal = topRow[i];	
			}
			else {
				return "tie";
			}
		}


		//out should win for X, win for O, tie, or still playing
	}

	alert(checkRow(topRow));


	// var topRowWin = {
	// 	"arr01" : ["X","X","X"]
	// }

	// if (topRowWin === true) {
	// 	alert("Player One Wins!");
	// }

//If top left cell equals top middle cell and top right cell, then


});