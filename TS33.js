var DaysOfWeek;
(function (DaysOfWeek) {
    DaysOfWeek[DaysOfWeek["Sunday"] = 1] = "Sunday";
    DaysOfWeek[DaysOfWeek["Monday"] = 2] = "Monday";
    DaysOfWeek[DaysOfWeek["Tuesday"] = 3] = "Tuesday";
    DaysOfWeek[DaysOfWeek["Wednesday"] = 4] = "Wednesday";
    DaysOfWeek[DaysOfWeek["Thursday"] = 5] = "Thursday";
    DaysOfWeek[DaysOfWeek["Friday"] = 6] = "Friday";
    DaysOfWeek[DaysOfWeek["Saturday"] = 7] = "Saturday";
})(DaysOfWeek || (DaysOfWeek = {}));
console.log(DaysOfWeek.Sunday);
var Months;
(function (Months) {
    Months[Months["January"] = 1] = "January";
    Months[Months["February"] = 2] = "February";
    Months[Months["March"] = 3] = "March";
    Months[Months["April"] = 4] = "April";
    Months[Months["May"] = 5] = "May";
    Months[Months["June"] = 6] = "June";
    Months[Months["July"] = 7] = "July";
    Months[Months["August"] = 8] = "August";
    Months[Months["September"] = 9] = "September";
    Months[Months["October"] = 10] = "October";
    Months[Months["November"] = 11] = "November";
    Months[Months["December"] = 12] = "December";
})(Months || (Months = {}));
var month = prompt("Type from 1 to 12 to get the month: ");
console.log(Months[month]);
var Colors;
(function (Colors) {
    Colors["Red"] = "#FF0000";
    Colors["Green"] = "#00FF00";
    Colors["Blue"] = "#0000FF";
})(Colors || (Colors = {}));
var color = prompt("Type the color name from the list : ");
console.log(Colors[color]);
var planets;
(function (planets) {
    planets[planets["Mercury"] = 1] = "Mercury";
    planets[planets["Venus"] = 2] = "Venus";
    planets[planets["Earth"] = 3] = "Earth";
    planets[planets["Mars"] = 4] = "Mars";
    planets[planets["Jupiter"] = 5] = "Jupiter";
    planets[planets["Saturn"] = 6] = "Saturn";
    planets[planets["Uranus"] = 7] = "Uranus";
    planets[planets["Neptune"] = 8] = "Neptune";
})(planets || (planets = {}));
var planet = prompt("Name a planet and you will know its number: ");
console.log(planet, planets[planet]);
var fruits;
(function (fruits) {
    fruits[fruits["Apple"] = 1] = "Apple";
    fruits[fruits["Banana"] = 2] = "Banana";
    fruits[fruits["Orange"] = 3] = "Orange";
    fruits[fruits["Strawberry"] = 4] = "Strawberry";
    fruits[fruits["Pear"] = 5] = "Pear";
})(fruits || (fruits = {}));
var fruit = prompt("Name a fruit: ");
var result = false;
for (var i in fruits) {
    if (i == fruit) {
        result = true;
        console.log("This fruit is delicious");
    }
}
if (!result) {
    console.log("This fruit is not delicious");
}
