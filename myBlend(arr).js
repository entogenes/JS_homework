function myBlend(arr) {
    var currentIndex = arr.length, temporaryValue, randomIndex;

    // Поки ще є елементи для перемішування
    while (0 !== currentIndex) {

        // Вибрати елемент, який залишився
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // Поміняти його з поточним елементом
        temporaryValue = arr[currentIndex];
        arr[currentIndex] = arr[randomIndex];
        arr[randomIndex] = temporaryValue;
    }

    return arr;
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("Перед перемішуванням:", arr);
myBlend(arr);
console.log("Після перемішування:", arr);