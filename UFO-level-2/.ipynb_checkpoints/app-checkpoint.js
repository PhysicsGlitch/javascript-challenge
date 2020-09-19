// Assign the data from `data.js` to a descriptive variable
var ufos = data;

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("form");

// Create event handlers
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

// Prevent the page from refreshing
d3.event.preventDefault();

// Select the input element and get the raw HTML node
var inputDatetime = d3.select("#datetime");
var inputState = d3.select("#state");
var inputCountry = d3.select("#country");
var inputCity = d3.select("#city");
var inputShape = d3.select("#shape");

// I get the value properties for all of my inputs and code them as variables.
var date_filter = inputDatetime.property("value");
var state_filter = inputState.property("value");
var city_filter = inputCity.property("value");
var country_filter = inputCountry.property("value");
var shape_filter = inputShape.property("value");

// I then make a filter key of the values to be able to pass it into my filter function. 

var filter_key = {};
if (date_filter !== "") {filter_key["datetime"] = date_filter};
if (city_filter !== "") {filter_key["city"] = city_filter};
if (state_filter !== "") {filter_key["state"] = state_filter};
if (country_filter !== "") {filter_key["country"] = country_filter};
if (shape_filter !== "") {filter_key["shape"] = shape_filter};

    
console.log(filter_key);
  
    
var filteredData = ufos.filter(
    function(item) {
      for (var key in filter_key) {
        if (filter_key[key] === undefined || item[key] != filter_key[key])
          return false;
      }
          return true;
    });

console.log(filteredData);

var tableHTML = "<tr>";
  for (var headers in filteredData[0]) {
    tableHTML += "<th>" + headers + "</th>";
  }
  tableHTML += "</tr>";

  for (var eachItem in filteredData) {
    tableHTML += "<tr>";
    var dataObj = filteredData[eachItem];
    for (var eachValue in dataObj){
      tableHTML += "<td>" + dataObj[eachValue] + "</td>";
    }
    tableHTML += "</tr>";
  }

  document.getElementById("ufotable").innerHTML = tableHTML;
};

