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

  // This gets the input value and then selects the value property.
  var inputValue = inputElement.property("value");

  // The filter function here is pretty straightforward in that it uses an arrow function and matches the input value to the database datetime value.
    
  var filteredData = ufos.filter(sighting => sighting.datetime === inputValue);

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

