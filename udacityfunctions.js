//function reheatPizza(numSlices/*this is the parameter*/) {
  //code that figures out reheating settings
//}

//function doubleGreeting(name, otherName /*you can have multiple parameters*/)

//function sayHello(/*you can also pass no parameters, just package some code*/)


/*
function findAverage(x, y) {
  var answer = (x + y) / 2;
  return answer
}

var average = findAverage(5, 9);
console.log(average);




function laugh() {
  return 'hahahahahahahahahaha!'
}

console.log(laugh);


function laugh(num) {
  var ha = 'ha';
  var message = ""
  for(var x = num; x > 0; x--) {
    message += 'ha';
  }
return (message + '!');
}

console.log(laugh(3));




function isThisWorking(input) {
  console.log("Printing: isThisWorking was called and " + input + " was passed in as an argument.");
}

isThisWorking(3);



function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
    line += "* "
  }
  return line; //+ "\n"; 

}

function buildTriangle(num) {
  var triangle ="";
  for (var x = 1; x <= num; x++) {
    triangle += (makeLine(x));
    }
    return triangle;
}

console.log(buildTriangle(10));
*/

// Function declaration that takes in two arguments: a function for displaying
// a message, along with a name of a movie
function movies(messageFunction, name) {
  messageFunction(name);
}

// Call the movies function, pass in the function and name of movie
movies(function displayFavorite(movieName) {
  console.log("My favorite movie is " + movieName);
}, "Finding Nemo");


emotions("happy", laugh(2)); // you can use your laugh function from the previous quizzes

var laugh = function(x) {
  var laughs = "";
  for (i = 1; i <= x; i++) {
    laughs += 'ha'
  }
  return laughs + '!';
}


function emotions(myString, myFunc) {
  console.log("I am " + myString + ", " + myFunc(2));
}

// your code goes here
// call the emotions function here and pass in an
// inline function expression

emotions('happy', function (x) {
  var laughs = "";
  for (i = 1; i <= x; i++) {
    laughs += 'ha';
  }
  return laughs + '!';
});