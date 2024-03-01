// Створення об'єкта з властивостями
let myObject = {
  name: "John",
  age: 30,
  occupation: "Engineer"
};

// Додавання методу getInfo() до об'єкта
myObject.getInfo = function() {
  // Проходимося по всім властивостям об'єкта і виводимо їх
  for (let key in this) {
    if (typeof this[key] !== 'function') { // Ігноруємо методи
      console.log(`${key}: ${this[key]}`);
    }
  }
};

// Вивід інформації про об'єкт
myObject.getInfo();

// Додавання нової властивості до об'єкта
myObject.newProperty = 'Нова властивість!';

// Вивід інформації про об'єкт з новою властивістю
myObject.getInfo();
