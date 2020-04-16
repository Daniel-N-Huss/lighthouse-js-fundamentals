const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre'],
];

function chooseStations (stations) {
  const goodStations = [];

  for (const station of stations) {
    const capacity = station[1]
    const venueType = station[2]
    
    if (capacity >= 20 && (venueType === 'community centre' || venueType === 'school')){
      goodStations.push(station[0])
    }
  } 
  return goodStations;   
} 

console.log(chooseStations(stations))
