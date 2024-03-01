var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",
    "Розбити скло": "200 грн" // Додано нову послугу
  };
  
  // Метод для обчислення загальної вартості послуг
  services.price = function() {
    let total = 0;
    for (let key in this) {
      if (typeof this[key] === 'string') { // Ігноруємо методи та інші нечислові значення
        total += parseInt(this[key]); // Перетворюємо рядок у числове значення та додаємо до загальної суми
      }
    }
    return total + " грн";
  };
  
  // Метод для знаходження мінімальної вартості послуг
  services.minPrice = function() {
    let min = Infinity;
    for (let key in this) {
      if (typeof this[key] === 'string') { // Ігноруємо методи та інші нечислові1 значення
        let price = parseInt(this[key]);
        if (price < min) {
          min = price;
        }
      }
    }
    return min + " грн";
  };
  
  // Метод для знаходження максимальної вартості послуг
  services.maxPrice = function() {
    let max = -Infinity;
    for (let key in this) {
      if (typeof this[key] === 'string') { // Ігноруємо методи та інші нечислові значення
        let price = parseInt(this[key]);
        if (price > max) {
          max = price;
        }
      }
    }
    return max + " грн";
  };
  
  // Приклад виклику методів
  console.log("Загальна вартість послуг: ", services.price());
  console.log("Мінімальна вартість послуг: ", services.minPrice());
  console.log("Максимальна вартість послуг: ", services.maxPrice());
  