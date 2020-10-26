// SELECT DATE DOCUMENTS
let day = document.querySelector("#day")
let dates = document.querySelector("#date")
let month = document.querySelector("#month");
let year = document.querySelector("#year");
let gtm = document.querySelector(".gtm");
let tZone = document.querySelector(".tZone");


// GET MONTHS FUNCTIONS

var today = new Date();
var cDay = today.getDay();
var cMonth = today.getMonth();
var cYear = today.getFullYear();
var cDate = today.getDate();
var gmt = Intl.DateTimeFormat().resolvedOptions().timeZone;
var t_zone = today.toString().split("(").pop().slice(0, -1);

function getMonthNames(monthnumber) {    
    let monthName = ["January","February","March","April","May","Jun","July","Aguest","Septembar","October","November","December"]

    // CONDITION 

    cDate = cDate < 10 ? "0" + cDate : cDate;
    cMonth = cMonth < 10 ? "0" + cMonth : cMonth;

    return monthName[monthnumber];    
}
    gtm.innerHTML = gmt;
    tZone.innerHTML = "(" + t_zone + ")";
    dates.innerHTML = cDate;
    month.innerHTML = getMonthNames(cMonth);
    year.innerHTML = cYear;

// GET DAY FUNCTIONS

function getDayNames(dayNumbers) {
    let dayName = ["Sunday","Monday","Tuesday","WednesDay","Thursday","Friday","Saturday"];

    return dayName[dayNumbers]
}
day.innerHTML = getDayNames(cDay);

// SELECT TIME DOCUMENTS

let hours = document.querySelector("#hour");
let minutes = document.querySelector("#min");
let seconds = document.querySelector("#sec");
let aP = document.querySelector("#aP");

 // GET TIME FUNCTIONS

function time(){
    let d = new Date();
    let cHour = d.getHours();
    let cMin = d.getMinutes();
    let cSec = d.getSeconds();
    let session = "AM";
    if (cHour == 0) {
        cHour = 12
    }
    if (cHour > 12) {
        cHour = cHour - 12;
        session = "PM";
    }
    cHour = cHour < 10 ? "0" + cHour : cHour;
    cMin = cMin < 10 ? "0" + cMin : cMin;
    cSec = cSec < 10 ? "0" + cSec : cSec;
    

    hours.innerHTML = cHour;
    minutes.innerHTML = cMin;
    seconds.innerHTML = cSec;
    aP.innerHTML = session;
    
}
setInterval(() => {
    time();
}, 1000);





    

