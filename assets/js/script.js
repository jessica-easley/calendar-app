// Current Day/Date
// var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
$(document).ready(function () {
    // saveBtn click listener 
    $(".saveBtn").on("click", function () {
        // Get nearby values of the description in JQuery
        var text = $(this).siblings(".text").val();
        var time = $(this).parent().attr("id");
        // console.log(this);
        // Save text in local storage
        localStorage.setItem(time, text);
    })
// Time Section
function timeTrack() {
 var currentTime = moment().hour();
// Time Block Loops
$(".time-block").each(function () {
    var blockTime = parseInt($(this).attr("id").split("hour")[1]);
    console.log( blockTime, currentTime )

    if (blockTime < currentTime) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
    }

    else if (blockTime === currentTime) {
        $(this).removeClass("past");
        $(this).removeClas("future");
        $(this).addClass("present");
    }

    else {
        $(this).removeClass("present");
        $(this).removeClas("past");
        $(this).addClass("future");
    }
})
}
// Retrieve data back from local storage
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));

timeTrack();
})