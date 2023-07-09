//Build a counter

let val = document.getElementById('counter');
let value = 0;

function increaseCounter(){
	value += 1;
	val.innerHTML = value;
}

function decreaseCounter(){
	value -= 1;
	val.innerHTML = value;
}

function resetCounter(){
	value = 0;
	val.innerHTML = value;
}