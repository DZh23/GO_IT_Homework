'use strict'
// ======================================== OBJECTS =====================================

// const a = { x: 1, y: 2 };
// const b = { x: 0, z: 3 };
// const c = { x: 5, j: 10, ...a, z: 15, ...b };


// console.log(c) // {x: 0, j: 10, y: 2, z: 3}


// const hotel = {
//     name: 'Resort Hotel',
//     stars: 5,
//     capacity: 100,
// };
// // Объявим переменные и присвоим им значения из объекта
// const {
//     name,
//     stars,
//     status
// } = hotel;
// console.log(name, stars, status); // "Resort Hotel", 5, undefined


// ======================================  SHORTHAND PROPERTIES   ================================== 

// const makeProduct = (name, price) => {
//     // return {
//     //     name: name,
//     //     price: price,
//     // };

//     return {
//         name,
//         price,

//     }
// };

// console.log(makeProduct('Apples', 50));


// =======================================  COMPUTED PROPERTIES ===============================
// const key = 'name';
// const value = 10;

// const obj = {
//     a: 1,
//     [key]: value,
// };

// // obj[key] = value;

// console.log(obj);


// const product = {
//     name: 'Wunder Waffle',
//     description: 'in hac natum habit.',
//     price: 30,

//     changePrice(newPrice) {
//         console.log('this: ', this);
//         this.price = newPrice;
//     },
// };

// product.changePrice(100);
// console.log(product.price);


// ==================================== WORK WITH COLLECTIONS =======================================

// const storage = {

//     items: [
//         {
//             id: 'id-1',
//             name: 'apples',
//             price: 30
//         },
//         {
//             id: 'id-2',
//             name: 'grapes',
//             price: 40
//         },
//     ],

//     getItems() {
//         return this.items;
//     },

//     addProduct(product) {

//         this.items.push(product);
//     },

//     removeProduct(id) {
//         for (let i = 0; i < this.items.length; i += 1) {

//             const product = this.items[i];


//             if (product.id === id) {
//                 console.log('yes!');
//                 console.log('i: ', i);
//                 console.log('product: ', product);
//                 this.items.splice(i, 1);
//             }
//         }
//     },
// };

// console.table(storage.getItems());

// storage.addProduct({
//     id: 'id-3',
//     name: 'carrots',
//     price: 20
// });

// console.table(storage.getItems());

// storage.removeProduct('id-1');

// console.table(storage.getItems());



// const product = {
//     name: 'waffles',
//     price: 50,
//     quantity: 20,
// };


// // for (const key in product) {
// //     console.log(`key: ${key}, value: ${product[key]}`);
// // }

// const keys = Object.keys(product);

// console.log(keys);

// for (const key of keys) {
//     console.log(`key: ${key}, value: ${product[key]}`);
// }


// const salary = {
//     bob: 100,
//     mary: 200,
//     dick: 300,
// };

// let total = 0;

// const salaryValues = Object.values(salary);

// console.log(salaryValues);

// for (const value of salaryValues) {
//     total += value;
// }

// console.log('total: ', total);

// =========================================== EXERCISES ========================================================

// const tasksCompleted = {
//     ann: 29,
//     david: 2335,
//     helen: 111,
//     lorence: 399,
// };

// let max = 0;
// let name;

// const keys = Object.keys(tasksCompleted);
// console.log(keys);

// for (const key of keys) {
//     console.log(key);
//     console.log(tasksCompleted[key]);

//     if (max < tasksCompleted[key]) {
//         max = tasksCompleted[key];
//         name = key;
//     }
// }

// console.log('max: ', max);
// console.log('name: ', name);


// const findPersonWithMaxTasks = function (stats) {

//     // console.log('stats: ', stats);
//     let max = 0;
//     let name;

//     // ====== do the same but with object entires ======

//     const keys = Object.keys(stats);

//     for (const key of keys) {
//         if (max < stats[key]) {
//             max = stats[key];
//             name = key;
//         }
//     }

//     return {
//         name,
//         tasksCompleted: max,
//     };

// };


// console.log(
//     findPersonWithMaxTasks({
//         ann: 29,
//         david: 2335,
//         helen: 111,
//         lorence: 399,
//     }),

// );


// console.log(
//     findPersonWithMaxTasks({
//         ann: 29,
//         david: 2335,
//         helen: 9111,
//         lorence: 399,
//     }),

// );

// ===================================================================================================


// const users = [
//     {name: 'Poly', age: 7, mood: 'happy'},
//     {name: 'Mango', age: 4, mood: 'blissful'},
//     {name: 'Ajax', age: 3, mood: 'tired'},
// ];

// const getAllPropValues = function (users, key) {

//     const values = [];

//     for (const user of users) {
//         // console.log(user[key]);

//         if (key in user) {
//             values.push(user[key]);    
//         }

//     }
//     return values;
// };

// console.log(getAllPropValues(users, 'name'));
// console.log(getAllPropValues(users, 'mood'));
// console.log(getAllPropValues(users, 'active'));

//============================ filter ====> пришла статистика загрузок и надо выбрать те что больше 10%

//  

//==================================================================================

// const names = ['Radar', 'Scanner', 'Droid', 'Nip', 'Engine', 'Fuel Tank'];

// const prices = [1000, 2000, 1500, 2700, 1600, 8000];

// const combine = function (names, prices) {
//     const combined = [];
//     console.table(names);
//     console.table(prices);

//     for (let i = 0; i < names.length; i += 1) {
//         // console.log(names[i]);
//         // console.log(prices[i]);
//         const obj = {
//             name: names[i],
//             price: prices[i],
//         };

//         combined.push(obj);
//     }

//     return combined;
// };

// const products = combine(names, prices);
// console.table(products);