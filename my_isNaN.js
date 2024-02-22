function my_isNaN(value) {
    // Перевірка чи value не є числом
    return typeof value !== 'number' || value !== value;
}

// Приклади використання:
console.log(my_isNaN(42));        // false
console.log(my_isNaN('hello'));   // true
console.log(my_isNaN(42.0));    // false
console.log(my_isNaN([]));        // true
