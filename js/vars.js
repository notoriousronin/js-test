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

// const numbers = [22, 21, 292, 44, 32, 8, 99, 9, 12];
// let smallestNumber = numbers[0];

// for (const number of numbers) {
//   if (number < smallestNumber) {
//     smallestNumber = number;
//   }
// }

// console.log('smallestNumber:', smallestNumber);

// const numbers = [11, 23, 383, 66, 73, 13, 7, 2, 77, 829, 92, 99];
// let smallestNumber = numbers[0];

// for (const number of numbers) {
//   if (number < smallestNumber) {
//     smallestNumber = number;
//   }
// }

// console.log('smallestNumber:', smallestNumber);

// const friends = ['Poly', 'Mango', 'Ajax', 'Peter', 'Joe'];
// // let string = ' ';

// // for (const friend of friends) {
// //   string += friend + ', ';
// // }
// // string = string.slice(0, string.length - 2);
// const string = friends.join(', ');
// console.log('my friends are:', string);

// const string = 'JavaScript';
// const letters = string.split('');
// let invertedString = '';

// console.log(letters);

// for (const letter of letters) {
//   console.log(letter);

//   //   if (letter === letter.toLowerCase()) {
//   //     console.log('Lower case Letter:', letter);

//   //     invertedString += letter.toUpperCase();
//   //   } else {
//   //     console.log('Upper case letter:', letter);
//   //     invertedString += letter / toLowerCase();
//   //   }
//   // }

//   invertedString +=
//     letter === letter.toLowerCase()
//       ? letter.toUpperCase()
//       : letter.toLowerCase();
// }

// console.log('invertedString:', invertedString);

// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// let total = 0;

// const fruits = ['apple', 'peach', 'pear', 'banana'];

// // Change code below this line
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[3];
// console.log(lastElement);
// console.log(lastElementIndex);

// function getExtremeElements(array) {
//   // Change code below this line
//   const firstElement = array[0];
//   const lastElement = array[array.length - 1];

//   return firstElement;

//   // Change code above this line
// }

// getExtremeElements([1, 2, 3, 4, 5]);
// // возвращает[(1, 5)];

// getExtremeElements(['Earth', 'Mars', 'Venus']);
// // возвращает ["Earth", "Venus"]

// getExtremeElements(['apple', 'peach', 'pear', 'banana']);
// // возвращает ["apple", "banana"]

// function splitMessage(message, delimeter) {
//   let words;
//   // Change code below this line

//   return message.split(' ');

//   // Change code above this line
//   return words;
// }

// splitMessage('Mango hurries to the train', ' ');
// //возвращает ["Mango", "hurries", "to", "the", "train"]

// splitMessage('Mango', '');
// //["M", "a", "n", "g", "o"]

// splitMessage('best_for_week', '_');
// //["best", "for", "week"]

// function calculateEngravingPrice(message, pricePerWord) {
//   // Change code below this line

//   let words = message.split(' ').length * pricePerWord;

//   console.log(words);
//   // Change code above this line
// }

// calculateEngravingPrice('JavaScript is in my blood', 10);
// //возвращает 50

// calculateEngravingPrice('JavaScript is in my blood', 20);
// // возвращает 100

// calculateEngravingPrice('Web-development is creative work', 40);
// //возвращает 160

// calculateEngravingPrice('Web-development is creative work', 20);
// // возвращает 80

// const planets = ['Earth', 'Mars', 'Venus'];

// for (let i = 0; i < planets.length; i += 1) {
//   console.log(planets[i]);
// }

// function findLongestWord(string) {
//   // Change code below this line
//   let stringSplit = string.split(' ');
//   let longestWord = 0;

//   for (i = 0; i < stringSplit.length; i += 1) {
//     if (stringSplit[i].length > longestWord) {
//       longestWord = stringSplit[i];
//     }
//   }
//   console.log(longestWord);

//   // Change code above this line
// }

// findLongestWord('The quick brown fox jumped over the lazy dog');
// // jumped

// findLongestWord('Google do a roll');
// // google

// findLongestWord('May the force be with you');
// // force

// findLongestWord();

function createArrayOfNumbers(min, max) {
  const numbers = [];
  // Change code below this line
  for (const number of numbers) {
    number.push(min, max);
  }
  console.log(numbers);
  // Change code above this line
  return numbers;
}

createArrayOfNumbers(1, 3);
//[1, 2, 3]

createArrayOfNumbers(14, 17);
//[14, 15, 16, 17]

createArrayOfNumbers(29, 34);
//[29, 30, 31, 32, 33, 34]

createArrayOfNumbers();
//  min и max возвращает правильный массив
