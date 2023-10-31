// Инициализация переменных
let pot = 5; // Изначальное количество порций
let available = true; // Флагготова или нет
let currentConsumer = 0; // Текущий дикарь

// Функция для приготовления еды
function cook() {
    return new Promise(resolve => {
        console.log("Повар готовит еду...");
        //  задержка 2 сек для иммитации
        setTimeout(() => {
            pot = 5; // наполняется до изначального значения
            available = true; // флаг доступности 
            console.log("Кастрюля наполнена");
            resolve(); // Promise разрешается после приготовления еды
        }, 2000);
    });
}


// Функция для еды дикарей
function consume() {
    return new Promise(resolve => {
        if (pot > 0) {
            pot--; // Уменьшаем количество порций в кастрюле
            console.log(`Дикарь ${currentConsumer} ест. Осталось в кастрюле: ${pot} порций`);
        } else {
            console.log(`Кастрюля пуста. Дикарь ${currentConsumer} ждет.`);
            available = false; // Устанавливаем флаг доступности кастрюли в false, если она пуста
        }
        currentConsumer = (currentConsumer + 1) % 8; // Предполагаем, что есть 8 дикарей, таким образом, обеспечиваем цикличность
        // Имитация времени поедания с задержкой в 1 секунду
        setTimeout(resolve, 1000);
    });
}

// Симуляция работы дикарей и повара
async function simulation() {
    while (true) {
        // Если кастрюля пуста, вызываем функцию cook для ее наполнения
        if (!available) {
            await cook();
        }
        // Вызываем функцию consume для еды дикарей
        await consume();
    }
}

// Запуск симуляции
simulation();
