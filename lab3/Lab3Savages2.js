// Инициализация переменных
let pot = 0; // Изначально кастрюля пуста
let available = true; // Флаг, указывающий, что кастрюля готова для употребления
let currentConsumer = 0; // Текущий дикарь

// Функция для приготовления еды
function cook() {
    return new Promise(resolve => {
        console.log("Повар готовит еду...");
        setTimeout(() => {
            if (pot < 5) {
                pot++;
                console.log("Повар добавил порцию в кастрюлю");
            }
            available = true;
            console.log(`В кастрюле ${pot} порций`);
            resolve();
        }, 2000);
    });
}

// Функция для еды дикарей
function consume() {
    return new Promise(resolve => {
        if (pot > 0) {
            pot--;
            console.log(`Дикарь ${currentConsumer} ест. Осталось в кастрюле: ${pot} порций`);
        } else {
            console.log(`Кастрюля пуста. Дикарь ${currentConsumer} ждет.`);
            available = false;
        }
        currentConsumer = (currentConsumer + 1) % 8; // Предполагаем, что есть 8 дикарей
        setTimeout(resolve, 1000);
    });
}

// Симуляция работы дикарей и повара
async function simulation() {
    while (true) {
        if (!available) {
            await cook();
        }
        await consume();
    }
}

simulation();
