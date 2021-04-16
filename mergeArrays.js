function merge(arr1, arr2){
  const merged = [...arr1, ...arr2]
  merged.sort((a, b) => a - b)
  return merged;
}

console.log(merge([1, 2,], [4, 5, 6]));

// console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
// console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
// console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);
