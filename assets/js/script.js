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
        // The first column shows the times
        var col1 = $('<div class="col text-right">');
        col1.text(time);
        row.append(col1);

        // The wider column for the input  
        var col2 = $('<div class="col-6">');
        var inputGroup = $('<div class="input-group input-group-lg">')
        inputGroup.append('<textarea class="form-control" aria-label="With textarea"></textarea>');
        col2.append(inputGroup);
        row.append(col2);

        // The third column is a button with a Save icon
        var col3 = $('<div class="col">');
        var btn = $('<button type="button" class="btn btn-info btn-lg p-4"></button>');
        var icon = $('<i class="fas fa-save"></i>');
        btn.append(icon);
        col3.append(btn);
        row.append(col3);
    
        // Append row to the container
        container.append(row);
    })

})