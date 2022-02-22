//source from: https://www.youtube.com/watch?v=o1yMqPyYeAo


//get the current date and time
const date = new Date();

date.setDate(1);
//get .days class
const monthDays = document.querySelector(".days");



//change months
let date1 = new Date();
let day = date1.getDate();
let month = date1.getMonth();
let year = date1.getFullYear();


//a list for 12 months
const months = [
    "JANUARY",
    "FEBRUARY",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOBER",
    "NOVEMBER",
    "DECEMBER",
];

//get current month and current date from months list
document.querySelector(".mth h1").innerHTML = months[date.getMonth()]+" "+year;
document.querySelector(".mth p").innerHTML = "Today: "+(new Date().toDateString());

function renderCalendar (e){
    //display days
    let days = "";

    //give current year and month(days), month+1 so the days can go from 29 to 30
    const lastDay = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
    ).getDate();

     console.log(lastDay);
    //give previous year and month(days)
    const prevLastDay = new Date(
        date.getFullYear(),
        date.getMonth(),
        0
    ).getDate();

    //get the last date from previous month
    const lastDayIndex = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
    ).getDay();

    //firstDayIndex = first day of this month
    //previous day from last month that show in current page
    const firstDayIndex = date.getDay();
    for (let x = firstDayIndex; x > 0; x--) {
        days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
    }

    //print current month's day
    for (let i = 1; i <= lastDay; i++) {
        if (
            i === new Date().getDate() &&
            date.getMonth() === new Date().getMonth()
        ) {
            days += `<div class="today">${i}</div>`;
        } else {
            days += `<div>${i}</div>`;
        }
    }
    //initial last day is sunday, set last day to saturday
    const nextDays = 7 - lastDayIndex - 1;
    //print days from next month that show in current page
    for (let j = 1; j <= nextDays; j++) {
        days += `<div class="next-date">${j}</div>`;
        monthDays.innerHTML = days;
    }
};


//change months
document.querySelector(".prev-mth").addEventListener("click", () => {
    month--;
    if (month < 0) {
        month = 11;
        year--;
    }
    document.querySelector('.mth h1').textContent = months[month] + ' ' + year;
    date.setMonth(month);
    renderCalendar();
});

document.querySelector(".next-mth").addEventListener("click", () => {
    month++;
    if (month > 11) {
        month = 0;
        year++;
    }
    document.querySelector('.mth h1').textContent = months[month] + ' ' + year;
    date.setMonth(month);
    renderCalendar();
});

renderCalendar();
