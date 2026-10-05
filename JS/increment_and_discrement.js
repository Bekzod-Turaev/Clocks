const number_1 = document.getElementById("num_1");
const number_2 = document.getElementById("num_2");
const alls = document.getElementById("all");

let userNumber = +prompt("WRITE YOUR NUMBER AND WI increment AND decrement IT:", 0);

const increment_and_decrement = (function (function_start) {
  let count = function_start;

  return {
    increment: function () {
      count += 15;
      return count;
    },
    decrement: function () {
      count -= 25;
      return count;
    }
  };
})(userNumber);


let number1 = increment_and_decrement.increment();
let number2 = increment_and_decrement.decrement(); 

number_1.textContent = number1;
number_2.textContent = number2;

let all_number = number1 + number2;
alls.textContent = all_number;
