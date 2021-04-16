const blocksAway = function(directions) {

  var blocksCount = {
    east: 0,
    north: 0
  }

  var steps = 0
  var orient = 1;

  //discover our initial orientation (either headed up or right)
  if (directions[0] === "right") {
    orient = 2
  } else if (directions[0] === 'left') {
    orient = 1
  }
  //our main loop; checks what type of value is currently indexed from direction array. If it's a number, we 
  //set our step variable to that number, and change our blocks east or north appropriately.
  //if it's a string, changes the value of our orientation. There are four possible outcomes, either moving N, S, E or W.
  // 0-3 relates to one of those by adding or subtracting from the east / north key values.
  for (var i = 1; i < directions.length; i++) {
    if (typeof directions[i] === 'number'){
      steps = directions[i];
    } else if (typeof directions[i] === 'string') {
        if (directions[i] === 'left') {
          orient--;
        }else if (directions[i] === 'right') {
          orient++;
        }
    }
    //this just keeps us in the correct value range. If we are facing south (represented by 3), adding 1 (turning right)
    //orients us east (represented by 0)
    if (orient === 4) {
      orient = 0
    }else if (orient === -1){
      orient = 3
    };

    if (orient === 0){
      blocksCount.east -= steps;
    }else if (orient === 1) {
      blocksCount.north += steps;
    }else if (orient === 2) {
      blocksCount.east += steps
    }else if (orient === 3) {
      blocksCount.north -= steps
    }
    
    steps = 0;
  };

  return blocksCount;
};



console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));