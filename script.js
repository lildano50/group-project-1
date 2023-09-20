// Function to fetch city, state, and country information based on a zip code using the Zippopotam API

// Add an event listener to the search button
document.getElementById("search-button").addEventListener("click", function () {
  // Get the zip code entered by the user
  const zipCode = document.getElementById("search-input").value;
  // Make a GET request to the Zippopotam API
  fetch(`https://api.zippopotam.us/us/${zipCode}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Zip code not found");
      }
      return response.json();
    })
    .then((data) => {
      // Clear any previous results
      const ul = document.querySelector("#results ul");
      ul.innerHTML = "";
      // Display the city in the results
      const city = data.places[0]["place name"];
      const li = document.createElement("li");
      li.textContent = `City: ${city}`;
      ul.appendChild(li);
    })
    .catch((error) => {
      // Handle errors, for example, display an error message
      const ul = document.querySelector("#results ul");
      ul.innerHTML = `<li>${error.message}</li>`;
    });
});
  // Event listener for the "Tell me what to do!" button
  // document.getElementById('search-button').addEventListener('click', function () {
    // Call the function to fetch and display a random activity with city
  //   console.log(zip);
  //   fetchCityStateCountry(zip);
  
  // });


//test api call for zippopotum.us
//currently console logs all zip code info when zip code is entered in input form

// Two variables needed for this function: city and event
function getEvents(location) {
  eventArray = ["concerts", "sports", "classes", "movies", "plays", "festivals"]
  let event = eventArray[Math.floor(Math.random()*items.eventArray)]
    const url = 'https://real-time-events-search.p.rapidapi.com/search-events?query=' + event + '%20in%20' + location + '&start=0';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '251df9cb24mshac0bc1e3e304557p1c2fe2jsn4619ef770dfc',
            'X-RapidAPI-Host': 'real-time-events-search.p.rapidapi.com'
        }
    };
    
    try {
        fetch(url, options)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data)
            })
    } catch (error) {
        console.error(error);
    }
}

// zipCode.addEventListener('submit', getZip)
// zipCode.addEventListener('submit', getEvents)
// zipCode.addEventListener('submit', findEvents)