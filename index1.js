/*

Задание 1
Создайте метод, который принимает объект, а возврщает новый объект,
в котором ключи и значения поменялись местами.

{name: "Bob"} --> {"Bob": "name"}

(вам понабится поработать с Object.values, Object.keys )

*/

function swapKeysAndValues(obj) {
    return Object.fromEntries(Object.entries(obj).map(([key, value]) => [value, key]));
}

const original = { name: "Bob" };
const swapped = swapKeysAndValues(original);
console.log(original); // { name: "Bob" }
console.log(swapped); // { "Bob": "name" }