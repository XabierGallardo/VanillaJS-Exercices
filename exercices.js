//AJAX calls on JS///////////////////////////////////////////////////////////


//XMLHttpRequest/////
const xhr = new XMLHttpRequest(),
	method = "GET",
	url = "https://developer.mozilla.org/";

xhr.open(method, url, true);
xhr.onreadystatechange = function() {
	if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
		console.log(xhr.responseText);
	}
};

xhr.send();


//$.ajax()/////
function checkUser () {

	var user = {
		id: "12345678A",
		name: "Liam",
		surname: "McGee",
		address: "123 Craic Street"
	}

	var url = "https://developer.mozilla.org/";

	$.ajax({
		url: url,
		type: "post",
		dataType: "JSON",
		contentType: "application/json",
		success: function (data) {
			alert(data);
			var answer = data.name + " " + data.surname;
			console.log(answer);
		}
	});
}


//To send data in JSON
var myObj = {name: "John", age: 31, city: "New York"};
var myJSON = JSON.stringify(myObj);
window.location "demo_json.php?x=" + myJSON;


//To receive data in JSON
var myJSON = '{"name": "John", "age": 31, "city": "New York"}';
var myObj = JSON.parse(myJSON);
console.log("The name of my object is: " + myObj.name);


///////////////////////////////////////////////////////////////////////////


//1.	Return x doubled
function double (x) {
	return x * 2;
}




//2.	x is a number, return x as a string
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
	if (x % 2 === 0) {
		return true;
	} else {
		return false;
	}
}




//6. x is an array, return an array removing the first 5 elements on x
function removeFirstFive(x) {
	for (let i = 0; i < 5; i++) {
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




//11. x is an array of at least 2 unique elements, return the elements that are on odd positions in the array
function oddElements(x) {
	for(let i = 0; i < x.length; i++) {
		if(x[i] % 2 === 0) {
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




//40. Define closure
//In JS we need closures when a variable which is defined outside the scope in reference is accesed from some inner scope.
var num = 10;
function sum() {
	document.writeln(num+num);
}
sum();




//41. Create a function that generates an hour list from 9:00 to 21:30, incrementing 30 minutes
for(var i = 9; i < 22; i++){
  for (var j = 0; j <= 30; j+= 30){
    if(j < 30){
      console.log(i + ":0" + j);
    }else{
      console.log(i + ":" + j);
    }
  }
}




//42. Create a function that generates an hour list from 9:00 to 21:30, incrementing 5 minutes
for(var i = 9; i < 22; i++){
  for (var j = 0; j <= 55; j+= 5){
    if(j < 10){
      console.log(i + ":0" + j);
    }else if (i === 21 && j === 35){
 	break;
    }else{
      console.log(i + ":" + j);
    }
  }
}




//43. Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string). 
//Examples: 	solution('abc', 'bc') // returns true
//		solution('abc', 'd') // returns false

function solution(str, ending) {

}




/*44.	What is the output?
	(function(){
	  var a = b = 3;
	})();

	console.log("a defined? " + (typeof a !== 'undefined'));
	console.log("b defined? " + (typeof b !== 'undefined'));*/

//OUTPUT 
a defined? false
b defined? true

//var a = b = 3; is shorthand for the statements b = 3; and var a = b;
//b ends up being a global variable (since it is not preceded by the var keyword) and is therefore still in scope even outside of the enclosing function.




/**/

/*45.    Given a positive integer, write a function to check if it's a power of 2:
 * Examples: 8=>true, 15=>false, 32=>true*/

//Solution 1
function isPowerOfTwo(x) {
        if(x === 0) {
                return false;
        } if(x%2 === 0) {
                return true;
        } else {
                return false;
        }
}


//Solution 2
function isPowerOfTwo(x) {
        var division = x/2;
        var solution = Number.isInteger(division);
        if(solution === true) {
                return true;
        }else{
                return false;
        }
}




/*46.    Write a function to print the first 100 elements of the sequence 1, 3, 4, 13, 53, 690*/
var sequence = [1,3];

function mySequence() {
        for (var i = 0; i < 101 ; i++) {
        var a = sequence[sequence.length -2];
        var b = sequence[sequence.length -1];
        var c = (a * b) + 1;
        sequence.push(c);
        console.log(sequence[i]);
    }
}

mySequence();




/*47.    Given a string, write a function to print all possible permutations.
 * Example: ABC => ABC ACB BAC BCA CAB CBA*/
function permut(string) {
        var results = [];

        if(string.length < 2) {
                return string;
        }

        for(var i = 0; i < string.length; i++) {
                var firstChar = string[i];
                var charsLeft = string.substring(0,i) + string.substring(i+1);
                var innerPermutations = permut(charsLeft);

                for(var j = 0; j < innerPermutations.length; j++) {
                        results.push(firstChar + innerPermutations[j]);
                }
        }
        return results;
}

permut("ABC"); // "ABC", "ACB", "BAC", "BCA", "CAB", "CBA" ]




/*48.    Given a String, reverse the whole string without reversing the individual words in it.
 * Example: "my favourite film is the lord of the rings" => "rings the of lord the is film favourite my"*/
var string = "my favourite film is the lord of the rings";

var separate = string.split(" ");

var reverse = separate.reverse();

console.log(reverse); //"rings", "the", "of", "lord", "the", "is", "film", "favourite", "my"




/*49.	Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.
 * Examples:
 * 1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
 * 2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
 * 3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3*/


function isDivisible(n, x, y) {
	var first = Number.isInteger(n / x);
	var second = Number.isInteger(n / y);
  
	if (first === true && second === true) {
		return true;
    } else {
		return false;
    }
}
