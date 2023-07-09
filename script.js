//Build a counter

let val = document.getElementById('counter');
//variable that links to 'counter' p tag

let value = 0;

function increaseCounter(){
	value += 1;
//increase the value of the counter by 1

	val.innerHTML = value;
/*
displays the number in 'value' in the designated p tag 
	according to the val varibale
*/

}

function decreaseCounter(){

	value -= 1;
//decreases the value of the counter by 1

	val.innerHTML = value;
}

function resetCounter(){

	value = 0;
//resets the counter back to 0

	val.innerHTML = value;
}