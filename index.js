/* 

Задание 1
Прочитайте теоретический материал в разделе "Теория".
Создайте метод validate, который принимает строку и возвращает true, если она соответствует следующему шаблону:
начинается с одной маленькой буквы латинского алфавита (a–z);
затем идёт число 19;
далее — две любые цифры (00–99);
строка должна **заканчиваться на "born"`.

*/

const validate = function(str){
    const condition = /^[a-z]19\d{2}born$/;
    return condition.test(str);       
}

console.log(validate("c1986born")); 
console.log(validate("b1988born")); 
console.log(validate("1986born")); 
console.log(validate("c1886born"));  
console.log(validate("c1986bor")); 

//-----------------------------------------------------------//

/*
Задание 2 : Замена слова в строке
🎯 Цель:
Научиться использовать string.replace() с регулярными выражениями и флагами g и i.
*/

const sentence = "JavaScript is great. I love javascript. JAVASCRIPT is everywhere!";
const newSentence = sentence.replace(/JavaScript/gi, "TypeScript");
console.log(newSentence);