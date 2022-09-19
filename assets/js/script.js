// Start Variable
var workdaySchedule = []

// This loop will create a array FOR loop
for (time = 5; time <=20; time++) {
    var id = time - 5
    var scheduleData = ""

// This will show the time
var showHour = 0;
var dayTimer = "";

if (time === 12) {
    showHour = 12
    dayTimer = "pm"
} else if (time > 12) {
    showHour = time - 12;
    dayTimer = "pm";
} else if (time < 12) {
    showHour = time;
    dayTimer = "am";
}

showHour = showHour.toString()

// Holds information within this section
scheduleData = {
    id: id,
    time: time,
    scheduleData: scheduleData,
    showHour: showHour,
    dayTimer: dayTimer
}

workdaySchedule.push(scheduleData)

}

// This will update the date to the current day
function getCurrentDate() {
    var currentDate = moment().format('dddd, MMMM Do');
    $("#currentDay").text(currentDate);
}



