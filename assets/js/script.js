// Current Day/Date
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

$(document).ready(function () {
    // saveBtn click listener 
    $(".saveBtn").on("click", function () {
        // Get nearby values of the description in JQuery
        var text = $(this).siblings(".text").val();
        var time = $(this).parent().attr("id");

        // Save text in local storage
        localStorage.setItem(time, text);
    })
// Time Section
function timeTrack() {
 var currentTime = moment().hour();
}
// Time Block For Loops
$(".time-block").each(function () {
    var blockTime = parseInt($(this).attr("id").split("hour")[1]);
    console.log( blockTime, currentTime)

    if (blockTime < currentTime) {
        $(this).addClass("past");
        $(this).removeClass("future");
        $(this).removeClass("present");
    }

    else if (blockTime === currentTime) {
        $(this).addClass("present");
        $(this).removeClass("past");
        $(this).removeClas("future");
    }

    else {
        $(this).addClass("future");
        $(this).removeClass("present");
        $(this).removeClas("past");
    }
})
// Retrieve data back from local storage
$("#9 .text").val(localStorage.getItem("9"));
$("#10 .text").val(localStorage.getItem("10"));
$("#11 .text").val(localStorage.getItem("11"));
$("#12 .text").val(localStorage.getItem("12"));
$("#1 .text").val(localStorage.getItem("1"));
$("#2 .text").val(localStorage.getItem("2"));
$("#3 .text").val(localStorage.getItem("3"));
$("#4 .text").val(localStorage.getItem("4"));
$("#5 .text").val(localStorage.getItem("5"));

timeTrack();
})