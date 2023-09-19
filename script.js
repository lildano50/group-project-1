//This will be the working JS file

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