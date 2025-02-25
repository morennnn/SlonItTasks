/* Задание 13. Подготовьте простой калькулятор simpleCalculate, который будет выполнять нужную операцию из четырех стандартных: +-. Без использования операторов ветвления (if/else). 
Ваш вызов будет выглядеть примерно так: const selectedOperation = "multiply"; console.log(calculate(6, 3, operations[selectedOperation])); */

const operations = {
    add: (a, b) => a + b,
    subtraction: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b
};

const simpleCalculate = function (a, b, operation) {
    return operation (a, b);
};

const additionOperation = "add";
console.log(simpleCalculate(9, 3, operations[additionOperation]));

const subtractionOperation = "subtraction";
console.log(simpleCalculate(9, 3, operations[subtractionOperation]));

const multiplicationOperation = "multiply";
console.log(simpleCalculate(9, 3, operations[multiplicationOperation]));

const divisionOperation= "divide";
console.log(simpleCalculate(9, 3, operations[divisionOperation]));