function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkProbabilityTheory(count) {
    let evenCount = 0;
    let oddCount = 0;

    for (let i = 0; i < count; i++) {
        const randomNumber = getRandomNumber(100, 1000);
        if (randomNumber % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }

    const totalCount = evenCount + oddCount;
    const evenPercentage = (evenCount / totalCount) * 100;
    const oddPercentage = (oddCount / totalCount) * 100;

    console.log("Кількість згенерованих чисел:", totalCount);
    console.log("Парних чисел:", evenCount);
    console.log("Не парних чисел:", oddCount);
    console.log("Відсоток парних до не парних:", evenPercentage.toFixed(2) + "% : " + oddPercentage.toFixed(2) + "%");
}

// Приклад використання:
checkProbabilityTheory(1000);