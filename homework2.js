let yearsInput = prompt("Введіть кількість років:");
let years = Number(yearsInput);

if (!isNaN(years) && years >= 0) //перевірка на коректне значення
{
    let yearsString;
    if (years % 10 === 1 && years % 100 !== 11) //перевірка що число закінчується на 1, але не на 11
    {
        yearsString = years + " рік";
    } 
    else if ((years % 10 >= 2 && years % 10 <= 4) && (years % 100 < 10 || years % 100 >= 20)) //перевірка що число закінчується на 2, 3, 4, але не закінчується на 12, 13, 14
    {
        yearsString = years + " роки";
    } 
    else    //виконується блок, який просто повертає слово "років".
    {
        yearsString = years + " років";
    }
    console.log(yearsString);
} 
else 
{
    console.log("Введено некоректне число років.");
}