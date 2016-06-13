// console.log('jello');

// // var i = 0
// // while(i < 5) {
// // 	console.log(i);
// // 	i++
// // }

// //conditionals

// x = true;

// if (x) {
// 	console.log('x is true');
// } else {
// 	console.log('x is false');
// }

// var number = 6;
// if(number < 2) {
// 	console.log("the number is too low")
// } else if(number > 7) {
// 	console.log("the number is too high");
// } else {
// 	console.log("the number is just right");
// }

// var i = 10;
// if(i>10) {
// 	console.log('greater than 10');
// }

// //Terinary operator
// var num = 4 ;
// var result = num > 3 ? 'number is too high' : 'number is too low';


// //Switch statements

// var operator = '+';
// var num1 = 4;
// var num2 = 6;
// var result;

// switch(operator) {
// 	case '+':
// 		result = num1 + num2;
// 		break; 
// 	case'-':
// 		result = num1 - num2;
// 		break;
// 	case '*':
// 		result = num1 * num2;
// 		break;
// 	default:
// 		result = 'not a vaild operator';
// }

// console.log(result);

// //ruby-methods
// //javascript functions

// //basic function, no params
// function sayHello() {
// console.log('Hello');
// }

// sayHello();

// //basic function, with params
// function helloName(name) {
// 	console.log('Hello' + name);
// }

// helloName('Jake Sorce');

// //basic function with 2 params
// function addNumbers(num1, num2){
// 	return num1 + num2
// }

// var result = addNumbers(6, 10);
// console.log(result);

// // GOTCHA functions
// //no optional or default params
// //Ruby: def info(name, age = 26)
// 			// end

// function info(name, age) {
// 	console.log("name:" + name);
// 	console.log("age:" + age);
// 	if(age === undefined) {
// 		age = 26;
// 	}
// 	//any pother logic that your function needs
// 	//you need to return a value
// 	return "Name is " + name + ' ' + "Age is " + age;
// }
// console.log (info('Jake', 30))
// console.log (info('Jake'));

function sayHello() {
	alert('Howdy!');
}

function changeHeader() {
	//find the header element by id
	var header = document.getElementById('header');
	console.log(header);
	//by ID and then change the text of the header element
	header.innerHTML = 'Changed by JS';
}

function submitName() {
  // find the input element
  var inputValue = document.getElementById('name_input').value;
  if(inputValue === '') {
    alert('A name needs to be filled in!');
  } else {
    // find the empty p tag
    var greeting = document.getElementById('name_greeting');

    // set the innerHTML of that p tag
    // innerHTML is for <p>, <h1> <span>hello</span> ect..
    // inputs have values that you can get and set
    greeting.innerHTML = "Hello User With The Name: " + inputValue;
  }
}

function changeEveryOtherListItem() {
  var listItems = document.getElementsByClassName('list-item');
  for(var i = 0; i < listItems.length; i++) {
    // change the text of only even elements
    if(i % 2 === 0) {
      listItems[i].innerHTML = 'even one changed by js';
    }
  }
}


 //grabbing values frpm inputs will always be strings
 //parseInt(string);
 //parseFloat(string);

