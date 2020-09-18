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
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(ufos);

  var filteredData = ufos.filter(sighting => sighting.datetime > inputValue);

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

