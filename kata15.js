const squareCode = function(message) {
  const regex = / /gi;
  noSpace = message.replace(regex, '');
  squaring = [];
  encoding = [];
  encoded = '';
  
  var charCount = Math.ceil(Math.sqrt(noSpace.length));

  for (i = 0; i < noSpace.length; i += charCount){
    var toPush = noSpace.slice(i, i + charCount);
    squaring.push(toPush);
  };

  for (x = 0; x < squaring.length; x++){
    for (y = 0; y < squaring[x].length; y++)
      if (encoding[y] === undefined){
        encoding.push(squaring[x][y]); 
      } else {
        encoding[y] += squaring[x][y];
      }   
  };

  for (i = 0; i < encoding.length; i++){
    encoded = encoded + encoding[i] + ' ';
  };

  return encoded;

};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));
