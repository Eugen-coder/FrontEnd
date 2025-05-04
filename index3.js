/*

Задание 3

Создайте функцию gardender, которая принимает в себя два параметра: операцию и предмет, на который эта операция будет направлена.
Создайте еще одну функцию поливать цветок, которая бы выводила в консоль "I water this " плюс название конкретного цветка.
Вызовите фунцкию gardender c параметрами: функция поливать цветок, 'rose'.
Попробуйте придумать функции для других операций и предметов, с которыми может работать садовник.

*/

function gardender(work, object){
    work(object);
}

function waterFlower(flower){
    console.log(`I water this ${flower}`);
}

function trimBush(bush){
    console.log(`I trim this ${bush}`);
}

gardender(waterFlower,`rose`);
gardender(trimBush,`tree`);
