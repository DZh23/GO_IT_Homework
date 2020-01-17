// ================================================== ДОМАШКА НОМЕР 2 ===================================================================================================

// ===================================================   ЗАДАЧА 1   ============================================================================================= 

// Напиши функцию logItems(array), которая получает массив и использует цикл for, 
// который для каждого элемента массива будет выводить в консоль сообщение в формате [номер элемента] - [значение элемента].
// Нумерация должна начинаться с 1. К примеру для первого элемента массива ['Mango', 'Poly', 'Ajax'] 
// с индексом 0 будет выведено '1 - Mango', а для индекса 2 выведет '3 - Ajax'.



// const logItems = function (array) {
//     for (let i = 0; i < array.length; i += 1) {
//         console.log(`${i+1} - ${array[i]}`);
//     }
//     return array;  
// }




// logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

// logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);




// ===================================================================  ЗАДАЧА 2   ============================================================================================= 


// Напиши скрипт подсчета стоимости гравировки украшений. Для этого создай функцию calculateEngravingPrice(message, pricePerWord) 
// принимающую строку (в строке будут только слова и пробелы) и цену гравировки одного слова, 
// и возвращающую цену гравировки всех слов в строке.



// const calculateEngravingPrice = function (message, pricePerWord) {  

//     const words = message.split(' ');
//     const length = words.length;
//     const total = length * pricePerWord;

//     // for(const word of words) {
//     //     total += pricePerWord;     
//     // } 

//     return total;
// };



// console.log(
//     calculateEngravingPrice(
//         'Proin sociis natoque et magnis parturient montes mus',
//         10,
//     ),
// ); // 80

// console.log(
//     calculateEngravingPrice(
//         'Proin sociis natoque et magnis parturient montes mus',
//         20,
//     ),
// ); // 160

// console.log(
//     calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
// ); // 240

// console.log(
//     calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
// ); // 120

// ============================================================== ЗАДАЧА 3 ==============================================

// Напиши функцию findLongestWord(string), 
// которая принимает параметром произвольную строку (в строке будут только слова и пробелы)
//  и возвращает самое длинное слово в этой строке.


// ============================ ПОИСК САМОГО ДЛИННОГО СЛОВА !!! БЕЗ ПРИМЕНЕНИЯ ФУНКЦИИ !!! (ПРИМЕР) =========================================

// const string = 'Hype Meal Dark Soul Upper Reeeeaaact';

// const words = string.split(' ');

// let longestWord = words[0];

// console.log(words);

// for (const word of words) {
//     if(word.length > longestWord.length) {
//         longestWord = word;
//     }
// }

// console.log(longestWord);

// ======================== ПОИСК САМОГО ДЛИННОГО СЛОВА !!!  (ПРИМЕР С ИСПОЛЬЗОВАНИЕМ ФУНКЦИИ ) ======================



// const findLongestWord = function (string) {
//     const words = string.split(' ');
//     let longestWord = words[0];

//     for (const word of words) { 
//         if (word.length > longestWord.length) {
//             longestWord = word
//         }
//     }

//     return longestWord;
// }

// console.log(findLongestWord('Hype Meal Dark Soul Upper Reeeeaaact'));

// console.log(findLongestWord('sdfsfsfs sdfdsfsd ssssdfs dfs sdfsdfsdfs sdfsdfsfsfsfsf'));

// 1) при создании переменной в нее записывается функция и игорируется её тело (оно не выполняется)
// 2) при обнаружении вызова функции - выполняется тело 







// =====================================================================================================





// Array.includes

// const includes = function(array, value) {
//     for (const item of array) {
//         if (item === value) {
//             return true;
//         }
//     }
//     return false;
// };


// console.log(includes([1, 2, 3], 4));
// console.log(includes([1, 2, 3, 4, 5], 2));  
// console.log(includes(['mango', 'poly', 'ajax'], 'mango'));  


// =====================================================================================  ЗАДАЧА 4 ==============================================================================================

// Напиши функцию formatString(string) которая принимает строку и форматирует ее если необходимо.

// Если длина строки не превышает 40 символов, функция возвращает ее в исходном виде.

// Если длина больше 40 символов, то функция обрезает строку до 40-ка символов 
// и добавляет в конец строки троеточие '...', 
// после чего возвращает укороченную версию.





// const formatString = function (string) {

//     if (string.length <= 40) {
//         return string;
//     } else {
//         return `${string.slice(0, 40)} ...`;
//     }
// }

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// // вернется оригинальная строка

// console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// // вернется форматированная строка

// console.log(formatString('Curabitur ligula sapien.'));
// // вернется оригинальная строка

// console.log(
//     formatString(
//         'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
//     ),
// );
// // вернется форматированная строка


// =====================================================================================  ЗАДАЧА 5 ==============================================================================================


// // Напиши функцию checkForSpam(message), принимающую 1 параметр message - строку. Функция проверяет ее на содержание слов spam и sale.
// //  Если нашли зарещенное слово то функция возвращает true, если запрещенных слов нет функция возвращает false. 
// //  Слова в строке могут быть в произвольном регистре.

// const checkForSpam = function (message) {


//     for (const word of message) {
//         if (message.toLowerCase().includes('spam') || message.includes('sale')) {
//             return true;
//         }
//     }
//     return false;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(checkForSpam('Latest technology news')); // false

// console.log(checkForSpam('JavaScript weekly newsletter')); // false

// console.log(checkForSpam('Get best sale offers now!')); // true

// console.log(checkForSpam('[SPAM] How to earn fast money?')); // true


// Array.includes

// const includes = function(array, value) {
//     for (const item of array) {
//         if (item === value) {
//             return true;
//         }
//     }
//     return false;
// };


// console.log(includes([1, 2, 3], 4));
// console.log(includes([1, 2, 3, 4, 5], 2));  
// console.log(includes(['mango', 'poly', 'ajax'], 'mango'));  


// =====================================================================================  ЗАДАЧА 6 ==============================================================================================





// Напиши скрипт со следующим функционалом:

// При загрузке страницы пользователю предлагается в prompt ввести число.
// Ввод сохраняется в переменную input и добавляется в массив чисел numbers.
// Операция ввода числа пользователем и сохранение в массив продолжается до тех пор, пока пользователь не нажмет Cancel в prompt.
// После того как пользователь прекратил ввод нажав Cancel, если массив не пустой, необходимо посчитать сумму всех элементов массива и записать ее в переменную total.
// Используй цикл for или for...of. После чего в консоль выведи строку 'Общая сумма чисел равна [сумма]'.
// 🔔 Делать проверку того, что пользователь ввел именно число, а не произвольный набор символов, не обязательно. 
// Если хочешь, в случае некорректного ввода, показывай alert с текстом 'Было введено не число, попробуйте еще раз', 
// при этом результат prompt записывать в массив чисел не нужно, после чего снова пользователю предлагается ввести число в prompt.

// let input;
// const numbers = [];
// let total = 0;

// 1. создаем prompt
// 2. резульатат prompt добавляем в массив 
// 3. 



// let input = 0;
// let numbers = [];
// let total = 0;

// while (input !== null) {

//     input = prompt('Введите число');
//     if (!isNaN(input) && input !== null) {

//         numbers.push(+input); //(+input) это то же самое, что и Number(input) - приведение значения к числу

//     } else if (isNaN(input)) {

//         alert('Было введено не число, попробуйте еще раз');
//     }
// }
// for (const number of numbers) {
//     total += number;
// }
// alert(`Общая сумма чисел равна ${total}`);


// let input;


// const numbers = []; //создаем массив

// while(true) {
//     input = +prompt('enter your number');
//     numbers.push(input);

//     if (input === '' || input === null) {
//         let total = 0;
//         for (let i = 0; i < numbers.length; i++) {
//             total += numbers[i];
//         }
//         console.log(total);
//     }
// }
