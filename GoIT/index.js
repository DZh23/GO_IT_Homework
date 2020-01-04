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

let clientCounter = 18;
const maxClients = 25;
while (clientCounter < maxClients) {
    console.log(clientCounter);
    clientCounter += 0.4;
}