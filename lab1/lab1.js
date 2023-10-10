class Airline {
  constructor(destination, flightNumber, aircraftType, departureTime, weekdays) {
    this.destination = destination;
    this.flightNumber = flightNumber;
    this.aircraftType = aircraftType;
    this.departureTime = departureTime;
    this.weekdays = weekdays;
  }

  // Геттер для получения пункта назначения
  get destination() {
    return this._destination;
  }

  // Сеттер для установки пункта назначения
  set destination(destination) {
    this._destination = destination;
  }

  // Геттер для получения дня недели
  get weekdays() {
    return this._weekdays;
  }

  // Сеттер для установки дня недели
  set weekdays(weekdays) {
    this._weekdays = weekdays;
  }

  // Геттер для времени вылета
  get departureTime() {
    return this._departureTime;
  }

  // Сеттер для времени вылета
  set departureTime(departureTime) {
    this._departureTime = departureTime;
  }

  // Переопределение метода toString()
  toString() {
    return `Flight ${this.flightNumber} to ${this.destination}, Aircraft: ${this.aircraftType}, Departure: ${this.departureTime}, Weekdays: ${this.weekdays}`;
  }

  // Переопределение метода hashCode()
  hashCode() {
    return this.flightNumber.hashCode(); // Упрощенный вариант генерации хэша для уникальности объектов
  }
}

// Создаем массив объектов Airline
const airlines = [
  new Airline('New York', 'AA101', 'Boeing 747', '08:00', ['Monday', 'Wednesday', 'Friday']),
  new Airline('London', 'BA202', 'Airbus A320', '10:30', ['Tuesday', 'Thursday', 'Saturday']),
  new Airline('Paris', 'AF303', 'Boeing 777', '14:15', ['Monday', 'Wednesday', 'Friday']),
  new Airline('Tokyo', 'JL404', 'Boeing 787', '16:45', ['Tuesday', 'Thursday', 'Saturday']),
  new Airline('Sydney', 'QF505', 'Airbus A380', '19:30', ['Monday', 'Thursday', 'Sunday']),
  new Airline('Los Angeles', 'DL606', 'Airbus A350', '11:45', ['Tuesday', 'Thursday', 'Saturday']),
  new Airline('Dubai', 'EK707', 'Airbus A380', '22:00', ['Monday', 'Wednesday', 'Friday']),
  new Airline('Singapore', 'SQ808', 'Boeing 777', '07:30', ['Tuesday', 'Thursday', 'Saturday']),
  new Airline('Hong Kong', 'CX909', 'Boeing 747', '15:20', ['Monday', 'Wednesday', 'Sunday']),

];

// Функция для вывода списка рейсов для заданного пункта назначения
function getFlightsByDestination(destination) {
  return airlines.filter(airline => airline.destination === destination);
}

// Функция для вывода списка рейсов для заданного дня недели
function getFlightsByDayOfWeek(dayOfWeek) {
  return airlines.filter(airline => airline.weekdays.includes(dayOfWeek));
}

// Функция для вывода списка рейсов для заданного дня недели и времени вылета
function getFlightsByDayAndTime(dayOfWeek, departureTime) {
  return airlines.filter(airline => airline.weekdays.includes(dayOfWeek) && airline.departureTime < departureTime);
}

// Примеры использования
console.log("Flights to London:");
console.log(getFlightsByDestination("London"));

console.log("Flights on Tuesday:");
console.log(getFlightsByDayOfWeek("Tuesday"));

console.log("Flights on Tuesday after 09:00:");
console.log(getFlightsByDayAndTime("Tuesday", "09:00"));
