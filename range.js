var x = 0

function range(start, end, step) {
  var numbers = [];
  for(x = start; x <= end; x = x + step){
    if(step <= 0) {
      break;
    } else {
  numbers.push(x);
    }
  }
  return numbers;
}


console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));