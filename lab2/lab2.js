// базовый класс для кофе
class Coffee {
    constructor(name, weight, price) {
        this.name = name; // название
        this.weight = weight; // вес
        this.price = price; // цена
    }

    // метод для получения соотношения цены и веса
    getPricePerWeight() {
        return this.price / this.weight;
    }
}
// подклассы для каждого типа кофе, используя наследование
class GrainCoffee extends Coffee {
    constructor(name, weight, price, packing) {
        super(name, weight, price);
        this.packing = packing; // упаковка
    }
}

class GroundCoffee extends Coffee {
    constructor(name, weight, price, packing) {
        super(name, weight, price);
        this.packing = packing;
    }
}

class InstantCoffee extends Coffee {
    constructor(name, weight, price, packing) {
        super(name, weight, price);
        this.packing = packing;
    }
}
// класс для фургона кофе
class CoffeeVan {
    constructor(capacity) {
        this.capacity = capacity; // вместимость фургона
        this.coffeeItems = []; // массив для хранения кофе
    }

    // Метод для добавления кофе в фургон
    addCoffee(coffee) {
        this.coffeeItems.push(coffee);
    }

    // Метод для сортировки товаров на основе соотношения цены и веса
    sortCoffeeByPricePerWeight() {
        this.coffeeItems.sort((a, b) => a.getPricePerWeight() - b.getPricePerWeight());
    }

    // Метод для поиска товара по заданному диапазону параметров качества
    findCoffeeByQuality(minPrice, maxPrice) {
        return this.coffeeItems.filter(coffee => coffee.price >= minPrice && coffee.price <= maxPrice);
    }
}
// Создаем экземпляры классов
let coffeeVan = new CoffeeVan(150); // Создаем фургон с вместимостью 100

let grainCoffee1 = new GrainCoffee('Arabica', 10, 50, 'bags');
let grainCoffee2 = new GrainCoffee('Liberica', 20, 45, 'bags');
let grainCoffee3 = new GrainCoffee('Excelsa', 25, 61, 'bags');
let groundCoffee1 = new GroundCoffee('Robusta', 15, 30, 'jars');
let instantCoffee1 = new InstantCoffee('Blend', 5, 20, 'packets');

// Добавляем кофе в фургон
coffeeVan.addCoffee(grainCoffee1);
coffeeVan.addCoffee(grainCoffee2);
coffeeVan.addCoffee(grainCoffee3)
coffeeVan.addCoffee(groundCoffee1);
coffeeVan.addCoffee(instantCoffee1);

// Сортируем товары в фургоне по соотношению цены и веса
coffeeVan.sortCoffeeByPricePerWeight();

// Находим товары по заданному диапазону параметров качества
let selectedCoffee = coffeeVan.findCoffeeByQuality(20, 60);
console.log(selectedCoffee);
