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

zipCode.addEventListener('submit', getZip)