// const age = 10;
// const totalPrice = 207.4;
// const userName = 'Bravo';
// const message = 'Welcome!';
// const isOpen = true;
// const shouldConfirm = false;

// let quantity = prompt('Choose the value');
// quantity = Number(quantity);
// console.log(quantity);
// console.log(typeof quantity);

// let elementWidth = '50.16px';
// const result = Number.parseFloat(elementWidth);
// console.log(result);

// let salary = 78615.16257;
// console.log(Number(salary.toFixed(2)));

// const base = 5;
// const power = 2;

// const result = Math.pow(5, 0.5);

// console.log(result);

// let clientCounter = 1;
// const maxClients = 25;

// while (clientCounter < maxClients) {
//   console.log(clientCounter);
//   clientCounter += 2;
// }

// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
// console.log(message);

// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
//   const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;

//   return message;
// }

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Change code below this line
//   const totalPrice = pricePerDroid * orderedQuantity;
//   if (totalPrice > customerCredits) {
//     message = 'Insufficient funds!';
//   } else if ((customerCredits = customerCredits - totalPrice)) {
//     message = `You ordered ${orderedQuantity} droids, you have ${customerCredits} credits left`;
//   } else {
//     console.log('Invalid subscription type');
//   }

//   // Change code above this line
//   return message;
// }

// for (let i = 50; i >= 0; i -= 5) {
//   console.log(i);
// }

// function checkIfCanAccessContent(subType) {
//   const canAccessContent = (subType = 'pro' || 'vip');
//   // Change this line

//   return canAccessContent;
// }

// function getSubstring(string, length) {
//   const substring = getSubstring(7, getSubstring.length); // Change this lin

//   return substring;
// }

// function multiply(a, b) {
//   return a * b;
// }

// let clientCounter = 18;
// const maxClients = 25;

// while (clientCounter < maxClients) {
//   console.log(clientCounter);
//   clientCounter += 1;
// }

// for (let i = 0; i <= 20; i += 3) {
//   console.log(i);
// }

// const target = 3;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
//   sum += i;
// }

// console.log(sum);

// const clients = [
//   'Tony',
//   'Poly',
//   'Anthony',
//   'Josh',
//   'smith',
//   'Kate',
//   'Pat',
//   'AJ',
// ];

// const clientNameToFind = 'AJ';
// let message;

// for (const client of clients) {
//   if (client === clientNameToFind) {
//     message = 'Success';
//     break;
//   }
//   message = 'Клиента с таким именем нету в базе данных!';
// }
// console.log(message);

// function multiply(x, y, z) {
//   console.log(`Result of multiply: ${x * y * z}`);
// }

// multiply(13, 11, 9);

// function multiply() {
//   let total = 3;

//   for (const argument of arguments) {
//     total *= argument;
//   }
//   return total;
// }

// console.log(multiply(1, 2, 3));
// console.log(multiply(2, 4, 6));

// function fn() {
//   // В переменной args будет полноценный массив
//   const args = Array.from(arguments);
// }

// function withdraw(amount, balance) {
//   if (amount === 0) {
//     console.log('Your amount should be more then 0');
//     return;
//   }
//   if (amount > balance) {
//     console.log('You dont have enough money');
//     return;
//   }
//   console.log('Success');
// }

// withdraw(0, 400);
// withdraw(400, 200);
// withdraw(450, 500);

// function fnA() {
//   console.log('Лог внуртри функции fnA до вызова fnB');
//   fnB();
//   console.log('Лог внуртри функции fnA после вызова fnB');
// }

// function fnB() {
//   console.log('Лог внутри функции fnB');
// }

// console.log('Лог перед вызовом fnA');
// fnA();
// console.log('Лог после вызова fnA');

// // "Лог перед вызовом fnA"
// // "Лог внуртри функции fnA до вызова fnB"
// // "Лог внутри функции fnB"
// // "Лог внуртри функции fnA после вызова fnB"
// // "Лог после вызова fnA"

// const numbers = [11, 3, 4, 6, 74, 29, 88, 132, 31, 66];
// let total = 0;

// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(numbers[i]);

//   if (numbers[i] % 2 !== 0) {
//     console.log('Не Четное!');

//     total += numbers[i];
//   }
// }

// console.log('Total:', total);

// const numbers = [11, 3, 4, 6, 74, 29, 88, 132, 31, 66];

// let total = 0;

// for (const number of numbers) {
//   console.log(number);

//   if (number % 2 !== 0) {
//     console.log('Не четное');
//     total += number;
//   }
// }

// console.log('Total:', total);

// const logins = ['m4ngoDoge', 'kiwidab3st', 'poly1scute', 'aj4xth3m4n'];
// const loginToFind = 'poly1scute';
// let message = '';

// for (let i = 0; i < logins.length; i += 1) {
//   const login = logins[i];

//   if (login !== loginToFind) {
//     message = `user ${loginToFind} not found`;
//   } else {
//     message = `user ${loginToFind} was found successfuly`;
//     break;
//   }
// }

// console.log(message);

// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallestNumber = numbers[0];

// for (const number of numbers) {
//   if (number < smallestNumber) {
//     smallestNumber = number;
//   }
// }

// console.log('smallestNumber:', smallestNumber);
