/*

Задание 3 дополнительное!
Попробуйте соxранить метод grow во внешнем от объекта контеkсте и вызвать его с другими растениями при помощи bind или apply.

*/

function grow() {
    this.height += 30; // Увеличиваем высоту на 30 см
    this.year++; // Увеличиваем год
}

const oak = {
    height: 140,
    year: 2025
};

const pine = {
    height: 100,
    year: 2025
};

// Используем bind для привязки метода к объекту дуба
const oakGrow = grow.bind(oak);
oakGrow();
console.log(`Дуб -> Год: ${oak.year}, Высота: ${oak.height} см`);

// Используем apply для вызова метода для сосны
grow.apply(pine);
console.log(`Сосна -> Год: ${pine.year}, Высота: ${pine.height} см`);
