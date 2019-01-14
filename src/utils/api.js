// search by restaurants
export const getRestaurants = location =>
  fetch(`https://where-to-eat-backend.herokuapp.com/getResults/restaurant/${location}/50/7000/1,2/true`)
  .then(res => res.json())
  .then(data => {
    return data
  })

//backend server get route
// '/getResults/:restaurant/:location/:limit/:radius/:price/:open_now'