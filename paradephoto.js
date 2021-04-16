const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north']


function finalPosition(moves) {

  let positionX = 0;
  let positionY = 0;
    
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
  const position = [positionX, positionY];
  return position;
}

