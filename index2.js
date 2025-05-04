/*

Задание 2

Создайте метод, который принимает массив стрингов и еще один параметр типа стринг prefix.
Метод должен вернуть новый массив, в котором будут храниться слова из исходного массива, слева к которым присоединен префикс.

Исходный массив должен остаться неизменным.

Пример: ["apple", "orange"] с префиксом "pine" ----> ["pineapple", "pineorange"]
*/

function arrPlusStr(words, prefix){
    return words.map(word => prefix + word);
}

const arrOldPlusStr = ["apple", "orange"];
const prefix = "pine";
const newArr = arrPlusStr(arrOldPlusStr, prefix);
console.log(newArr);