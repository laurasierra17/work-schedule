# Work Day Scheduler

![GIF demo of the application](./assets/images/Work%20Day%20Scheduler.gif)

## Screenshots
Screenshot of the landing page:
![Screenshot of the application's landing page](./assets/images/screenshot.png)

## Description

With many schedulers online and each with different designs, it's difficult to find a minimalistic one that can serve the simple purpose to write and track daily todo's by the hour. This work day scheduler is simple, and color-codes each text input depending on the hour. And it's useful for usage between 9am and 5pm. The current time block is green; past times are in grey; future times are in red. Once you type in a task, just press the "save" button and it won't disappear.

## Future Implementations

Future implementations I'd add are:
- Once a text area fills, remove its ability to scroll and increment its height
- A button to clear a text area
- Give it a calendar look where the user can view every date of the month and populate it

## Code Snippets

```
// Color code textarea box depending if `workTimeHour` is less than, greater than, or equal to `now`
        var now = moment().hour();
        var workTimeHour = col1.attr('data-number');

        if (now == workTimeHour) {
            textArea.addClass("bg-success");
        } else if (now > workTimeHour) {
            textArea.addClass("bg-secondary");
        } else {
            textArea.addClass("bg-danger");
        }
```

To color code each text input, I have to compare the time assigned to each input with the current time. To successfully do this, I assigned a `data-number` attribute to each text input following the 24-hour format. I have done this since `moment().hour()` returns the hours in the 24-hour format, stored in the `now` variable. To easily make the comparison between hours, I created a pointer variable to each text input's data-number attribute and compared it with the current time. Using Bootstrap, I could change each text input's background color.

## Technologies Used

HTML, CSS, JavaScript, jQuery, Bootstrap, Momentjs, and Git

## Deployment Link

https://laurasierra17.github.io/work-schedule/

## User Information
- [LinkedIn](https://www.linkedin.com/in/laurasierra2022)
- [Portfolio](http://www.laura-sierra.com)
