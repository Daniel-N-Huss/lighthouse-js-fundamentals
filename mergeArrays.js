function merge(arr1, arr2){
  var newArray = arr1;
  var sortArray = arr2;
  var sortLength = arr1.length + arr2.length;
  
  
  for (var i = 0; i < sortLength; i++){
    for (var sort = 0; sort < sortArray.length; sort++){
      if (sortArray[sort] < newArray[i] || newArray[i] === undefined) {
        newArray.splice(i, 0, sortArray[sort]);
        sortArray.shift();
      }
    }
  }

  return newArray;
}
  





console.log(merge([1, 2,], [4, 5, 6]));

/*
console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);
*/