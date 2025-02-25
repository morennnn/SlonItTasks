/* Задание 15

Логгер:
1. Напишите функцию createLogger(), которая должна возвращать объект с методами:
log(message): сохраняет сообщение в массив.
getLogs(): выводит все сохраненные сообщения.
2. Массив с сообщениями должен быть доступен только внутри замыкания. Посторонние функции не должны иметь прямого доступа к этому массиву.*/

function createLogger() {
    const logs = [];

    return {
        log(message) {
            logs.push(message);
        },
        getLogs() {
            return logs;
        }
    };
}

const logger = createLogger();
logger.log('Первое сообщение');
logger.log('Второе сообщение');

console.log(logger.getLogs());

/* Генератор случайных чисел из диапазона
Напишите функцию `createRandomGenerator(min, max), которая возвращает новую функцию.
Каждое время, когда возвращенная функция вызывается, она должна генерировать случайное число в пределах от min до max.
Значения min и max должны сохраняться внутри замыкания, и быть недоступными извне.*/

function createRandomGenerator(min, max) {
    return function() {
        
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
}

const randomGenerator = createRandomGenerator(1, 10);

console.log(randomGenerator());
console.log(randomGenerator()); 
