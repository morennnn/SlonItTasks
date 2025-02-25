/* Задагие 14. Реализуйте функцию "myFilter", которая будет работать аналогично встроенному методу массива "filter". 
Ваша функция должна принимать два аргумента:
Массив, который нужно отфильтровать.
Колбэк-функцию, которая определяет условие фильтрации. Эта функция должна вызываться для каждого элемента массива и возвращать "true", если элемент должен остаться в результирующем массиве, или "false", если нет.*/

function myFilter(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) { 
        if (callback(array[i], i, array)) { 
            result.push(array[i]); 
        }
    }
    return result;
}

const numbers = [15, 22, 31, 14, 65];

const greaterThanTwenty = myFilter(numbers, (num) => num > 20);
console.log(greaterThanTwenty); 
