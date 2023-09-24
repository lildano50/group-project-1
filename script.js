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
                
                ul.innerHTML = `<p class="text-4xl font-bold">Finding events for ${event} in your area!</p>`;

                //For loop to pull all events in the city and event type used in the API and create a list
                //For loop will list all events pulled from the API and a button at the end of each event
                for (var i=0; i < 10; i++){
                  const eventName = data.data[i].name;
                  const li = document.createElement("li");
                  li.textContent = `Event Name: ${eventName} - `;
                  li.setAttribute("class", "eventName");
                  li.setAttribute("id","name"+ i)
                  ul.appendChild(li);
                  const btn = document.createElement("button");
                  btn.textContent = "DO IT!";
                  btn.setAttribute("id","event"+ i); //Dynamically creates unique ID for each button
                  btn.setAttribute("class", "eventButton") //Dynamically creates same class for each button for styling purposes
                  li.appendChild(btn);
              }
              addEvents();
            })
    } catch (error) {
        console.error(error);
    }
}

function toDoList() {
// Get the element with the ID "myList"
var toDo = document.getElementById("myList");

// Apply Tailwind CSS classes
toDo.classList.add("mt-4", "text-2xl", "font-bold", "text-blue-500");

// Set the text content
toDo.textContent = "My To Do List:";



}

toDoList();
function addEvents(){
  $("#event0").click(function(){
    const event0 = $("#name0").text();
    localStorage.setItem("event0", event0);
    const setEvent0 = $("#myList");
    const getEvent0 = localStorage.getItem("event0");
    const li = $("<li>")
    li.text(getEvent0);
    setEvent0.append(li)
  })

  $("#event1").click(function(){
    const event1 = $("#name1").text();
    localStorage.setItem("event1", event1);
    const setEvent1 = $("#myList");
    const getEvent1 = localStorage.getItem("event1");
    const li = $("<li>")
    li.text(getEvent1);
    setEvent1.append(li)
  })

  $("#event2").click(function(){
    const event2 = $("#name2").text();
    localStorage.setItem("event2", event2);
    const setEvent2 = $("#myList");
    const getEvent2 = localStorage.getItem("event2");
    const li = $("<li>")
    li.text(getEvent2);
    setEvent2.append(li)
  })

  $("#event3").click(function(){
    const event3 = $("#name3").text();
    localStorage.setItem("event3", event3);
    const setEvent3 = $("#myList");
    const getEvent3 = localStorage.getItem("event3");
    const li = $("<li>")
    li.text(getEvent3);
    setEvent3.append(li)
  })

  $("#event4").click(function(){
    const event4 = $("#name4").text();
    localStorage.setItem("event4", event4);
    const setEvent4 = $("#myList");
    const getEvent4 = localStorage.getItem("event4");
    const li = $("<li>")
    li.text(getEvent4);
    setEvent4.append(li)
  })

  $("#event5").click(function(){
    const event5 = $("#name5").text();
    localStorage.setItem("event5", event5);
    const setEvent5 = $("#myList");
    const getEvent5 = localStorage.getItem("event5");
    const li = $("<li>")
    li.text(getEvent5);
    setEvent5.append(li)
  })

  $("#event6").click(function(){
    const event6 = $("#name6").text();
    localStorage.setItem("event6", event6);
    const setEvent6 = $("#myList");
    const getEvent6 = localStorage.getItem("event6");
    const li = $("<li>")
    li.text(getEvent6);
    setEvent6.append(li)
  })

  $("#event7").click(function(){
    const event7 = $("#name7").text();
    localStorage.setItem("event7", event7);
    const setEvent7 = $("#myList");
    const getEvent7 = localStorage.getItem("event7");
    const li = $("<li>")
    li.text(getEvent7);
    setEvent7.append(li)
  })

  $("#event8").click(function(){
    const event8 = $("#name8").text();
    localStorage.setItem("event8", event8);
    const setEvent8 = $("#myList");
    const getEvent8 = localStorage.getItem("event8");
    const li = $("<li>")
    li.text(getEvent8);
    setEvent8.append(li)
  })

  $("#event9").click(function(){
    const event9 = $("#name9").text();
    localStorage.setItem("event9", event9);
    const setEvent9 = $("#myList");
    const getEvent9 = localStorage.getItem("event9");
    const li = $("<li>")
    li.text(getEvent9);
    setEvent9.append(li)
  })


}