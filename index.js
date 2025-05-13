document
  .getElementById("animalForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const nickname = document.getElementById("nickname").value;
    const age = document.getElementById("age").value;
    const breed = document.getElementById("breed").value;

    if (nickname && age && breed) {
      const animalList = document.getElementById("animalList");
      const listItem = document.createElement("li");
      listItem.textContent = `Кличка: ${nickname}, Возраст: ${age}, Порода: ${breed}`;
      animalList.appendChild(listItem);

      // Очистка формы после добавления
      document.getElementById("animalForm").reset();
    }
  });
