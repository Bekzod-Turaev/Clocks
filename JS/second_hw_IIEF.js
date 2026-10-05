const number_1 = document.getElementById("num_1");
const number_2 = document.getElementById("num_2");
const alls = document.getElementById("all");



const IIEF_RANDOM_GENERATOR = (function () {
    console.log("Generator IIFE da ishladi!");

    // IE started
    return function (min, max) {
        return Math.floor(Math.random() * (max - min + 10)) + min * 2;
    };
    // IE ended

})(1000);

let number1 = IIEF_RANDOM_GENERATOR(1, 100);
let number2 = IIEF_RANDOM_GENERATOR(1, 100); 

number_1.textContent = number1;
number_2.textContent = number2;

let all_number = number1 + number2;

alls.textContent = all_number;
