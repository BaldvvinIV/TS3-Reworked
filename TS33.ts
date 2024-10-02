enum DaysOfWeek {
    Sunday = 1, 
    Monday  = 2,
    Tuesday = 3,
    Wednesday = 4,
    Thursday = 5,
    Friday = 6,
    Saturday = 7,
}

console.log(DaysOfWeek.Sunday);

enum Months {
    "January" = 1,
    "February" = 2,
    "March" = 3,
    "April" = 4,
    "May" = 5,
    "June" = 6,
    "July" = 7,
    "August" = 8,
    "September" = 9,
    "October" = 10,
    "November" = 11,
    "December" = 12
}
let month = prompt("Type from 1 to 12 to get the month: ");

console.log(Months[month]);


enum Colors {
    Red = "#FF0000",
    Green = "#00FF00",
    Blue = "#0000FF"
}

let color = prompt("Type the color name from the list : ");

console.log(Colors[color]);

enum planets {
    Mercury = 1,
    Venus = 2,
    Earth = 3,
    Mars = 4,
    Jupiter = 5,
    Saturn = 6,
    Uranus = 7,
    Neptune = 8
}

let planet = prompt("Name a planet and you will know its number: ");
console.log(planet, planets[planet]);

enum fruits {
    Apple = 1,
    Banana = 2,
    Orange = 3,
    Strawberry = 4,
    Pear = 5
}

let fruit = prompt("Name a fruit: ");
let result = false;
for (let i in fruits) {
    if (i == fruit) {
        result = true;
        console.log("This fruit is delicious");
    }
}
if (!result) {
    console.log("This fruit is not delicious");
}
