
//search by restaurants
export const getRestaurants = location =>
  fetch(`http://localhost:3000/getResults/restaurant/${location}/30/7000/1,2/true`)
    .then(res => res.json())
    .then(data => {return data})

//random number generator
export const getRandom = max => {
    return Math.floor(Math.random() * Math.floor(max));
  }