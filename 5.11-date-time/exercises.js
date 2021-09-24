/* Exercise 1 */
let date1 = new Date(2012, 1, 20, 3, 12);

// alert( date1 );

/* Exercise 2 */
const getWeekDay = (date) => {
    let weekdays = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];

    return weekdays[date.getDay()];
};

// alert( getWeekDay(new Date(2012, 0, 3)) );

/* Exercise 3 */
const getEuWeekDay = (date) => {
    let weekdays = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"];

    return weekdays[date.getDay()];
};

// alert( getEuWeekDay(new Date(2012, 0, 3)) );

/* Exercise 4 */
const getDateAgo = (date, days) => {
    let dateCopy = new Date(date);

    dateCopy.setDate(date.getDate() - days);
    return dateCopy.getDate();
};

let date2 = new Date(2015, 0, 2);

// alert( getDateAgo(date2, 1) );
// alert( getDateAgo(date2, 2) );
// alert( getDateAgo(date2, 365) );

/* Exercise 5 */
const getLastDayOfMonth = (year, month) => {
    // pass "day" = 0 as in one day before the 1st of the month
    return new Date(year, month + 1, 0);
};

// alert( getLastDayOfMonth(2012, 1) );

/* Exercise 6 */
const getSecondsToday = () => {
    let now = new Date();

    // given only year, month, date parameters, new Date() sets time to 00:00:00
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    // difference is in microsecond -> divide by 1000 and round to seconds
    return Math.round((now - today) / 1000);
};

const getSecondsTodayAlt = () => {
    let now = new Date();

    // convert now's hours and minutes to seconds, and return sum
    return now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
}

// alert( getSecondsToday() );
// alert( getSecondsTodayAlt() );

/* Exercise 7 */
const getSecondsToTomorrow = () => {
    let now = new Date();

    // compute tomorrow by adding 1 more day; hh:mm:ss == 00:00:00 as default
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

    return Math.round((tomorrow - now) / 1000);
}

// alert( getSecondsToTomorrow() );

/* Exercise 8 */
const formatDate = (date) => {
    let now = new Date();

    let diff = now - date;

    if (diff < 1000) { // less than 1 second
        return "right now";
    }

    let sec = Math.round(diff / 1000);

    if (sec < 60) { // less than 1 minute
        return `${sec} sec. ago`;
    }

    let min = Math.round(sec / 60);

    if (min < 60) {
        return `${min} min. ago`;
    }

    let d = date;
    d = [
        "0" + d.getDate(),
        "0" + d.getMonth() + 1,
        "" + d.getFullYear(),
        "0" + d.getHours(),
        "0" + d.getMinutes()
    ].map(item => item.slice(-2)); // get last 2 digits of every item

    // join first three items with fullstop, while rest 2 with colon
    return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');


}

alert( formatDate(new Date(new Date - 1)) ); // right now
alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 sec. ago"
alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 min. ago"
// yesterday's date like 31.12.2016 20:00
alert( formatDate(new Date(new Date - 86400 * 1000)) );