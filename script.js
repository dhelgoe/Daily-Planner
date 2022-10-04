var container = document.querySelector('.container')


for (var time = 9; time < 17; time++) {
    var row = document.createElement("div")
    row.classList.add("row")
    row.setAttribute("id", "hour-"+time);
    container.append(row)
    var hour = document.createElement("div")
    hour.setAttribute('class', 'hour col-1')
    hour.textContent = time
    row.append(hour)
    var textarea = document.createElement("textarea")
    textarea.setAttribute('class', 'col-10 description')
    row.append(textarea)
    var save = document.createElement("button")
    save.setAttribute('class', 'col-1 saveBtn')
    save.textContent = 'Save Button'
    row.append(save)
}

var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));


function timeTracker() {
    var timeNow = moment().hour();

    $(".row").each(function () {
        var blockTime = parseInt($(this).attr("id").split("-")[1]);

        if (blockTime < timeNow) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
        else if (blockTime === timeNow) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");

        }
    })
}

timeTracker();

// You need to get the current hour of the user's local time
// If current time is > timebllock time then it should greeen future
//If its == to each other then its red or present
//if current time is less than time block time then its past --grey

//
$('.description').val(localStorage.getItem('hour'))

$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, text);
    })
})