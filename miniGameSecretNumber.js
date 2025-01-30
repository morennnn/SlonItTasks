// Задание 6. Мини-игра: Секретное число (Компьютеры играют друг с другом)

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function binarySearchHiddenNumber(target, initialMin, initialMax) {
    let min = initialMin;
    let max = initialMax;
    let guess;

    while (min <= max) {

        guess= Math.floor((min + max) / 2);
        console.log (`Компьютер 2: Пробую число ${guess}.`)

        if (guess === target) {
            console.log(`Компьютер 1: Угадал!`);
            break;
        }else if (guess < target){
            console.log(`Компьютер 1: Больше.`);
            min = guess + 1;
        }
        else {
            console.log(`Компьютер 1: Меньше.`);
            max = guess - 1;
        }
    }
}

const minValue = 1; 
const maxValue = 100; 
const randomHiddenNumber = generateRandomNumber(minValue, maxValue);
console.log(`Компьютер 1 загадал число: ${randomHiddenNumber}.`);

binarySearchHiddenNumber(randomHiddenNumber, minValue, maxValue);