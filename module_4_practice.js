// 'use strict'

// const showLabel = function() {
//     console.log(this);
//     console.log(this.label);
// };

// const showLabel = function() {
//     console.log(this);
//     console.log(this.label);
// };


// const product = {
//     label: 'Adidas',
// };

// product.showLabel = showLabel; // создается свойство на объекте и записывается ссылка на функцию //

// product.showLabel();


// // console.log(product.showLabel);

// // const printLabel = function (callback) {
// //     const label = callback();

// //     console.log(`Product label: ${label}`);
// // };

// // printLabel(product.showLabel);


// =========================================================

// const product = {
//     label: 'Adidas',
//     showLabel() {
//         console.log(this);
//         console.log(this.label);

//         const fn = () => {
//             console.log(this);
//         };

//         fn();
//     },
// }



// product.showLabel();

// =========================================================

// const sell = function (product) {
//     console.log(`Manager ${this.name} sold ${product}`);
//     this.sales += 1;
// }

// const mango = {
//     name: 'Mango',
//     sales: 10,
// };

// const poly = { 
//     name: 'Poly',
//     sales: 20,
// };

// sell.apply(mango, ['TV']);
// sell.apply(poly, ['GPU']);

// ========================== BIND ==============================

// const product = {
//     label: 'Adidas',
//     showLabel() {
//         console.log(this);
//         console.log(this.label);

//         return this.label;
//     },
// };

// const printLabel = function(callback) {
//     const label = callback();

//     console.log(`Product label: ${label}`);
// };

// const boundShowLabel = product.showLabel.bind(product);

// printLabel(product.showLabel.bind(product));

// =============================================================


// const Manager = function (name, sales = 0) {
//     this.name = name;
//     this.sales = sales;

//     this.sell = function(product, price) {
//         console.log(`Manager ${this.name} sold ${product} for ${price}`);
//         this.sales += 1;
//     };
// };

// console.log(Manager.prototype);

// const mango = new Manager('Mango', 5);
// console.log(mango);
// mango.sell('TV', 50);

// const hoakin = new Manager('Hoakin', 10);
// console.log(hoakin);
// hoakin.sell('GPU', 100);


// const makeSound = function() {
//     console.log(this.sound);
// };

// const dog = {
//     sound: 'woof'
// }

// dog.bark = makeSound;

// const fn = function(callback) {
//     callback();
// };

// fn(dog.bark.bind(dog));

// const makeSound = () => {
//     console.log(this);
// };

// const dog = {
//     sound: 'woof',
// };

// dog.bark = makeSound;

// dog.bark();

// const dog = {};
// const makeSound = () => {
//     console.log(this);
// };

// dog.bark = makeSound;

// dog.bark();

