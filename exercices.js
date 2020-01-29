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
        for (let i = 0; i < 5; i++) {
                x.pop();
        }
        return x;
}




//10. sum the digits of the number x
function sumDigits(x) {
	let digits = x.toString().split("");//Separate values from strings onto array
	let sum = 0;
	for (let i = 0; i < digits.length; i++) {
		sum += Number(digits[i]);
	}
	return sum;
}




//11. x is an array of at least 2 unique elements, return the eleemnts that are on odd positions in the array
function oddElements(x) {
	for(let i = 0; i < x.length; i++) {
		if(x[i] % 2 == 0) {
		} else {
			console.log(x[i]);
		}
	}
}




//12. x is an array of number, return elements on the array, where the value is equal to their index doubled
// [3, 2, 4, 6, 7] returns [2, 4, 6] (having the indexes 1, 2, 3)




//13. x is a string, return true if every char in the string is an english vowel




//14. x is an array of strings, return the longest string on x
//ES6
const strings = ["Hello", "World", "Yo!", "Havingthecráic"];
let longest = strings.reduce((a, b) => a.length > b.length ? a: b, '');
console.log(longest);
//JS Version 
var strings = ["Hello", "World", "Yo!", "Havingthecráic"];
var longest = strings.reduce(function(a,b) {
	return a.length > b.length ? a : b
}, '');
console.log(longest);
/*EXTRA
conditional ternary operator
  	condition ? val1 : val2
if condition is true, the operator has the value of val1, otherwise it has the value of val2
	var status = (age >= 18) ? 'adult' : 'minor';
*/


//15.x is a unix time stamp (seconds since jaunary 1, 1970). Return the month 1..12 that corresponds to the date




//16. x is an arbitrarily nested, multidimensional array, return x flattened (all items in 1 dimension).




//17. x is a string, return whether its parentheses are balanced, that;s, whether every openin (has a closing)




//18. x is an array of at least 2 unique members, return 0 if it's not sorted, 1 if it's ascending, -1 if it's descending




//19. x is an array of at least 1 item, return the most frequent item (there will always be just one).




//20. x is an string (representing a file name). Return the file extension (everything after the last dot).




//24. Add something to the beggining and end of an array, repeat with Spread Operator
var myArray = ['a', 'b', 'c', 'd'];
myArray.push("end");
myArray.unshift("start");

myArray = ["start",...myArray];
myArray = [...myArray,"end"];

console.log(myArray);




//25. How do you create a private variable in JavaScript?
//Scope determines the accessibility (visibility) of variables: global scope (outside of functions) and local scope (inside of functions). Remember that in JS, objets and functions are also variables!

function secretVariable() {
	var private = "super secret code";
	return function() {
		return private;
	}
}

var getPrivateVariable = secretVariable();
console.log(getPrivateVariable()); //super secret code




//26. What's the output?
var num = 4;
function outer() {
	var num = 2;
	function inner() {
		num++;
		var num = 3;
		console.log(num);//	3
	}
	inner();
}
outer();




//27. What's the output?
console.log(typeof typeof 1);

//Step 1:	typeof 1 = "number"
//Step 2:	typeof "number" = "string"

//	"string"




//28. What's the output?
var sum = 0;
for (var i = 4; i < 8; i++) {
	if ( i == 6) {
		continue;
	}
	sum += i;
}
console.log(sum); //	16




//29. What's the output?
var x = 0;
while (x < 6) {
	x++;
}
console.log(x);//	6




//30. What's the output?
function test(number) {
	while(number < 5) {
		number++;
	}
	return number;
}
alert(test(2));//	5




//31. What's the output?
var hero = {
	_name: 'John Doe';
	getSecretIdentity: function() {
		return this._name;
	}
};
var stoleSecretIdentity = hero.getSecretIdentity.bind(hero); 
//bind creates a new function that has its "this" keyword set to the provided value, with a given sequence of arguments preceding any provide when the new function is called

console.log(stoleSecretIdentity()); //	undefined
console.log(hero.getSecretIdentity());//	John Doe




//32. given a string, reverse each other word in the sentence
var string = "Welcome to the jungle";
var reverseEntireSentence = reverseBySeparator(string, "");
var reverseEachWord = reverseBySeparator(reverseEntireSentence, " ");

function reverseBySeparator(string, separator) {
  return string.split(separator).reverse().join(separator);
}




//33. How to empty an array in JavaScript?

var arrayList = ['a', 'b', 'c', 'd', 'e'];
arrayList = []; //Method 1
arrayList.length = 0; //Method 2
arrayList.splice(0, arrayList.length); //Method 3




//34. How to check if an object is an array or not 
var arrayList = [1, 2, 3];

//Method 1
if($.isArray(arrayList)) {
	console.log('Array');
} else {
	console.log('Not array');
}

//Method 2
Array.isArray(arrayList);




//35. How to check if a number is an integer
function isInt(num) {
	return num % 1 === 0;
}




//36. Write a function that allows you to do this 
/*multiply(5)(6)*/

function multiply(a){
	return function multiply(b){
		return a * b;
	}
}

multiply(5)(6);




//37. Each time an event listener button on a form is clicked, it reloads the page. How to avoid this?
button.addEventListener('click', function(e) {
	button.className = 'clicked';
}, false);

//Answer
e.preventDefault();




//38. Which statement references the DOM node created by the code shown?
<p class="pull">lorem ipsum</p>

//Answer	
document.querySelector('.pull');




//39. When would the final statement in the code shown be logged to the console?
let modal = document.querySelector('#results');
setTimeout(function() {
	modal.classList.remove('hidden');
}, 10000);
console.log('Results shown');

//Answer
//Immediately

