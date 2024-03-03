const company = {
    name: 'Велика Компанія',
    type: 'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                {
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 1.2.3',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                        }
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        }
    ]
};
/*
Ця функція findValueByKey перевіряє, чи відповідає ім'я компанії параметру companyName. 
Якщо так, вона повертає відповідний об'єкт компанії. Якщо ні, вона рекурсивно викликає саму себе для кожного клієнта у clients. 
Якщо жоден клієнт не має відповідного імені, функція повертає null.
*/
function findValueByKey(companyName, company) {
    if (company.name === companyName) {
        return company;
    } else if (company.clients) {
        for (let i = 0; i < company.clients.length; i++) {
            const found = findValueByKey(companyName, company.clients[i]);
            if (found) return found;
        }
    }
    return null;
}

const companyName = 'Клієнт 1.2.3';
const result = findValueByKey(companyName, company);
if (result) {
    console.log(`Знайдено компанію з іменем ${companyName}:`, result);
} else {
    console.log(`Компанію з іменем ${companyName} не знайдено.`);
}
