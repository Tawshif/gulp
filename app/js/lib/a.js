  // var  ame = prompt("What is your name?");
  // if ( ame != null) {
  //     document.getElementById("sayHello").innerHTML = "Hello " +  ame;
  // } else {
  //     alert("Please Enter Your Name Next Time");
  // }

// /*maths and vars */

// var maxNum = Number.MAX_VALUE;

// document.write("Max Num = ", maxNum, "<br/>");
// document.write("Min Num = ", Number.MIN_VALUE, "<br/>");

// document.write("5 + 4 = ", 5 + 4, "<br />"); // = 9
// document.write("5 + 4 = " + 5 + 4, "<br />"); // = 54
// document.write("5 * 4 = ", 5 * 4, "<br />"); // = 20
// document.write("5 / 4 = ", 5 / 4, "<br />"); // = 1.25
// document.write("5 % 4 = ", 5 % 4, "<br />"); // = 1

// var balance = 1563.875;

// document.write("Monthly panment on variable with tofixed to 2 digits : ", (balance / 12).toFixed(2), "<br />");
// document.write("Monthly panment on variable without tofixed function : ", (balance / 12), "<br />");

// var randNum = 5;

// document.write("randNum++ = ", randNum++, "<br />");
// document.write("++randNum = ", ++randNum, "<br />");
// document.write("randNum-- = ", randNum--, "<br />");
// document.write("--randNum = ", --randNum, "<br />");


// document.write("randNum += 5 = ", randNum += 5, "<br />");
// document.write("randNum -= 5 = ", randNum -= 5, "<br />");
// document.write("randNum *= 5 = ", randNum *= 5, "<br />");
// document.write("randNum /= 5 = ", randNum /+ 5, "<br />");

/*Math properties and methods*/

// document.write("Math.E = ", Math.E, "<br/>");
// document.write("Math.PI = ", Math.PI, "<br/>");
 
// document.write("Math.abs(-8) = ", Math.abs(-8), "<br/>");
// document.write("Math.cbrt(1000) = ", Math.cbrt(1000), "<br/>");
// document.write("Math.ceil(6.45) = ", Math.ceil(6.45), "<br/>");
// document.write("Math.floor(6.45) = ", Math.floor(6.45), "<br/>");
// document.write("Math.round(6.45) = ", Math.round(6.45), "<br/>");
// document.write("Math.log(10) = ", Math.log(10), "<br/>"); // Natural log
// document.write("Math.log10(10) = ", Math.log10(10), "<br/>"); // Base 10 log
// document.write("Math.max(10,5) = ", Math.max(10,5), "<br/>");
// document.write("Math.min(10,5) = ", Math.min(10,5), "<br/>");
// document.write("Math.pow(4,2) = ", Math.pow(4,2), "<br/>");
// document.write("Math.sqrt(1000) = ", Math.sqrt(1000), "<br/>");
 
// document.write("Random # (1-10) = ", Math.floor((Math.random() * 10 ) + 1), "<br/>");

// /* string to number convertion */

// document.write("Converted String :", a = Number("3.1416"), " Now its a ", typeof(a) ," <br/>");
// document.write("Converted Int :", a = parseInt("3.1416"), " Now its a ", typeof(a) ," <br/>");
// document.write("Converted Float :", a = parseFloat("3.1416"), " Now its a ", typeof(a) ," <br/>");

// var randString = " A long " + " string that is going " + " to be a really really long string ";

// document.write("String length is : ", randString.length + "<br />");
// document.write("Index of \"going\" : ", randString.indexOf('going'), "<br />");
// document.write("randString.slice(23,28) : ", randString.slice(23,28), "<br />");
// document.write("randString.slice(23) : ", randString.slice(23), "<br />");
// document.write("randString.substr(23,5) : ", randString.substr(23,5), "<br />");

// document.write(randString.replace("really really long string", "Short String") + "<br/>");
 
// document.write("At Index 8 : ", randString.charAt(8) + "<br/>");
  
// randString = randString.trim();
 
// document.write(randString.toUpperCase() + "<br/>");
 
// document.write(randString.toLowerCase() + "<br/>");

// /* Styling with javascript */

// var strToStyle = "Random String";
 
// document.write("Big : ", strToStyle.big(), "<br />");
// document.write("Bold : ", strToStyle.bold(), "<br />");
// document.write("Font Color : ", strToStyle.fontcolor("blue"), "<br />");
// document.write("Font Size : ", strToStyle.fontsize("8em"), "<br />");
// document.write("Italics : ", strToStyle.italics(), "<br />");
// document.write("Google : ", strToStyle.link("http://google.com"), "<br />");
// document.write("Small : ", strToStyle.small(), "<br />");
// document.write("Strike : ", strToStyle.strike(), "<br />");
// document.write("Sub : ", strToStyle.sub(), "<br />");
// document.write("Sup : ", strToStyle.sup(), "<br />");

/* 
 ---------- CONDITIONALS ----------
 Relational Operators : == != > < >= <=
 === : Equal value and type
 Logical Operators : && \\ !
 */
 
//  var age = 19;
//  if((age >= 5) && (age <= 6)){
//  	document.write("Go to school" + "<br />");
//  }else if(age > 18 ) {
//  	document.write("Go to Collage " + "<br />");
//  }else{
//  	document.write("Go to Grade " , age - 5 , "<br />");
//  }

// document.write("true || false = ", true || false, "<br />");
 
// document.write("!true = ", ! true, "<br />");
 
// document.write("\"5\" == 5 = ", ("5" == 5), "<br />");
 
// document.write("\"5\" === 5 = ", ("5" === 5), "<br />");

var age = 7;

// switch(age){
// 	case 5 :
// 	case 6 :
// 		document.write("Go to school" + "<br />");
// 		break;
// 	case 7 :
// 		document.write("Go to Collage " + "<br />");
// 		break;
// 	default :
// 		document.write("Go Home " + "<br />");
// }

/* 
	Ternary Operator assigns a value based on a condition
 	(condition) ? iftrue : ifFalse
*/

// var canIVote = (age >= 18) ? true : false;
// document.write("Can I Vote : ", canIVote, "<br />");
/*
 ---------- LOOPING ----------
 
 while loops as long as a condition is true
*/

// var i = 1;
// while (i <= 10){
//   document.write(i, ", ");
//   i++;
// }
// document.write("<br />");
 
// do while is used when you must go through the loop at least once
// do{
//   var guess = prompt("Guess a number between 1 and 20");
// }while(guess != 15)
 
// alert("You guessed it! 15 was the number");
 
// for is a self contained looping structure

// for(j = 0; j <= 20; j++){
 
//   // If j is divisible by 2 then skip back to the top of the loop
//   if((j % 2) == 0){
//     continue;
//   }
 
//   // If j is equal to 15 break completely out of the loop
//   if(j == 15){
//     break;
//   }
//   document.write(j, ", ");
// }
// document.write("<br />");
 
// var customer = {name : "Bob Thomas", address : "123 Main", balance : 50.50};
 
// // for in cycles through an enumerable properties of an object
// for(k in customer){
//   document.write(customer[k], "<br />");
// }
 
/* ---------- ARRAYS ----------
 Arrays have variable sizes and can contain multiple types in JS*/
 
// var tomSmith = ["Tom Smith", "123 Main", 120.50];
 
// // Access first array item
// document.write("1st State : ", tomSmith[0], "<br />");
 
// // Add an item
// tomSmith[3] = "tsmith@aol.com";
//  console.log(tomSmith);

// // Overwrite index 2 and fit everything else after index 2 without
// // overwriting (Put 0 for second parameter to not overwrite)
// tomSmith.splice(2, 1, "Pittsburgh", "PA");
//  console.log(tomSmith);

// // Delete the 4th index item
// tomSmith.splice(4,1);
//  console.log(tomSmith);

// // Convert an array into a string (Also use toString())
// document.write("Array : ", tomSmith.valueOf(), "<br />");
 
// // Convert an array into a string with separator
// document.write("Array : ", tomSmith.join(", "), "<br />");
 
// // Delete an index
// delete tomSmith[3];
 
// // Sort an array (reverse() for reverse sort)
// // Works for sorting strings
// tomSmith.sort();
 
// // Sort numbers
// var numbers = [4,3,9,1,20,43];
 
// // Descending sort return y - x
// numbers.sort(function(x,y){ return x - y });
// document.write("Num Array : ", numbers.toString(), "<br />");
 
// // Combine arrays
// var combinedArray = numbers.concat(tomSmith);
 
// // Remove the last item
// tomSmith.pop();
 
// // Add items to the end
// tomSmith.push("555-1212", "US");
 
// // Deletes the first item
// tomSmith.shift();
 
// // Adds item to the first index
// tomSmith.unshift("Tom Smith");
 
// for (var i = 0; i < tomSmith.length; i++) {
//   document.write(tomSmith[i], "<br />");
// }

// /* Functions */

// function inArray(arrayTocheck , value){
// 	for (var i = 0; i < arrayTocheck.length; i++) {		
// 		if(arrayTocheck[i] === value ){
// 			return true;
// 		}
// 	}
// 	return false;
// }
// var randArray = [ 1,2,3,4,5,6];
// document.write("In array : ", inArray(randArray, 10) ,"<br />");


// function times2(num){
// 	var var2 = 2;
// 	return num * var2;
// }
// function times3(num){
// 	return num * 3;
// }
// function multiply(func, num){
// 	return func(num);
// }

// var triple = function(num){
// 	return num * 3;
// }

// document.write("2*15 : ", multiply(times2, 15) ,"<br />");
// document.write("3*15 : ", multiply(times3, 15) ,"<br />");
// document.write("3*45 : ", multiply(triple, 45) ,"<br />");

// function getSum(){
// 	var sum = 0;
// 	for (var i = 0; i < arguments.length; i++) {
// 		sum += arguments[i];
// 	}
// 	return sum;
// }

// document.write("Sum =  ", getSum(1,2,3,4,5,6) ,"<br />");

// function timesTwo(theArray){
// 	var newArray = [];

// 	for (var i = 0; i < theArray.length; i++) {
// 		newArray.push(theArray[i]*2);
// 	}
// 	return newArray;
// }

// document.write("Array Double =  ", timesTwo([1,2,3,4,5,6]).toString() ,"<br />");

// /*recursive funtion*/

// function factorial(num) {
// 	if (num <=1 ) {
// 		return 1;
// 	} else {
// 		return num * factorial(num -1);
// 	}
// }
// document.write("Factorial of 4 =  ", factorial(4).toString() ,"<br />");

/* Event handleing */

