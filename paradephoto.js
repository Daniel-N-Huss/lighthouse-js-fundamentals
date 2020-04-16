const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north']


function finalPosition(moves) {

  var positionX = 0;
  var positionY = 0;
    
  for (let move of moves) {
    if (move === 'north'){
      positionY++;
    } else if (move === 'south') {
      positionY--;
    } else if (move === 'west') {
      positionX--;
    } else if (move === 'east') {
      positionX++;
    }
  }
  var position = [positionX, positionY];
  return position;
}

