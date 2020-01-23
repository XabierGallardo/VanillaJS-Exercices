//1. Return x doubled
function double (x) {
	return x * 2;
}

//2. x is a number, return x as a string
function numberToString(x) {
	return x + "";
}

//3. x is a float, return x as a truncated int
function floatToInt(x) {
	return Math.trunc(x);
}

//4. return x squared 
function square(x) {
	return x * x;
}

//5. x is an integer, return false if the number is odd and true if it's even
function isEven(x) {
	if (x % 2 == 0) {
		return true;
	} else {
		return false;
	}
}

//6. x is an array, return an array removing the first 5 elements on x
function removeFirstFive(x) {
	for (let i =0; i < 5; i++) {
		x.shift();
	}
	return x;
}

//7. x is a string that contains a number, return x as a number
function stringToNumber(x) {
	let integer = parseFloat(x);
	return integer;
}

//8. x is a string, rearrange the string from the last to the first character
function reverseString(x) {
	let splitString = x.split("");
	let reverseArray = splitString.reverse();
	let joinArray = reverseArray.join("");
	return joinArray;
}

//9. x is an array, return an array removing the last 5 elements on x
function removeLastFive(x) {
	function removeFirstFive(x) {
        for (let i =0; i < 5; i++) {
                x.pop();
        }
        return x;
}

//10. sum the digits of the number x
function sumDigits(x) {
	var numbers = 123;
	var digits = numbers.toString().split("");//Separate values from strings onto array
	var sum = 0;
	






