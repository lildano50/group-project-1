// Function to fetch city, state, and country information based on a zip code using the Zippopotam API

// Add an event listener to the search button and if user hits enter after typing in zip code
var searchButton = document.getElementById("search-button");
var zipCode = document.getElementById("zip-code");

zipCode.addEventListener("submit", zipToCity);
searchButton.addEventListener("click", zipToCity);

//Turned this into a stand alone function so that it can be called both ways rather than repeating the code for 2 event listeners
function zipToCity(event) {
  // Get the zip code entered by the user
  event.preventDefault();
  const zipCode = document.getElementById("search-input").value;
  // Make a GET request to the Zippopotam API
  fetch(`https://api.zippopotam.us/us/${zipCode}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Zip code not found");
      }
      return response.json();
    })
    .then(function(data) {
      console.log(data);
      getEvents(data.places[0]["place name"])
    })
    .catch((error) => {
      // Handle errors, for example, display an error message
      const ul = document.querySelector("#results ul");
      ul.innerHTML = `<li>${error.message}</li>`;
    });
};

//Location is fed into getEvents() from zipToCity function
function getEvents(location) {
  //Array of event types, more can be added but should probably be capped at 10
  eventArray = ["concerts", "sports", "classes", "movies", "plays", "festivals"]
  let event = eventArray[Math.floor(Math.random()*eventArray.length)]
    //URL for API pull, event is a variable and location is a variable brought in from Zippopotum.us API
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
                //Some code from Dasarathan's function moved down to create a list of events
                const ul = document.querySelector("#results ul");
                ul.innerHTML = ""; 
                ul.innerHTML = `Finding events for ${event} in your area!`;
                //For loop to pull all events in the city and event type used in the API and create a list
                //For loop will list all events pulled from the API and a button at the end of each event
                //In theory, the button could be pressed to then add to a to-do list or agenda. 
                //Currently nothing in the addEventListener function
                for (var i=0; i < data.data.length; i++){
                  console.log(data.data[i]) //Console logging data to see what we can manipulate
                  const eventName = data.data[i].name;
                  const li = document.createElement("li");
                  li.textContent = `Event Name: ${eventName} - `;
                  li.setAttribute("id","name"+ i)
                  ul.appendChild(li);
                  const btn = document.createElement("button");
                  btn.textContent = "Add Event";
                  btn.setAttribute("id","event"+ i); //Dynamically creates unique ID for each button
                  btn.setAttribute("class", "eventButton") //Dynamically creates same class for each button for styling purposes
                  li.appendChild(btn);
                  const btnEvent = document.getElementById("event"+i);
                  btnEvent.addEventListener("click", function(){
                  })
              }
            })
    } catch (error) {
        console.error(error);
    }
}
