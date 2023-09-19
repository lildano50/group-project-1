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




  /*

  This is the other code

  */

  

var zipCode = document.querySelector("#zip-code");
var sortBy = document.querySelector("#criteria");



//test api call for zippopotum.us
//currently console logs all zip code info when zip code is entered in input form
function getZip(event){

    event.preventDefault();
    var code = document.getElementById("search-input").value;
    var client = new XMLHttpRequest();
    client.open("GET", "http://api.zippopotam.us/us/" + code, true);
    client.onreadystatechange = function() {
        if(client.readyState == 4) {
            console.log(client.responseText);
        };
    };
    client.send();
}


function findEvents(event){
    event.preventDefault();

    fetch("https://www.boredapi.com/api/activity/")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
    })
};

function getEvents() {
    const url = 'https://real-time-events-search.p.rapidapi.com/search-events?query=sports%20in%20Austin&start=0';
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