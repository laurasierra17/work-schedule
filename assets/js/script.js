// Create an array of all the hours to include in the scheduler
var times = ['9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];
// Container
var container = $('.container');

// For every time in the 'times' array, create a row and three columns
times.forEach(time => {
    // Create a row
    var row = $('<div class="row">');

    // Create the three columns
    var col1 = $('<div class="col">');
    var col2 = $('<div class="col-6">'); // The wider column for the input
    var col3 = $('<div class="col">');

    // Append columns to the row
    row.append(col1);
    row.append(col2);
    row.append(col3);

    // Append row to the container
    container.append(row);
})

