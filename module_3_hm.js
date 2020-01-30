// Напиши скрипт, который, для объекта user, последовательно:

// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'skydiving'
// заменяет значение premium на false
// выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of




const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false; 


const keys = Object.keys(user);


for (const key of keys) {
    console.log(`${key}:`, user[key]);  
}


// ================================================================================== TASK 2 =================================================================================================

// Напиши функцию countProps(obj), считающую кол-во свойств в объекте. Функция возвращает число - количество свойств.


// const countProps = function (obj) {

//     let count = 0;
//     for (let key in obj) {
//         count += 1;
//     }

//     return count;

// };

// // //   /*
// // //    * Вызовы функции для проверки работоспособности твоей реализации.
// // //    */
// console.log(countProps({})); // 0

// console.log(countProps({
//     name: 'Mango',
//     age: 2
// })); // 2

// console.log(countProps({
//     mail: 'poly@mail.com',
//     isOnline: true,
//     score: 500
// })); // 3
