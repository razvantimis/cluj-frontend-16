// URL object helps to work with search paramameters
// more details -> https://developer.mozilla.org/en-US/docs/Web/API/URL/URL
var baseUrl = new URL("http://www.boredapi.com/api/activity/");

function getActivty() {
    displayLoader();

    // setting the query parameters for each filter
    setTypeFilter();
    setParticipantsFilter();
    setPriceFilter();

    // make the request to the api url
    fetch(baseUrl.href, {
            method: "GET"
        })
        .then(
            function (response) {
                // parsing the response
                return response.json();
            }
        ).then(
            function (jsonResp) {
                console.log(jsonResp);
                // jsonResp can be one of the following objects
                // {error: "Message"} or {activity: "activity name", type: "music", price: 0.5...}
                // check if the response has error property, it means that the server retuns an error
                if (jsonResp.error) {
                    displayError(jsonResp.error);
                } else {
                    displayActivity(jsonResp);
                }
            }
        ).catch(function () {
            // the catch is reached when the request was unsuccessful, in case of network error, server error etc
            // we display an error message  
            displayError("Something went wrong! Try again!");
        })
        // finally is reached both in case of succes or failed request
        .finally(hideLoader);
}

function setTypeFilter() {
    var types = document.getElementsByName("typeFilter");
    var selectedType;

    for (var i = 0; i < types.length; i++) {
        if (types[i].checked === true) {
            selectedType = types[i].value;
            break;
        }
    }

    if (selectedType) {
        // set the parameters with the set method
        // first parameter key, second parameter is the value for the query parameret of the url
        baseUrl.searchParams.set("type", selectedType);
    }
}

function setParticipantsFilter() {
    var nrParticipants = document.getElementById("participantsFilter").value;

    if (nrParticipants) {
        baseUrl.searchParams.set("participants", nrParticipants);
    }
}

function setPriceFilter() {
    var minPriceValue = document.getElementById("minPriceFilter").value;
    var maxPriceValue = document.getElementById("maxPriceFilter").value;

    if (minPriceValue) {
        baseUrl.searchParams.set("minprice", minPriceValue);
    }
    if (maxPriceValue) {
        baseUrl.searchParams.set("maxprice", maxPriceValue);
    }
}

function displayActivity(currentActivity) {
    // recieves a parameter an activty object and generates the HTML to display the activity
    var activity = document.getElementById("activity");
    activity.innerHTML = '';
    var description = document.createElement("p");
    description.innerText = "Description: " + currentActivity.activity;

    var type = document.createElement("p");
    type.innerText = "Type: " + currentActivity.type;

    var participants = document.createElement("p");
    participants.innerText = "Participants: " + currentActivity.participants;

    var price = document.createElement("p");
    price.innerText = "Price: " + currentActivity.price;

    activity.appendChild(description);
    activity.appendChild(type);
    activity.appendChild(participants);
    activity.appendChild(price);
}

function displayLoader() {
    // get the loader element
    var loader = document.getElementsByClassName("loader")[0];
    // get the container
    var container = document.getElementsByClassName("flex-container")[0];
    // display the loader
    loader.style.display = "block";
    // apply opacity on the content
    container.style.opacity = 0.5;
}

function hideLoader() {
    var loader = document.getElementsByClassName("loader")[0];
    var container = document.getElementsByClassName("flex-container")[0];
    loader.style.display = "none";
    container.style.opacity = 1;
}

function displayError(errorMessage) {
    var errorDiv = document.getElementById('errorDiv');
    errorDiv.innerText = errorMessage;
}

function getPriceRange(price) {
    //convert the price which is between 0 - 1 into a free, $, $$, $$$ price sistem
    if (price == 0) {
        return "free";
    } else if (price < 0.3) {
        return "$";
    } else if (price < 0.6) {
        return "$$";
    } else if (price < 1) {
        return "$$$";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("activity-button").addEventListener("click", getActivty);
});