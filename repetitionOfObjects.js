/* Задание 10. Написать метод, который на вход получает объект, а на выходе возвращает число, соответствующее сумме всех числовых полей.
Задача со звездочкой - то же самое. Но вместо просто числа с суммой полей метод возвращает массив с названиями полей, причем эти названия полей отсортированы по убыванию.
Например, для объекта {name: 'Vasya', friends: 5, likes: 19, projects: 7} вернется массив [likes, projects, friends].
Задание весьма искусственное, но крайне полезное для закрепления материала.*/

function sumNumericFields(obj) {
  if (obj === null || typeof obj !== "object") {
    return 0;
  }

  let sum = 0;
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];

      if (typeof value === "number") {
        sum += value;
      } else if (typeof value === "string" && !isNaN(Number(value))) {
        sum += Number(value);
      }
    }
  }

  return sum;
}

const myObject = {
  age: 26,
  salary: 50000.5,
  name: "Kate",
  isActive: true,
  count: 10,
  strNumber: "3",
};

const sum = sumNumericFields(myObject);
console.log(`Сумма числовых полей: ${sum}`);
