;let day = parseInt(
  prompt("Please enter day."),
);

let mounth = parseInt(
  prompt("Okay, now enter the mount."),
);

let year = parseInt(
  prompt("Okay, now enter a year."),
);

let leapYear = false;

if ( year % 400 == 0 || (year % 4 == 0 && year % 100 != 0) ) {
  leapYear = true;
}

if ( day == 31 ) {
    day = 1;
    mounth = mounth + 1;
} else if ( mounth == 12 ) {
    day = 1;
    mounth = 1;
    year = year + 1; 
} else if ( (leapYear == false) && (mounth == 2 && day == 28) ) {
    mounth = mounth + 1;
    day = 1;
} else if ( (leapYear == true) && (mounth == 2 && day == 28) ) {
    day = day + 1;
} else if ( (leapYear == true) && (mounth == 2 && day == 29) ) {
    mounth = mounth + 1;
    day = 1;
} else {
    day = day + 1;
}

console.log(day, mounth, year);

