'use strict'
/*
Задание 1
Объяви две переменные хранящие название и цену товара: name и price
Присвой переменным следующие характеристики товара (сразу при объявлении)
название: Генератор защитного поля
цена: 1000
Используя шаблонную строку выведи в консоль информацию о товаре, получится: 'Выбран «Генератор защитного поля», цена за штуку 1000 кредитов'.
Присвой товару новую цену - 2000
Используя шаблонную строку выведи в консоль информацию о товаре, получится: 'Выбран «Генератор защитного поля», цена за штуку 2000 кредитов'.
*/


/*const name = 'Генератор зашитного поля';
let price = 2000;

const message = `Выбран ${name}, цена за штуку ${price} кредитов`;

console.log(message);
*/




/*
Задание 2
Напиши скрипт проверки количества товаров на складе. Есть переменные total (количество товаров на складе) и ordered (единиц товара в заказе).

Сравни эти значения и по результатам выведи:

Если в заказе указано число, превышающее количество товаров на складе, то выведи сообщение "На складе недостаточно твоаров!".
В другом случае выводи сообщение "Заказ оформлен, с вами свяжется менеджер".
Проверь работоспособность кода с разными значениями переменной ordered, например 20, 80 и 130.

const total = 100;
const ordered = 150;
*/



/*const total = 100;
const ordered = 10;


const isNotEnough = ordered > total;

let message;

if (isNotEnough) {
    message = 'На складе недостаточно товаров!';
} else {
    message = 'Заказ оформлен, с вами свяжется менеджер';
}

console.log(message);
*/







/*Задание 3
Напиши скрипт имитирующий авторизацию администратора в панели управления.

Есть переменная message в которую будет записано сообщение о результате. При загрузке страницы у посетителя запрашивается пароль через prompt:

Если нажали Cancel, записать в message строку 'Отменено пользователем!'
В протовном случае, если введен пароль который совпадает со значением константы ADMIN_PASSWORD, записать в message строку 'Добро пожаловать!'
В противном случае, то есть если ни одно из предыдущих условий не выполнилось, записать в message строку 'Доступ запрещен, неверный пароль!'
После всех проверок вывести в alert значение переменной message.
const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
*/


/*const ADMIN_PASSWORD = 'jqueryismyjam';
const passwordRequest = prompt('Enter your password');
let message;

if (passwordRequest === null) {
    message = 'Declined by user!';
} else if  (passwordRequest === 'jqueryismyjam') {
    message = 'Welcome!';
} else {
    message = 'Access denied - password is incorrect!';
}
alert(message);
*/





/*Задание 4
На счету пользователя есть 23580 кредитов, значение хранится в переменной credits (создай и присвой). Пользователь решает купить ремонтных дроидов, которые стоят по 3000 кредитов за штуку. Цена одного дроида хранится в переменной pricePerDroid (создай и присвой).

При посещении страницы, используя prompt, необходимо спросить количество дроидов которые пользователь хочет купить и сохранить в переменную.

Напиши скрипт который:

Если в prompt была нажата кнопка Cancel, выводит в консоль сообщение 'Отменено пользователем!'.
В противном случае, рассчитывает общую цену заказа и сохраняет в переменной totalPrice.
Проверяет сможет ли пользователь оплатить заказ:
если сумма к оплате превышает количество кредитов на счету, выводи в консоль сообщение 'Недостаточно средств на счету!'.
в противном случае необходимо посчитать остаток кредитов на счету и вывести сообщение 'Вы купили [число] дроидов, на счету осталось [число] кредитов.'.
*/

/*const credits = 23580;
const pricePerDroid = 3000;

let totalPrice;
let message;

const droidsToPurchase = prompt('How many droids you want to purchase?');

if (droidsToPurchase === null) {
    console.log(message = 'Declined by user!');
} else if (totalPrice = pricePerDroid * droidsToPurchase) {
    console.log(totalPrice);
}

let creditsLeftAfterPurchase = credits - totalPrice;

if (totalPrice > credits) {
    console.log(message = 'Insufficient funds!');
} else {
    console.log(message = `You have purchased ${droidsToPurchase} droids, there are ${creditsLeftAfterPurchase} credits left.`);
}
*/





/*Задание 5
Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt. Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.

Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну. Обязательно используй switch. Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.

Но доставка есть не везде, если указанной страны нет в списке, то выводи в alert сообщение 'В вашей стране доставка не доступна'.

Ниже приведен список стран и стоимость доставки.

Китай - 100 кредитов
Чили - 250 кредитов
Австралия - 170 кредитов
Индия - 80 кредитов
Ямайка - 120 кредитов




let deliveryRequest = prompt('Enter your country for delivery').toLowerCase();

const CHINA = 'china';
const chinaPrice = 100;

const CHILE = 'сhile';
const chilePrice = 250;

const AUSTRALIA = 'australia';
const australPrice = 170;

const INDIA = 'india';
const indiaPrice = 80;

const JAMAICA = 'jamaica';
const jamaicaPrice = 120;

let message;



switch (deliveryRequest) {
    case 'china':
        message = `Delivery to ${CHINA} will cost ${chinaPrice} credits.`;
        break;

    case 'chile':
        message = `Delivery to ${CHILE} will cost ${chilePrice} credits.`;
        break;

    case 'australia':
        message = `Delivery to ${AUSTRALIA} will cost ${australPrice} credits.`;
        break;

    default:
        message = 'There is no option for delivery to your country';
}

alert(message);


*/




/*
Цикл while

let clientCounter = 18;
const maxClients = 25;
while (clientCounter < maxClients) {
    console.log(clientCounter);
    clientCounter += 1;
}

Цикл do...while

do {
 // statement
} while (expression);


let password = '';
do {
 password = prompt('Введите пароль длиннее 4-х символов', '');
} while (password.length < 5);
console.log('Ввели пароль: ', password);
*/



/*

let input;
let numeral;
let total = 0;


while (input !== null) {
    input = prompt('Enter your number!');
    numeral = Number(input);
    if (Number.isNan(numeral)) {
        continue;
    } else {
        total += numeral
    }
    alert(`Total sum equal to ${total}`);
*/

/*
let input;
let numeral;
let total = 0;

 
while (input !== null) {
    input = prompt('Enter your number');
    numeral = Number(input);
    if (Number.isNaN(numeral)) {
        continue;
    } else {
        total += numeral;
    }
    alert(`Total amount equal to ${total}`);
}



const target = 3;
let sum = 0;
for (let i = 0; i <= target; i += 1) {
 sum += i;
}
console.log(sum);


const max = 10;
for (let i = 0; i < max; i += 1) {
 console.log(`${max} % ${i} = `, max % i);
}


const numbers = [];
for (let i = 0; i < 3; i += 1) {
 numbers.push(`label-${i}`);
}
console.log('numbers: ', numbers); // ['label-0', 'label-1', 'label-2']
*/

// function showPrimes(n) {
//     nextPrime: for (let i = 2; i < n; i++) {
  
//       for (let j = 2; j < i; j++) {
//         if (i % j == 0) continue nextPrime;
//       }
  
//       alert( i ); // простое
//     }
//   }
  
// =====================================================================================

// const message = 'qq www ee tttt www ttttt yy'; 
// const words = message.split(' ');
// const max = words.length - 1;
// const leftCount = 4;
// const rightCount = 5;
// let target;


// for(let i = 1; i < max; i += 1) {
//     console.log(words[i]);
//     console.log(i);
//     // const prevIdx = i - 1;
//     const prevElementLength = words[i - 1].length;
//     // const nextIdx = i + 1;
//     const nextElementLenght = words[i + 1].length;

//     if(prevElementLength === leftCount && nextElementLenght === rightCount) {
//         target = words[i];
//     }
// }
 
// console.log(words);
// console.log(target);

// ====================================================================================


// const clients = ['Mango', 'Poly', 'Ajax'];
// const clientNameToFind = 'Poly';
// let message;

// for(let i = 0; i < clients.length; i += 1) {
//     console.log('i: ', i);
//     console.log('clients[i]: ', clients[i]);
//     console.log('clientNameToFind: ', clientNameToFind);

//     if (clients[i] === clientNameToFind) {
//         message = 'found :)';
//         break;
//     }
//     message = 'not found :(';
// }

// console.log(message);

// ====================================================================================


