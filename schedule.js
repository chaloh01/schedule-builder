var currentDayEl = document.querySelector("#currentDay");
 var textareaEl = document.querySelectorAll(".description");
 var saveTask = document.querySelectorAll(".saveBtn");

 



 
 var currentTime = moment().format();
 console.log(currentTime);


 var todaysDate = $("#currentDay");
 todaysDate.text(moment().format());
 


 
 var loadSchedule = function() {
 }


var currentDayEl = document.querySelector("#currentDay");
var saveTask = document.querySelectorAll(".saveBtn");
var textareaEl = document.querySelectorAll(".description");
var eachHour = document.querySelector(".hour");
var eachHour = [7, 8, 9, 10, 11, 12, 1, 2, 3, 4];



var rightNow = moment().format("MMMM Do, YYYY - hh:mm:ss a");
console.log(rightNow);

var currentDate = $("#currentDay");
currentDate.text(moment().format("dddd MMMM Do" + ", " + "YYYY" + " " + "hh:mm a"));


var loadSchedule = function() {
    dailyTasks = JSON.parse(localStorage.getItem("dailyTasks"));
};

var scheduleSave = function() {
    console.log("click")
    console.log(this);
};

for (var i = 0; i < saveTask.length;  i++) {
    saveTask[i].addEventListener("click", saveSchedule);
}

var auditTime = function() {
    var currentHour = moment().hour();
    console.log(currentHour);
    for (var i = 0; i < textareaEl.length; i++) {
        console.log(textareaEl[i].id);

        if (textareaEl[i].id < currentHour) {
            textareaEl[i].classList.add("past");

        } else if (textareaEl[i].id > currentHour) {
            textareaEl[i].classList.add("future");
        } else {
            textareaEl[i].classList.add("present");
        } 
    }
};
