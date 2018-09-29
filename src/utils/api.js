

//search by restaurants
export const getRestaurants = location =>
  fetch(`http://localhost:3000/getResults/restaurant/${location}/30`)
    .then(res => res.json())
    .then(data => {return data})