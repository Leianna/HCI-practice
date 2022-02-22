
////source: https://www.youtube.com/watch?v=wY2dao1hJms&ab_channel=TylerPotts
//
//const date_picker = document.querySelector('.date-picker');
//const selected_date = document.querySelector('.selected-date');
//const dates = document.querySelector('.dates');
//const days = document.querySelector('.days');
//
////get the current date and time
//const date = new Date();
//date.setDate(1);
//
////a list for 12 months
//    const months = [
//        "JANUARY",
//        "FEBRUARY",
//        "MARCH",
//        "APRIL",
//        "MAY",
//        "JUNE",
//        "JULY",
//        "AUGUST",
//        "SEPTEMBER",
//        "OCTOBER",
//        "NOVEMBER",
//        "DECEMBER",
//    ];
//
//let day = date.getDate();
//let month = date.getMonth();
//let year = date.getFullYear();
//
//let selectedDate = date;
//let selectedDay = day;
//let selectedMonth = month;
//let selectedYear = year;
//
//document.querySelector('.mth').textContent = months[month] + ' ' + year;
//
//selected_date.textContent = formatDate(date);
//selected_date.dataset.value = selectedDate;
//
//renderCalendar();
//
//// EVENT LISTENERS
//date_picker.addEventListener('click', toggleDatePicker);
//
//// FUNCTIONS
//function toggleDatePicker (e) {
//    if (!checkEventPathForClass(e.path, 'dates')) {
//        dates.classList.toggle('active');
//    }
//}
//
//
//
////function renderCalendar (e) {
////    days.innerHTML = '';
////    let amount_days = 31;
////
////    if (month == 1) {
////        amount_days = 28;
////    }
////
////    for (let i = 0; i < amount_days; i++) {
////        const day = document.createElement('div');
////        day.classList.add('day');
////        day.textContent = i + 1;
////
////        if (selectedDay == (i + 1) && selectedYear == year && selectedMonth == month) {
////            day.classList.add('selected');
////        }
////
////        day.addEventListener('click', function () {
////            selectedDate = new Date(year + '-' + (month + 1) + '-' + (i + 1));
////            selectedDay = (i + 1);
////            selectedMonth = month;
////            selectedYear = year;
////
////            selected_date.textContent = formatDate(selectedDate);
////            selected_date.dataset.value = selectedDate;
////
////            renderCalendar();
////        });
////
////        days.appendChild(day);
////    }
////}
//// Helper Functions
//function checkEventPathForClass (path, selector) {
//    for (let i = 0; i < path.length; i++) {
//        if (path[i].classList && path[i].classList.contains(selector)) {
//            return true;
//        }
//    }
//    return false;
//}
//
//function formatDate (d) {
//    let day = d.getDate();
//    if (day < 10) {
//        day = '0' + day;
//    }
//
//    let month = d.getMonth() + 1;
//    if (month < 10) {
//        month = '0' + month;
//    }
//    let year = d.getFullYear();
//    return day + ' / ' + month + ' / ' + year;
//}
//
////change months
//document.querySelector(".prev-mth").addEventListener("click", () => {
//    
//   month--;
//    if (month < 0) {
//        month = 11;
//        year--;
//    }
//    document.querySelector('.mth').textContent = months[month] + ' ' + year;
//    renderCalendar();
//});
//
//document.querySelector(".next-mth").addEventListener("click", () => {
//    month++;
//    if (month > 11) {
//        month = 0;
//        year++;
//    }
//    document.querySelector('.mth').textContent = months[month] + ' ' + year;
//    renderCalendar();
//});