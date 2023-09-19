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
  
  // Function to fetch a random activity from the Bored API, display it along with city, state, and country
  function fetchRandomActivityAndDisplay() {
    const zipCode = document.getElementById('search-input').value;
  
    // Make a GET request to the Bored API
    fetch('https://www.boredapi.com/api/activity')
      .then((response) => response.json())
      .then((activityData) => {
        // Fetch city, state, and country information based on the zip code
        fetchCityStateCountry(zipCode)
          .then(({ city, state, country }) => {
            // Get the ul element by its id
            const resultsList = document.getElementById('results');
  
            // Create a new li element to display the random activity, city, state, and country
            const newActivityItem = document.createElement('li');
            newActivityItem.textContent = `${activityData.activity} in ${city}, ${state}, ${country}`;
  
            // Append the li element to the ul
            resultsList.appendChild(newActivityItem);
          })
          .catch((error) => {
            console.error('Error fetching city, state, and country information:', error);
          });
      })
      .catch((error) => {
        console.error('Error fetching random activity:', error);
      });
  }
  
  // Event listener for the "Tell me what to do!" button
  document.getElementById('search-button').addEventListener('click', function () {
    // Call the function to fetch and display a random activity with city, state, and country
    fetchRandomActivityAndDisplay();
  });
  