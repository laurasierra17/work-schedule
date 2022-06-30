$(() => {
    // Create an array of all the hours to include in the scheduler
    var times = ['9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];
    // Container
    var container = $('.container');
    
    // Display today's date in the header
    $('#currentDay').append(moment().format("dddd, MMM Do YYYY"));


    // For every time in the 'times' array, create a row and three columns
    times.forEach(time => {
        // Create a row
        var row = $('<div class="row m-3">');
    
        // Create the three columns
        var col1 = $('<div class="col text-right">');
        var col2 = $('<div class="col-6">'); // The wider column for the input
        var col3 = $('<div class="col">');
    
        // The first column shows the times
        col1.text(time);
        // The second column is an input
        var inputGroup = $('<div class="input-group input-group-lg">')
        inputGroup.append('<textarea class="form-control" aria-label="With textarea"></textarea>');
        col2.append(inputGroup);
        // The third column is a button with a Save icon
        var btn = $('<button type="button" class="btn btn-info btn-lg p-4"></button>');
        var icon = $('<i class="fas fa-save"></i>');
        btn.append(icon);
        col3.append(btn);
    
        // Append columns to the row
        row.append(col1);
        row.append(col2);
        row.append(col3);
    
        // Append row to the container
        container.append(row);
    })

})