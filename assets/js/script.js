//defines the save button from the container in HTML
var saveBtn = $(".saveBtn");
//pulls from moment i decided to add the hour minute and seconds that wasnt in the preview 
$("#currentDay").text(moment().format('dddd MMMM Do YYYY, h:mm:ss a'));

function timeBlockColor() {
    var hour = moment().hours();

    $(".time-block").each(function() {
        var currHour = parseInt($(this).attr("id"));

//this applies the three different colors depending on the current  hour  
    if (currHour > hour) {
    $(this).addClass("future");
     } 
     else if (currHour === hour) {
     $(this).addClass("present");
    } 
    else {
      $(this).addClass("past");
    }
})
};


saveBtn.on("click", function() {

  
var time = $(this).siblings(".hour").text();
var plan = $(this).siblings(".plan").val();

    //this sets the comments put in the planner into local storage 
localStorage.setItem(time, plan);
});


function usePlanner() {

$(".hour").each(function() {
var currHour = $(this).text();
//this pulls the saved comments that we set earlier and applies them even if the page is refreshed or reloaded in a different tab 
var currPlan = localStorage.getItem(currHour);

       

if(currPlan !== null) {
$(this).siblings(".plan").val(currPlan);
}
});
}

timeBlockColor();
usePlanner();