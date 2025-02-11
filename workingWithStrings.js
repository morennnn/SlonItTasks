//Задание 11
/* Самое простое - это иногда мы исправляем за пользователем его ввод данных и хотим, чтобы наша строка начиналась с большой буквы, 
независимо от того, что ввел пользователь. Необходимо реализовать такую функцию.*/

function uppercaseFirstCharacter(str) {
    if (str.length === 0) {
        return str;
    }
    return str[0].toUpperCase() + str.slice(1);
}

const userMessage = "привет";
console.log(uppercaseFirstCharacter(userMessage));

/* Часто в интерфейсах программ мы видим какую-то длинную строку, которая не помещается и обрезана через троеточие.
Давайте напишем аналогичный метод.
На вход получаем длинную или не очень строку и размер ограничения (например, то что у нас влезает 40 символов).
На выходе возвращает, по необходимости укороченную строку, в конце которой стоит троеточие.
Усложняем задание тем, что строка не должна обрезаться посредине слова. Обрезаем строку по пробелу или по символу знака препинания (,.!?:;)/
*/

function lineLengthLimit(string, limit = 40) {
    if (string.length === 0 || string.length <= limit) {
        return string;
    };

    const truncatedString = string.slice(0, limit);

    const lastSpaceIndex = Math.max(
        truncatedString.lastIndexOf(' '),
        truncatedString.lastIndexOf(','),
        truncatedString.lastIndexOf('.'),
        truncatedString.lastIndexOf('!'),
        truncatedString.lastIndexOf('?'),
        truncatedString.lastIndexOf(':'),
        truncatedString.lastIndexOf(';')
    );

    if (lastSpaceIndex === -1) {
        return truncatedString + '...';
    }

    return truncatedString.slice(0, lastSpaceIndex) + '...';
}

const longString = "это очень длинная строка, которая превышает максимальную длину.";
console.log(lineLengthLimit(longString));

/* Небольшое практическое задание по работе с подстроками.
Функция на вход получает 2 строки, а на выходе возвращает true/false в зависимости от того, является хотя бы одна из строк 
(не важно какая) подстрокой другой строки. Если да, то возвращается true. В противном случае - false.*/

function substringSearch(str1, str2) {
    if (str1.includes(str2) || str2.includes(str1)) {
        return true;
    } else {
        return false;
    }
}

console.log(substringSearch("hello", "ell"));
console.log(substringSearch("hello", "cat"));
console.log(substringSearch("ell", "hello"));