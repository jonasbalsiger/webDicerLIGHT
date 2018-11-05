//set dice-svgs
var num1 = '<circle cx="200" cy="200" r="40" fill="black"/>';
var num2 = '<circle cx="100" cy="100" r="40" fill="black"/><circle cx="300" cy="300" r="40" fill="black"/>';
var num3 = num1 + num2;
var num4 = num2 + '<circle cx="100" cy="300" r="40" fill="black"/><circle cx="300" cy="100" r="40" fill="black"/>';
var num5 = num4 + num1;
var num6 = num4 + '<circle cx="100" cy="200" r="40" fill="black"/><circle cx="300" cy="200" r="40" fill="black"/>';
//write dice-svgs into array
var diceSVG = [num1, num2, num3, num4, num5, num6];



//add EventListener to rollButton on body load
function init() {
	document.getElementById('rollButton').addEventListener('touchstart', rollDice);
	shake.startWatch(rollDice);

}



/* ---------- simplest roll-function with random number and without any animation ---------- */
//write random number between 1 and 6 into "dice-div"
/*
function rollDice(){
	document.getElementById('dice').innerHTML =  Math.ceil(Math.random()*6);
}
*/



/* ---------- simple roll-function with random svg and without any animation ---------- */
//write random dice-svg between 1 and 6 into "dice-div"

var rollDice = function() {
	document.getElementById('dice').innerHTML = '<svg viewBox="0 0 400 400" >' + diceSVG[Math.floor(Math.random() * 6)] + '</svg>';
}




/* ---------- roll-function with random number and simple "animation" ---------- */
/*
//write random number between 1 and 6 into "dice-div" ("Animation": write random number numRolls times with intervall 40ms)
function rollDice() {
	document.getElementById('rollButton').removeEventListener('touchstart', rollDice);
	var numRolls=20;
	var x=0;
	var animDice = function(){
		x++;
		document.getElementById('dice').innerHTML = Math.floor(Math.random()*6)+1;
		if(x==numRolls){
			clearInterval(timer);
			document.getElementById('rollButton').addEventListener('touchstart', rollDice);
		}
	}
	timer = setInterval(animDice,40);
}
*/



/* ---------- roll-function with random svg and simple "animation" ---------- */
/*
//write random dice-svg between 1 and 6 into "dice-div" ("Animation": write random svg numRolls times with intervall 60ms)
function rollDice() {
	document.getElementById('rollButton').removeEventListener('touchstart', rollDice);
	var numRolls=20;
	var x=0;
	var animDice = function(){
		x++;
		document.getElementById('dice').innerHTML = '<svg viewBox="0 0 400 400" >' + diceSVG[Math.floor(Math.random() * 6)] + '</svg>';
		if(x==numRolls){
			clearInterval(timer);
			document.getElementById('rollButton').addEventListener('touchstart', rollDice);
		}
	}
	timer = setInterval(animDice,60);
}
*/