// Function to fetch city, state, and country information based on a zip code using the Zippopotam API
function fetchCityStateCountry(zipCode) {
    return fetch(`https://api.zippopotam.us/us/${zipCode}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Invalid zip code or API error');
        }
        return response.json();
      })
      .then((data) => {
        const city = data.places[0]['place name'];
        const state = data.places[0]['state abbreviation'];
        const country = 'United States'; // You can hardcode the country based on the API endpoint

        return { city, state, country };
      })
      .catch((error) => {
        console.error('Error fetching city, state, and country information:', error);
        throw error; // Rethrow the error to handle it in the fetchRandomActivityAndDisplay function
      });
  }

  // Event listener for the "Tell me what to do!" button
  document.getElementById('search-button').addEventListener('click', function () {
    // Call the function to fetch and display a random activity with city, state, and country
    fetchRandomActivityAndDisplay();
  });




  /*

  This is the other code

  */

//test api call for zippopotum.us
//currently console logs all zip code info when zip code is entered in input form

// Two variables needed for this function: city and event
function getEvents(city, event) {
    const url = 'https://real-time-events-search.p.rapidapi.com/search-events?query=' + event + '%20in%20' + city + '&start=0';
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

zipCode.addEventListener('submit', getZip)
zipCode.addEventListener('submit', getEvents)
zipCode.addEventListener('submit', findEvents)