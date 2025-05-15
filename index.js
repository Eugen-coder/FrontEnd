/*
Задание 1 — Форматирование строки
Создайте функцию, которая принимает строку в формате вида "1333.132.123 00" — числа могут быть любыми, но структура такая же: три группы, разделённые точками и пробелом.

Цель: преобразовать строку к следующему формату: 📌 "1333 132:123-00"
*/

// Пример:

function formatString(input) {
    return input.replace(/(^\d+)\.(\d+)\.(\d+) (\d+)$/, "$1 $2:$3-$4");
}

const result = formatString("1333.132.123 00");
console.log(result); // "1333 132:123-00"       

//-------------------------------------------------------------//

/*
Задание 2 — Промис с рандомной ошибкой
Создайте Promise, который с одинаковой вероятностью (50/50):

либо возвращает строку "Best day of my life"
либо выбрасывает ошибку с сообщением "Something is off"
Затем обработайте результат с помощью .then() и .catch().
*/

function randomPromise() {
    return new Promise((resolve, reject) => {
        const isSuccess = Math.random() < 0.5; // 50/50 шанс
        if (isSuccess) {
            resolve("Best day of my life");
        } else {
            reject(new Error("Something is off"));
        }
    });
}

// Использование промиса с обработкой результата:
randomPromise()
    .then(result => console.log(result))
    .catch(error => console.error(error.message));

