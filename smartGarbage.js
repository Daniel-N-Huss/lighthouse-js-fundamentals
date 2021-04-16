const smartGarbage = function (trashType, bins) {
  bins[trashType]++
  return bins;
}


console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }))
