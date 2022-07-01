$(() => {
    // Create an array of all the hours to include in the scheduler
    var workTimes = ['9', '10', '11', '12', '1', '2', '3', '4', '5'];
    // Container
    var container = $('.container');
    
    // Display today's date in the header
    $('#currentDay').append(moment().format("dddd, MMM Do YYYY"));

    function getLocalStorage(time, textArea) {
        textArea.text(localStorage.getItem(time));
    }

    // For every time in the 'times' array, create a row and three columns
    workTimes.forEach(time => {
        // Create a row
        var row = $('<div class="row m-3">');
    
        // Create the three columns
        // The first column shows the times
        var col1 = $('<div class="col text-right">');
        col1.attr('data-number', time);
        row.append(col1);

        // The wider column for the input  
        var col2 = $('<div class="col-6">');
        var inputGroup = $('<div class="input-group input-group-lg">');
        var textArea = $('<textarea class="form-control" id="todo-area" aria-label="With textarea"></textarea>');
        textArea.addClass("text-white")
        inputGroup.append(textArea);
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

        // Get data from local storage upon refresh and place in their respective textarea
        getLocalStorage(time, textArea);

        // Upon clicking the "Save" button, the user's input is saved to local storage and doesn't disappear unless they erase the field and save again
        btn.click((e) => {
            e.preventDefault();
            // Save to local storage
            localStorage.setItem(time, textArea.val());
        })

        // Color code textarea box depending if `time` is less than, greater than, or equal to `now`
        var now = moment().format("k");
        
        // if (parseInt(now) == parseInt(time)) {
        //     textArea.addClass("bg-success");
        // } else if (parseInt(now) > parseInt(time)) {
        //     textArea.addClass("bg-secondary");
        // } else {
        //     textArea.addClass("bg-danger");
        // }
    })
})