const generateBoard = function(whiteQueen, blackQueen){
  var chessBoard = [];
  
  for (x = 0; x < 8; x++){
    for(y = 0; y < 8; y++){
      if(chessBoard[x] === undefined){
        chessBoard.push([0]);
      } else {
        chessBoard[x].push(0);
      }
    } 
  };
  
  chessBoard[whiteQueen[0]][whiteQueen[1]] = 1
  chessBoard[blackQueen[0]][blackQueen[1]] = 1

  return chessBoard;

};

const queenThreat = function (generatedBoard) {
  
  var queenRow = whiteQueen[0];
  var queenCol = whiteQueen[1];

  var rowCheck = function (queenRow) {
    var count = -1;
    for (i = 0; i < 8; i++) {
      if (generatedBoard[queenRow][i] === 1) {
        count++;
      }
    }
    return count;
  };
  
  var colCheck = function (queenCol){
    var count = -1;
    for (var i = 0; i < 8; i++){
      if (generatedBoard[i][queenCol] === 1) {
        count++;
      }
    }
    return count;
  };

  var downDiag = function (queenRow, queenCol) {
    var count = -2;
    for (var offset = 0; offset < 8; offset++) {
      if (generatedBoard[queenRow + offset] === undefined || generatedBoard[queenCol + offset] === undefined) {
        break;      
      } else if (generatedBoard[queenRow + offset][queenCol + offset] === 1){
          count++;
      }
    }
    for (var offset = 0; offset < 8; offset++){
      if (generatedBoard[queenRow - offset] === undefined || generatedBoard[queenCol - offset] === undefined) {
        break;
      } else if (generatedBoard[queenRow - offset][queenCol - offset] === 1) {
        count++;
      }
    } 
      return count;
    };


  var upDiag = function (queenRow, queenCol) {
    var count = -2;

    for (var offset = 0; offset < 8; offset++){
      if (generatedBoard[queenRow - offset] === undefined || generatedBoard[queenCol + offset] === undefined){
        break;
      }else if (generatedBoard[queenRow - offset][queenCol + offset] === 1){
        count++;
      }
    }
    for (var offset = 0; offset < 8; offset++) {
      if (generatedBoard[queenRow + offset] === undefined || generatedBoard[queenCol - offset] === undefined){
        break;
      }else if (generatedBoard[queenRow + offset][queenCol - offset] === 1){
        count++;
      }      
    }
    return count;
  };

  var finalCount = rowCheck(queenRow) + colCheck(queenCol) + downDiag(queenRow, queenCol) + upDiag(queenRow, queenCol);

  if (finalCount > 0){
    return true;
  } else {
    return false;
  };

};


let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));