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

// This will save the information in the "localStorage"
function saveDataSchedule() {
    localStorage.setItem("workdaySchedule", JSON.stringify(workdaySchedule));
}

// This will show the information
function showDataSchedule() {
    workdaySchedule.forEach(function (hour) {
        $("#" + hour.id).val(hour.scheduleData)
    })
}

// This function will process all the information
function loadDataSchedule() {
    var dataLoad = JSON.parse(localStorage.getItem("workdaySchedule"));

    if (dataLoad) {
        workdaySchedule = dataLoad;
    }

    saveDataSchedule()
    showDataSchedule()
}

workdaySchedule.forEach(function(hour){

    var timeRow = $("<form>")
    .addClass("row");

    $(".container").append(timeRow);

    var timeField = $("<div>")
    .addClass("col-md-2 hour")
    .text(hour.showHour + hour.dayTimer);

    var hourInsert = $("<div>")
    .addClass("col-md-9 description p-0")
    var hourData = $("<textarea>");
    hourData.attr("id", hour.id);

    if (hour.time == moment().format("HH")) {
        hourData.addClass("present")
    } else if (hour.time < moment().format("HH")) {
        hourData.addClass("past")
    } else if (hour.time > moment().format("HH")) {
        hourData.addClass("future")
    }

    hourInsert.append(hourData);

    // This is the save button
    var saveIcon = $("<i class='far fa-save fa-lg'></i>")
    var saveEnd = $("<button>")
    .addClass("col-md-1 saveBtn");

    saveEnd.append(saveIcon);
    timeRow.append(timeField, hourInsert, saveEnd)
})

$(".saveBtn").on("click", function(event) {
    event.preventDefault();

    var saveData = $(this).siblings(".description").children().attr("id");
    workdaySchedule[saveData].scheduleData = $(this).siblings(".description").children().val();
    saveDataSchedule();
    showDataSchedule();
})

// This retrieves the date at its most current moment
getCurrentDate()
loadDataSchedule()