$(document).ready(function () {
// Current Day/Date
// var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
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
// Time Block For Loops
$(".time-block").each(function () {
    var blockTime = parseInt($(this).attr("id").split("hour")[1]);
    console.log( blockTime, currentTime )

    if (blockTime < currentTime) {
        $(this).addClass("past");
        $(this).removeClass("future");
        $(this).removeClass("present");
    }

    else if (blockTime === currentTime) {
        $(this).removeClass("past");
        $(this).addClass("present");
        $(this).removeClas("future");
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
$("#hour12 .descriptiontext").val(localStorage.getItem("hour12"));
$("#hour1 .description").val(localStorage.getItem("hour1"));
$("#hour2 .description").val(localStorage.getItem("hour2"));
$("#hour3 .description").val(localStorage.getItem("hour3"));
$("#hour4 .description").val(localStorage.getItem("hour4"));
$("#hour5 .description").val(localStorage.getItem("hour5"));

timeTrack();
})