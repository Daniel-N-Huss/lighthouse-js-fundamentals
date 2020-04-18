const smartGarbage = function (trash, bins) {
  
  const binCount = bins;

  binCount[trash]++;

  return binCount;
}


console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }))
