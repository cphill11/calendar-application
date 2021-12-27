// get the id established for current date and time
var currentDate = document.getElementById("currentDate");
// moment.js used; currentDate displays current date and time at top of scheduler
currentDate.textContent = moment().format('MMMM Do YYYY, h:mm:ss a');
// schedule row color functionality
function colorChange() {
    var hour = moment().hour();

    // for each with time-block class, run this function
    $(".time-block").each(function() {
        // variable rowHour turns the array string into number, split removes row from # array

        var rowHour = parseInt($(this).attr("id").split("-")[1]);

        // if / else evaluates rowHour and applies color based on past, present, or future class

        if (rowHour < hour) {
            $(this).addClass("past");

        } else if (rowHour === hour) {
            $(this).addClass("present");
            $(this).removeClass("past");
            $(this).removeClass("future");
        } else {
            $(this).addClass("future");
            $(this).removeClass("past");
            $(this).removeClass("present");
        }
    });
};
colorChange();

// saves the key / value to localStorage 
$(".saveBtn").on("click", function() {
    var saveKey = $(this).parent().attr("id");
    var saveValue = $(this).siblings(".description").val();
    // saves items to storage
    localStorage.setItem(saveKey, saveValue);
});
// pull row info from localStorage and displays it in the description
$("#row-9 .description").val(localStorage.getItem("row-9"));
$("#row-10 .description").val(localStorage.getItem("row-10"));
$("#row-11 .description").val(localStorage.getItem("row-11"));
$("#row-12 .description").val(localStorage.getItem("row-12"));
$("#row-13 .description").val(localStorage.getItem("row-13"));
$("#row-14 .description").val(localStorage.getItem("row-14"));
$("#row-15 .description").val(localStorage.getItem("row-15"));
$("#row-16 .description").val(localStorage.getItem("row-16"));
$("#row-17 .description").val(localStorage.getItem("row-17"));