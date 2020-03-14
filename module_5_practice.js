


// ===============  adding methods ============= //
// =============================================== //



// const Hotel = function(name, stars, capacity) {
//     this.name = name;
//     this.stars = stars;
//     this.capacity = capacity;
//     this.guestCount = 0;
//     this.greet = function(guestName) {
//     console.log(`Hello ${guestName}, welcome to ${this.name}`);
//     };
//     this.addGuests = function(amount) {
//     this.guestCount += amount;
//     };
//     this.removeGuests = function(amount) {
//     this.guestCount -= amount;
//     };
//    };
//    const hotel = new Hotel('Sunrise Hotel', 5, 1000);
//    console.log(hotel);
//    // Hotel {name: "Sunrise Hotel", greet: ƒ, addGuests: f, removeGuests: f}
//    hotel.greet('Danya'); // Hello Mango, wellcome to Sunrise Hotel
//    hotel.addGuests(500);
//    hotel.removeGuests(1);


// ===============  store management ============= //
// =============================================== //


// const mango = {
//     name: 'Mango',
//     sales: 5,
//     sell(product) {
//         this.sales += 1;
//         return `Manager ${this.name} sold ${product}.`;
//     },
// };
// console.log(mango.sales); // 5
// console.log(mango.sell('TV')); // Manager Mango sold TV
// console.log(mango.sell('Microwave')); // Manager Mango sold Microwave
// console.log(mango.sales); // 7
// const poly = {
//     name: 'Poly',
//     sales: 10,
//     sell(product) {
//         this.sales += 1;
//         return `Manager ${this.name} sold ${product}.`;
//     },
// };
// console.log(poly.sales); // 10
// console.log(poly.sell('TV')); // Manager Poly sold TV
// console.log(poly.sell('Microwave')); // Manager Poly sold Microwave
// console.log(poly.sales); // 12


// ===============  New function ================== //
// =============================================== //


// class Manager {
//     constructor(name = 'manager', sales = 0) {
//         this.name = name;
//         this.sales = sales;
//         this.sell = function (product) {
//             this.sales += 1;
//             return `Manager ${this.name} sold ${product}.`;
//         };
//     }
// }
// const mango = new Manager('Mango', 5);
// console.log(mango.sales); // 5
// console.log(mango.sell('TV')); // Manager Mango sold TV
// console.log(mango.sell('Microwave'));
// console.log(mango.sell('Fridge')); // Manager Mango sold Microwave
// console.log(mango.sales); // 7
// const poly = new Manager('Poly', 10);
// console.log(poly.sales); // 10
// console.log(poly.sell('CPU')); // Manager Poly sold TV
// console.log(poly.sell('GPU')); // Manager Poly sold Microwave
// console.log(poly.sell('RAM'));
// console.log(poly.sales); // 12



// ===============  Prototype  ==================== //
// =============================================== //


// const animal = {
//     eats: true
// };
// const dog = {
//     barks: true
// };
// dog.__proto__ = animal;
// // В dog можно найти оба свойства
// console.log(dog.barks); // true
// console.log(dog.eats); // true
// const animal = {
//     eats: true
// };
// const dog = {
//     barks: true,
//     eats: false
// };
// dog.__proto__ = animal;
// console.log(dog.barks); // true
// console.log(dog.eats); // false, свойство взято из dog
// const animal = {
//     eats: true
// };
// const dog = Object.create(animal);
// dog.barks = true;
// console.log(dog.barks); // true
// console.log(dog.eats); // true
// const Guest = function (name, room) {
//     this.name = name;
//     this.room = room;
// };
// const mango = new Guest('Mango', 28);
// console.log(mango);



// ===============  Function.prototype  ==================== //
// ========================================================= //


// const Guest = function (name, room) {
//     this.name = name;
//     this.room = room;
// };

// Guest.prototype.showGuestInfo = function () {
//     console.log(`name: ${this.name}, room: ${this.room}`);
// };

// const mango = new Guest('Mango', 28);
// const poly = new Guest('Poly', 36);

// mango.showGuestInfo(); // name: Mango, room: 28
// poly.showGuestInfo(); // name: Poly, room: 36



// ===============  Inheritance  ==================== //
// ================================================== //

// const Hero = function (name, xp) {
//     this.name = name;
//     this.xp = xp;
// };
// /*
//  * Теперь у нас есть конструктор базового класса героя,
//  * добавим в prototype какой-то метод.
//  */
// Hero.prototype.gainXp = function (amount) {
//     console.log(`${this.name} gained ${amount} experience points`);
//     this.xp += amount;
// };
// const mango = new Hero('Mango', 1000);
// console.log(mango); // Hero { name: 'Mango', xp: 1000 }
// // Так как mango это экземпляр Hero, то ему доступны методы из Hero.prototype
// mango.gainXp(500); // Mango gained 500 experience points
// console.log(mango); // Hero { name: 'Mango', xp: 1500 }





// const Warrior = function (name, xp, weapon, defend) {
//     /*
//      * Во время выполнения функции Warrior вызываем функцию Hero
//      * в контексте объекта создающегося в Warrior, а так же передаем
//      * аргументы для инициализации полей this.name и this.xp
//      *
//      * this это будущий экземпляр Warrior
//      */
//     Hero.call(this, name, xp);
//     // Тут добавляем новое свойство - оружие
//     this.weapon = weapon;
//     this.defend = defend;
// };

// /*
// * Используем Object.create() для того чтобы изначально записать
// * в Warrior.prototype пустой объект, в __proto__ которого будет
// * ссылка на Hero.prototype. Это необходимо сделать до того
// * как добавлять методы
// */
// Warrior.prototype = Object.create(Hero.prototype);
// // Не забываем добавить в Warrior.prototype свойство constructor
// Warrior.prototype.constructor = Warrior;


// Warrior.prototype.attackAndDefend = function () {
//     console.log(`${this.name} attacks with ${this.weapon} and defends with ${this.defend}`);
// };

// const poly = new Warrior('Poly', 200, 'sword','shield');
// console.log(poly); // Warrior {name: "Poly", xp: 200, weapon: "sword"}
// poly.attackAndDefend(); // Poly attacks with sword
// poly.gainXp(300);





// const Hero = function (name, xp) {
//     this.name = name;
//     this.xp = xp;
// };
// Hero.prototype.gainXp = function (amount) {
//     console.log(`${this.name} gained ${amount} experience points`);
//     this.xp += amount;
// };
// const Warrior = function (name, xp, weapon) {
//     Hero.call(this, name, xp);
//     this.weapon = weapon;
// };

// Warrior.prototype = Object.create(Hero.prototype);
// Warrior.prototype.constructor = Warrior;

// Warrior.prototype.attack = function () {
//     console.log(`${this.name} attacks with ${this.weapon}`);
// };
// const poly = new Warrior('Poly', 200, 'sword');

// console.log(poly);
// poly.attack();
// poly.gainXp(100);



// ===============  ES6 Classes  ==================== //
// ================================================== //


// // Класс со статическими свойствами и методами
// class Calc {
//     // Класс-калькулятор для двух аргументов
//     constructor() {}
//     // Метод как замена свойству
//     static get PI() {
//         return 3.14;
//     }
//     // Статический метод +
//     static add(...args) {
//         return args.reduce((acc, next) => acc + next, 0);
//     }
//     // Статический метод *
//     static mult(...args) {
//         return args.reduce((acc, next) => acc * next, 1);
//     }
// }

// console.log(Calc.PI); // 3.14
// console.log(Calc.add(2, 3, 4)); // 9
// console.log(Calc.mult(12, 3, 4)); // 144


// ========================================================
// =================== Webinar Practice ===================
// ========================================================

// 'use strict'

// const Counter = function ({ initialValue = 0, step = 1 }) {
//     // this = {} // creation of the empty object
    
//     this.value = initialValue;
//     this.step = step;

//     // this.increment = function() {
//     //     this.value += this.step;
//     // };

//     // return this;

    
// };

// Counter.prototype.increment = function() {
//     this.value += this.step;
// };

// console.dir(Counter);

// // при вызове Counter() - под капотом исполняется [[Call]]
// // при вызове New выполняется [[Construct]]

// const counterA = new Counter({ initialValue: 10, step: 5});
// // console.log('counterA.value: ', counterA.value);
// // counterA.increment();
// // console.log('counterA.value: ', counterA.value);

// const counterB = new Counter({ initialValue: 100, step: 15});
// // console.log('counterB.value: ', counterB.value);
// // counterB.increment();
// // console.log('counterB.value: ', counterB.value);

// console.log(counterA, counterB);


// ===============  Prototype Webinar  ===================== //
// ========================================================= //

// const animal = {
//     barks: true,
// };

// const dog = Object.create(animal);
// dog.sound = 'woof';


// console.log('dog: ', dog);

// console.log(dog.sound);
// console.log(dog.barks);
// console.log(dog.hasOwnProperty('qwewewe'));
// console.log(dog.qwe);


// ======================  RPG GAME  ========================//
// ========================================================= //

// const Hero = function(name, xp) {
//     this.name = name;
//     this.xp = xp;
// };

// Hero.prototype.gainXp = function(amount) {
//     console.log(`${this.name} gained ${amount} exprerience points`);
//     this.xp += amount;
// };



// const Warrior = function(name, xp, weapon) {
//     // this = Object.create(Warrior.prototype);
//     Hero.call(this, name, xp); // вызывает базовый конструктор (const Hero) и вешает name и xp на this который принадлежнит Warrior
//     // this: {name: 'Mango', xp: 1000}
//     this.weapon = weapon;
// };

// Warrior.prototype = Object.create(Hero.prototype); // перезаписываем оригинальный объект coздавая пустой объект, __proto__ которого ссылается на Hero.prototype 
// // {__proto__: Hero.prototype}
// Warrior.prototype.constructor = Warrior; // после чего, добавляем в этот объект конструктор и метод атаки 
// //  {__proto__: Hero.prototype, constructor: Warrior}


// Warrior.prototype.attack = function() {
//     console.log(`${this.name} attacks with ${this.weapon}`);
// };

// const mango = new Warrior('Mango', 1000, 'halberd');

// console.log(mango);
// mango.gainXp(2000);




// ======================  ES6 Classes  ========================//
// ========================================================= //



class Hero {

    constructor(name, xp) {
        this._name = name;
        this.xp = xp;
    }

    // ================   Public Properties  =====================//
    // ========================================================= //


    a = 5;

    gainXp = (amount) => {
        this.xp += amount;
        console.log(this.xp);
    }

    // ===========================================================//
    // ========================================================= //


    set name(newName) {
        this._name = newName;
    }

 
    get name() {
        return this._name;
    }

};


const mango = new Hero('Mango', 1000);
console.log(mango);

console.log(mango.name);

mango.name = 'Poly'; // в таких случаях вызывается сеттер
console.log(mango.name); // при просто обращении типа console.log(mango.qwe) - вызывается геттер

const fn = function(callback) {
    callback(5000);
};

fn(mango.gainXp);
