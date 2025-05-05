/*

Задание 2
Создайте объект дуб oak с полем высота height и полем год year и методом расти grow.
Пусть изначальная высота дуба будет 140 см, а год будет 2025.
При вызове метода grow пусть дуб растет на 30 сантиметров, а год меняется на следующий.

Запустите цикл и покажите, как дуб будет расти на протяжении 20 лет.

*/

const oak = {
  height: 140,
  year: 2025,
  grow() {
    this.height += 30;
    this.year++;
  }
};

/*

Metod: WHILE:

let growOak = 20;
while(growOak > 0){
oak.grow()
console.log(`Year: ${oak.year}, growOak: ${oak.height}`);
growOak--;
};

*/

for (let i = 0; i < 20; i++) {
    oak.grow();
    console.log(`Год: ${oak.year}, Высота дуба: ${oak.height} см`);
}


