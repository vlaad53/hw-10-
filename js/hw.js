console.log("1. Завдання (Callback) + Стрілкові");

const numbers = [5, 12, 8, 21, 3, 9];

const handleArray = (arr, callback) => callback(arr);

// через звичайні функції //
function getSum(arr) {
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        res += arr[i];
    }
    return res;
}

function getMin(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

function getMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log("Сума:", handleArray(numbers, getSum));
console.log("Мінімум:", handleArray(numbers, getMin));
console.log("Максимум:", handleArray(numbers, getMax));

// через стрілкові //
const sumArrow = arr => arr.reduce((acc, num) => acc + num, 0);
const minArrow = arr => Math.min(...arr);
const maxArrow = arr => Math.max(...arr);

console.log("Сума (стрілкова):", handleArray(numbers, sumArrow));
console.log("Мін (стрілкова):", handleArray(numbers, minArrow));
console.log("Макс (стрілкова):", handleArray(numbers, maxArrow));

//////////////////////////////

console.log("2. Завдання (Callback) + Стрілкові");

const calculate = (x, y, action) => action(x, y);

// звичайні функції //
function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

console.log("Додавання:", calculate(20, 4, add));
console.log("Віднімання:", calculate(20, 4, subtract));
console.log("Множення:", calculate(20, 4, multiply));
console.log("Ділення:", calculate(20, 4, divide));

// cтрілкові //
console.log("Додавання (стрілкова):", calculate(15, 3, (x, y) => x + y));
console.log("Віднімання (стрілкова):", calculate(15, 3, (x, y) => x - y));
console.log("Множення (стрілкова):", calculate(15, 3, (x, y) => x * y));
console.log("Ділення (стрілкова):", calculate(15, 3, (x, y) => x / y));