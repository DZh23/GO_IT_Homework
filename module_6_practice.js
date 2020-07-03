// for (let i = 0; i < 3; i++) {
//     console.log(i);
//   }

// let animals = [
//   { name: "Joey", species: "cow" },
//   { name: "Natasha", species: "chicken" },
//   { name: "Ed", species: "pig" },
//   { name: "Paul", species: "fish" },
//   { name: "Asal", species: "cat" }
// ];

// // // console.log(animals);

// animals.forEach((animal, index) => {
//     console.log(animal)
// })

// const users = [{
//         id: '000',
//         name: 'Mango',
//         isActive: true
//     },
//     {
//         id: '001',
//         name: 'Poly',
//         isActive: false
//     },
//     {
//         id: '002',
//         name: 'Ajax',
//         isActive: true
//     },
//     {
//         id: '003',
//         name: 'Chelsey',
//         isActive: false
//     },
// ];

// const getUserById = (arr, id) => arr.find(el => el.id === id);

// console.log(getUserById(users, '001'));
// console.log(getUserById(users, '003'));

// const fruits = [{
//         name: 'apples',
//         amount: 100
//     },
//     {
//         name: 'bananas',
//         amount: 0
//     },
//     {
//         name: 'grapes',
//         amount: 50
//     },
// ];
// // every вернет true только если всех фруктов будет больше чем 0 штук
// const allAvailable = fruits.every(fruit => fruit.amount > 0); // false
// console.log(allAvailable);

// const numbers = [1, 2, 3, 4, 5];
// const summ = numbers.reduce((acc, value) => acc + value, 0);
// console.log(summ); // 15

// const euros = [29.76, 41.85, 46.5];
// const sum = euros.reduce((total, amount) => total + amount);
// console.log(sum);// 118.11

// const euros = [29.76, 41.85, 46.5];
// const doubled = euros.reduce((total, amount) => {
//   total.push(amount * 2);
//   return total;
// }, []);
// console.log(doubled); // [59.52, 83.7, 93]

// function increment(input) { return input + 1;}
// function decrement(input) { return input - 1; }
// function double(input) { return input * 2; }
// function halve(input) { return input / 2; }

// let pipeline = [increment, double, decrement];

// const result = pipeline.reduce(function(total, func) {
//   return func(total);
// }, 0);

// console.log(result);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// const even = numbers.filter(el => el % 2 === 0);
// const doubled = even.map(el => el * 2);
// const reversed = doubled.reverse();
// console.log(reversed);


