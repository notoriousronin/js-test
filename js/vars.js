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

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for (const number of numbers) {
//     number.push(min, max);
//   }
//   console.log(numbers);
//   // Change code above this line
//   return numbers;
// }

// createArrayOfNumbers(1, 3);
// //[1, 2, 3]

// createArrayOfNumbers(14, 17);
// //[14, 15, 16, 17]

// createArrayOfNumbers(29, 34);
// //[29, 30, 31, 32, 33, 34]

// createArrayOfNumbers();
// //  min и max возвращает правильный массив

// const bookTitle = book.title;
// console.log(bookTitle); // 'The Last Kingdom'

// const bookGenres = book.genres;
// console.log(bookGenres); // ['historical prose', 'adventurs']

// // const bookPrice = book.price;
// // console.log(bookPrice); // undefined

// const user = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: {
//     country: 'Jamaica',
//     city: 'Ocho Rios',
//   },
//   hobbies: ['swiming', 'music', 'sci-fi'],
// };

// const userHobbies = user['hobbies'];
// console.log(userHobbies);

// const bookShelf = {
//   books: 'The Last Kingdom',
//   getBooks() {
//     console.log(this);
//   },
// };

// // Перед точкой стоит объект bookShelf,
// // поэтому при вызове метода, this будет хранить ссылку на него.
// bookShelf.getBooks(); // {books: ['The Last Kingdom'], getBooks: f}

// const propName = 'name';
// const user = {
//   age: 25,
//   // Имя этого свойства будет взято из значения переменной propName
//   [propName]: 'Генри Сибола',
// };

// console.log(user.name); // 'Генри Сибола'

// ✅ Логически и синтаксически сгруппированные сущности
// const bookShelf = {
//   books: ['The Last Kingdom', 'Dream Guardian'],
//   // Это метод объекта
//   getBooks() {
//     console.log('Этот метод будет возвращать все книги - свойство books');
//   },
//   // Это метод объекта
//   addBook(bookName) {
//     console.log('Этот метод будет добавлять новую книгу в свойство books');
//   },
// };

// // Вызовы методов
// bookShelf.getBooks();
// bookShelf.addBook('Interstellar');

// const bookShelf = {
//   books: ['The Last Kingdom'],
//   getBooks() {
//     return this.books;
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//   },
//   removeBook(bookName) {
//     const bookIndex = this.books.indexOf(bookName);
//     this.books.splice(bookIndex, 1);
//   },
// };

// console.log(bookShelf.getBooks()); // ["The Last Kingdom"]
// bookShelf.addBook('The Mist');
// bookShelf.addBook('Dream Guardian');
// console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'The Mist', 'Dream Guardian']
// bookShelf.removeBook('The Mist');
// console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'Dream Guardian']

// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   isPublic: true,
//   rating: 8.38,
// };

// for (const key in book) {
//   console.log(key);
//   console.log(book[key]);
// }

// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = 'Манго';

// console.log(dog); // {name: 'Манго'}
// console.log(dog.name); // 'Манго'
// console.log(dog.legs); // 4

// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   rating: 8.38,
// };
// const entries = Object.entries(book);

// for (const entrie of entries) {
//   // Ключ
//   console.log(entrie);
//   // Значение свойства
// }

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'На берегу спокойных вод',
//     author: 'Роберт Шекли',
//     rating: 8.51,
//   },
//   {
//     title: 'Сон смешного человека',
//     author: 'Федор Достоевский',
//     rating: 7.75,
//   },
// ];

// const bookNames = [];

// for (const book of books) {
//   bookNames.push(book.title);
// }

// console.log(bookNames);

// for (const book of books) {
//   // Объект книги
//   console.log(book);
//   // // Название
//   console.log(book.title);
//   // Автор
//   console.log(book.author);
//   // Рейтинг
//   console.log(book.rating);
// }

// const bookNames = [];

// for (const book of books) {
//   bookNames.push(book.title);
// }

// console.log(bookNames); // ["The Last Kingdom", "На берегу спокойных вод", "Сон смешного человека"]

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'На берегу спокойных вод',
//     author: 'Роберт Шекли',
//     rating: 8.51,
//   },
//   {
//     title: 'Сон смешного человека',
//     author: 'Федор Достоевский',
//     rating: 7.75,
//   },
// ];

// const copyOfBooks = [...books];
// console.log(...copyOfBooks);

// function multiply(...args) {
//   console.log(args); // массив всех аргументов
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);

// function multiply(firstNumber, secondNumber, ...otherArgs) {
//   // console.log(firstNumber); // Значение первого аргумента
//   // console.log(secondNumber); // Значение второго аргумента
//   console.log(otherArgs); // Массив остальных аргументов
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// // multiply(1, 2, 3, 4);

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'На берегу спокойных вод',
//     author: 'Роберт Шекли',
//     rating: 8.51,
//   },
// ];

// for (const book of books) {
//   console.log(book.title);
//   console.log(book.author);
//   console.log(book.rating);
// }

// for (const book of books) {
//   const { title, author, rating } = book;

//   console.log(title);
//   console.log(author);
//   console.log(rating);
// }

// // Если в обьекте немного свойств то деструктуризацию можно выполнить прямо в месте обьявления переменной
// for (const { title, author, rating } of books) {
//   console.log(title);
//   console.log(author);
//   console.log(rating);
// }

// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = 'Mango';

// console.log(dog); // {name: 'Mango'}
// console.log(dog.name); // 'Mango'
// console.log(dog.legs); // 4

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line

//   // Change code above this line
//   return totalSalary;
// }

// countTotalSalary({});
// // return 0

// countTotalSalary({ mango: 100, poly: 150, alfred: 80 });
// // return 330

// countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 });
// // 400

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
//   for (const product of products) {
//     if (product.name === productName) {
//       console.log(product.price);
//     } else {
//       return null;
//     }
//   }

//   // Change code above this line
// }

// getProductPrice('Radar');
// // 1300

// getProductPrice('Grip');
// // 1200

// getProductPrice('Scanner');
// // 2700

// getProductPrice('Droid');
// // 400

// getProductPrice('Engine');
// // null

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };

// const {today: {low: lowToday, high: highToday, icon: todayIcon =  "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"}, tomorrow: {low: lowTomorrow, high: highTomorrow, icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"}};

// Change code below this line
// let total = 0;

// function add(...args) {
//   for (let arg of args) {
//     total += arg;
//   }
//   console.log(total);
//   // Change code above this line
// }

// add(15, 27);
// // 42
// add(12, 4, 11, 48);
// // 75
// add(32, 6, 13, 19, 8);
// // 78
// add(74, 11, 62, 46, 12, 36);
// // 241

// Change code below this line
// function addOverNum(firstNumber, ...otherArgs) {
//   let total = 0;

//   for (const arg of otherArgs) {
//     if (firstNumber < arg) {
//       total += arg;
//     }
//   }
//   console.log(total);
//   // Change code above this line
// }

// addOverNum(50, 15, 27);
// addOverNum(10, 12, 4, 11, 48, 10, 8);
// addOverNum(15, 32, 6, 13, 19, 8);
// addOverNum(20, 74, 11, 62, 46, 12, 36);

// / Напишіть код, який запитуватиме
// логін за допомогою prompt і буде виводити результат
// в консоль браузера

// Якщо користувач вводить "Адмін",
// то prompt запитує пароль.
// Якщо нічого не ввели або натиснута клавіша Esc
// вивести рядок "Скасовано"
// Інакше вивести рядок "Я вас не знаю"

//Пароль перевіряти так:
// Якщо введено пароль "Я головний",
// то вивести рядок "Привіт!"
// інакше виводити рядок "Невірний пароль!"

// const userLogin = prompt('Enter Login');
// console.log(userLogin);

// if (userLogin === 'Адмін') {
//   const password = prompt('Enter Password');
//   if (password === 'Я головний') {
//     console.log('Привіт!');
//   } else {
//     console.log('Невірний пароль!');
//   }
// } else if (!userLogin) {
//   console.log('Canceled');
// } else {
//   console.log('Я вас не знаю');
// }

// Напишіть через світч пошук автора мови програмування
// Пишемо назву мови у шаблонному рядку отримує відповідь: мова та автор
// PHP Расмус Лердорф
// C# група інженерів компанії Microsoft під керівництвом Андерса Хейлсберга та Скотта Вільтаумота
// Swift Кріс Латтнер
// JS Брендан Ейх
// Java Джеймс Гослінг
// Python Гвідо ван Россум

// const langName = prompt('Введіть мову');

// const normilizedName = langName.toLowerCase();

// switch (normilizedName) {
//   case 'php':
//     console.log('PHP Расмус Лердорф');
//     break;

//   case 'c#':
//     console.log(
//       'C# група інженерів компанії Microsoft під керівництвом Андерса Хейлсберга та Скотта Вільтаумота',
//     );
//     break;

//   case 'swift':
//     console.log('Swift Кріс Латтнер');
//     break;

//   case 'js':
//     console.log('JS Брендан Ейх');
//     break;

//   case 'java':
//     console.log('Java Джеймс Гослінг');
//     break;

//   case 'python':
//     console.log('Python Гвідо ван Россум');
//     break;

//   default:
//     console.log('Undefined language');
// }

// const number = 8;

/* 1
   1 2
   1 2 3
   1 2 3 4
   1 2 3 4 5
   1 2 3 4 5 6
   1 2 3 4 5 6 7
   1 2 3 4 5 6 7 8 */

// Змінна num може приймати 4 значення: 1, 2, 3 чи 4. Якщо вона має значення '1',
// то змінну result запишемо 'зима',
// якщо має значення '2' – 'весна' тощо.
// Розв'яжіть завдання через switch-case.

// const num = '2';

// switch (num) {
//   case '1':
//     console.log('Winter');
//     break;

//   case '2':
//     console.log('Fall');
//     break;

//   case '3':
//     console.log('Summer');
//     break;

//   case '4':
//     console.log('Spring');
//     break;

//   default:
//     console.log('Error');
// }

// Натуральне число більше 1 називається простим, якщо воно ні на що не ділиться, крім себе і 1.
//
// Інакше кажучи, n > 1 – просте, якщо його розподілі на будь-яке число крім 1 і є залишок.
//
//   Наприклад, 5 це просте число, воно не може бути розділене без залишку на 2, 3 та 4.
//
// Напишіть код, який виводить усі прості числа з інтервалу від 2 до n.
//
//   Для n = 10 результат має бути 2,3,5,7.
//
// P.S. Код також має бути легко модифікований для будь-яких інших інтервалів.

// Використовуючи конструкцію if..else, напишіть код, який отримує число через prompt, а потім виводить в alert:
// 1, якщо значення більше нуля,
// -1, якщо значення менше нуля,
// 0, якщо значення дорівнює нулю.
// Передбачається, що користувач вводить лише цифри.

// function greet(name) {
//   return `Добро пожаловать ${name}.`;
// }

// // Вызываем функцию greet и выводим результат в консоль
// // console.log(greet('Манго')); // Добро пожаловать Манго.

// // Выводим функцию greet в консоль не вызывая её
// console.log(greet); // ƒ greet() { return `Добро пожаловать ${name}.`; }

// function processCall(recipient) {
//   // Имитируем доступность абонента случайным числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     console.log(`Абонент ${recipient} недоступен, оставьте сообщение.`);
//     // Логика активации автоответчика
//   } else {
//     console.log(`Соединяем с ${recipient}, ожидайте...`);
//     // Логика принятия звонка
//   }
// }

// processCall('Vlada');

// const isRecipientAvailable = Math.random() > 0.5;
// console.log(Number(isRecipientAvailable));

// const numbers = [5, 10, 15, 20, 25];

// // Классический for
// // for (let i = 0; i < numbers.length; i += 1) {
// //   console.log(`Индекс ${i}, значение ${numbers[i]}`);
// // }

// // Перебирающий forEach
// // numbers.forEach(function (number, index) {
// //   console.log(`Индекс ${index}, значение ${number}`);
// // });

// numbers.forEach(function (number, index) {
//   console.log(`Index ${index}, value ${number}`);
// });

// const arrowAdd = (2, 4, 6) => {
//   return a + b + c;
// };
// console.log(arrowAdd);

// Декларативный подход
// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = numbers.filter(value => value > 3);
// console.log(filteredNumbers); // [4, 5]

// const dirtyMultiply = (array, value) => {
//   for (let i = 0; i < array.length; i += 1) {
//     array[i] = array[i] * value;
//   }
// };

// const numbers = [1, 2, 3, 4, 5];
// dirtyMultiply(numbers, 3);
// // Произошла мутация исходных данных - массива numbers
// console.log(numbers); // [2, 4, 6, 8, 10]

// const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];

// const planetsToUpperCase = planets.map(planet => planet.toUpperCase());
// console.log(planetsToUpperCase);

// const students = [
//   { name: 'Манго', score: 83 },
//   { name: 'Поли', score: 59 },
//   { name: 'Аякс', score: 37 },
//   { name: 'Киви', score: 94 },
//   { name: 'Хьюстон', score: 64 },
// ];

// const names = students.map(student => student.name);

// console.log(names);

// const rounder = function (number, places) {
//   return Number(number.toFixed(places));
// };

// console.log(rounder(3.45637, 3));

// const rounder = function (places) {
//   return function (number) {
//     return Number(number.toFixed(places));
//   };
// };

// const rounder1 = rounder(2);
// const rounder2 = rounder(3);

// console.log(rounder1(3.45637));
// console.log(rounder2(3.45637));

// const doMath = function (a, c, callback) {
//   const result = callback(a, b);

//   console.log(result);
// };

// doMath(2, 3, function (x, y) {
//   return x + y;
// });
// doMath(10, 3, function (x, y) {
//   return x - y;
// });

// const add = function (a, b) {
//   return a + b;
// };

// const add = (a, b) => {
//   return a + b;
// };

// console.log(add(3, 3));

// const greet = (a, b) => a + b;

// console.log(greet(2, 3));

// const numbers = [5, 10, 15, 20, 25];

// numbers.forEach(function (number, index, array) {
//   console.log('number:', number);

//   array[2] = 13;
// });

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// const productsNames = products.map(product => product.name);

// console.log('productsNames:', productsNames);

// function greet(name) {
//   return `Welcome ${name}`;
// }

// console.log(greet);
// // greet('Joe');

// Колбэк-функция
// function greet(name) {
//   consle.log(`Добро пожаловать ${name}.`);
// }

// // Функция высшего порядка
// function registerGuest(name, callback) {
//   console.log(`Регистрируем гостя ${name}.`);
//   callback(name);
// }

// registerGuest('AG', greet);

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }

// makeMessage('Royal Grand', makePizza);
// // "Pizza Royal Grand is being prepared, please wait..."

// makeMessage('Ultracheese', deliverPizza);
// //"Delivering Ultracheese pizza."

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza('Royal Grand', function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// makePizza('Ultracheese', `Eating pizza ${pizzaName}`, function eatPizza(pizzaName));

// function processCall(recipient) {
//   // Имитируем доступность абонента случайным числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     console.log(`Абонент ${recipient} недоступен, оставьте сообщение.`);
//     // Логика активации автоответчика
//   } else {
//     console.log(`Соединяем с ${recipient}, ожидайте...`);
//     // Логика принятия звонка
//   }
// }

// processCall('Vlada');

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line

//   firstArray.forEach(function (element, index, firstArray) {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

//   console.log(commonElements);
//   // Change code above this line
// }

// getCommonElements([1, 2, 3], [2, 4]);
// // [2]

// getCommonElements([1, 2, 3], [2, 1, 17, 19]);
// // [1, 2]

// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);
// // [12, 27, 3]

// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]);
// // [10, 30, 40]

// getCommonElements([1, 2, 3], [10, 20, 30]);
// // []

// const numbers = [5, 10, 15, 20, 25];

// const logMessage = (number, index) => {
//   console.log(`Индекс ${index}, значение ${number}`);
// };

// numbers.forEach(logMessage);

// Change code below this line
// const getCommonElements = (firstArray, secondArray) => {
//   const commonElements = [];

//   firstArray.forEach(element => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

//   // Change code above this line
//   console.log(commonElements);
// };
// // Change code above this line

// getCommonElements([1, 2, 3], [2, 4]);
// // [2]

// getCommonElements([1, 2, 3], [2, 1, 17, 19]);
// // [1, 2]

// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);
// // [10, 30, 40]

// getCommonElements([1, 2, 3], [10, 20, 30]);
// // []

// function changeEven(numbers, value) {
//   // Change code below this line
//   const newArr = [];

//   numbers.forEach(number => {
//     if (number % 2 === 0) {
//       newArr.push(number + value);
//     } else {
//       newArr.push(number);
//     }
//   });
//   console.log(newArr);
//   return newArr;
// }

// changeEven([1, 2, 3, 4, 5], 10);
// // [1, 12, 3, 14, 5]

// changeEven([2, 8, 3, 7, 4, 6], 10);
// // [12, 18, 3, 7, 14, 16]

// changeEven([17, 24, 68, 31, 42], 100);
// // [17, 124, 168, 31, 142]

// changeEven([44, 13, 81, 92, 36, 54], 100);
// //  [144, 13, 81, 192, 136, 154]

// const planets = ['Earth', 'Mars', 'Venus', 'Jupiter'];
// // Change code below this line
// const planetsLengths = planets.map(planet => planet.length);

// console.log(planetsLengths);

// // Change code below this line
// const getUserNames = users => {};
// // Change code above this line

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers.filter(number => number % 2 !== 0);

// console.log(evenNumbers);
// console.log(oddNumbers);

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = 'Bernard Cornwell';
// // Change code below this line

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);

// console.log(topRatedBooks);
// console.log(booksByAuthor);

// // Change code below this line
// const getUsersWithFriend = (users, friendName) => {
//   const myFriend = users.filter(user => user.friends === friendName);
// };
// return myFriend;
// // Change code above this line

// function multiply(firstNumber, secondNumber, ...otherArgs) {
//   console.log(firstNumber); // Значение первого аргумента
//   console.log(secondNumber); // Значение второго аргумента
//   console.log(otherArgs); // Массив остальных аргументов
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);

// const allGenres = books.flatMap(book => book.genres);
// const uniqueGenres = allGenres.filter(
//   (genre, index, array) => array.indexOf(genre) === index,
// );

// Change code below this line
// const getFriends = users => {
//   const activeUsers = users.filter(user => !user.isActive);

//   console.log(activeUsers);
// };

// // Change code above this line

// getFriends([
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//     age: 37,
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//     age: 34,
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//     age: 24,
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//     age: 21,
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//     age: 27,
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//     age: 38,
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//     age: 39,
//   },
// ]);

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
// ];
// const BOOK_TITLE = 'The Dream of a Ridiculous Man';
// const AUTHOR = 'Robert Sheckley';
// // Change code below this line

// const bookWithTitle = books.find(option => option.title === BOOK_TITLE);
// const bookByAuthor = books.find(option => option.author === AUTHOR);

// console.log(bookWithTitle);
// console.log(bookByAuthor);

// Change code below this line
// const getUserWithEmail = (users, email) => {};

// // Change code above this line

// getUserWithEmail([
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//   },
// ]);

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Change code below this line

// const totalPlayTime = playtimes.reduce((previousValue, number) => {
//   return previousValue + number;
// }, 0);
// console.log(totalPlayTime);

// // Change code above this line
// const averagePlayTime = totalPlayTime / playtimes.length;

// const players = [
//   { name: 'Mango', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Poly', playtime: 469, gamesPlayed: 2 },
//   { name: 'Ajax', playtime: 690, gamesPlayed: 3 },
//   { name: 'Kiwi', playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce((playtime, gamesPlayed) => {
//   return (playtime / gamesPlayed) * players;
// }, 0);
// console.log(totalAveragePlaytimePerGame);

// const players = [
//   { name: 'Mango', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Poly', playtime: 469, gamesPlayed: 2 },
//   { name: 'Ajax', playtime: 690, gamesPlayed: 3 },
//   { name: 'Kiwi', playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce((playtime, gamesPlayed) => {
//   total = player.playtime / player.gamesPlayed;
//   avarage = total + totalAveragePlaytimePerGame;
//   return avarage;
// });
// console.log(avarage);

// Change code below this line
// const getTotalFriendCount = users => {
//   return users.reduce((acc, friend) => acc + user.friends, 0);
// };
// console.log(getTotalFriendCount);
// // Change code above this line

// calculateTotalBalance([
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//   },
// ]);

// const scores = [61, 19, 74, 35, 92, 56];
// console.log(scores);
// const newScores = [...scores].sort();
// console.log(newScores);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const sortedByAuthorName = [...books].sort((firstBook, secondBook) => firstBook.author - secondBook.author;

// // const sortedByReversedAuthorName = [...books].sort((a, b) => secondBook.author - firstBook.author);

// // const sortedByAscendingRating = [...books].sort((firstBook, secondBook) => firstBook.rating - secondBook.rating);

// // const sortedByDescentingRating = [...books].sort((firstBook, secondBook) => secondBook.rating - firstBook.rating);

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   {
//     title: 'The Dreams in the Witch House',
//     author: 'Howard Lovecraft',
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = books =>
//   const newBooks = [...books]
//     .map(book => book.name)
//     .filter((book, index, books) => books.indexOf(book) === index)
// //     .sort((firstBook, secondBook) => firstBook.localeCompare(secondBook))
// //     .sort((firstBook, secondBook) => firstBook.rating - secondBook.rating);

// // console.log(names);

// // Change code below this line
// const getTotalBalanceByGender = (users, gender) => [...users].filter((user, index, users) => users.indexOf(user) === gender).reduce(acc, sum) => return acc + user.balance;

// console.log(getSortedFriends());

// getSortedFriends([
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong', 'Adrian Cross'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: [
//       'Jacklyn Lucas',
//       'Linda Chapman',
//       'Adrian Cross',
//       'Solomon Fokes',
//     ],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//   },
// // ]);

// // // Change code above this line

// function showThis() {
//   console.log('this in showThis: ', this);
// }

// // Вызываем в глобальном контексте
// showThis(); // this in showThis: Window

// const user = {
//   username: 'Mango',
// };

// // Записываем ссылку на функцию в свойство объекта
// // Обратите внимание, что это не вызов - нет ()
// user.showContext = showThis;

// // Вызываем функцию в контексте объекта
// // this будет указывать на текущий объект, в контексте
// // которого осуществляется вызов, а не на глобальный объект.
// user.showContext(); // this in showThis: {username: "Mango", showContext: ƒ}

// class User {
//   // Синтаксис объявления метода класса
//   constructor(name, email) {
//     // Инициализация свойств экземпляра
//     this.name = name;
//     this.email = email;
//   }
// }

// const mango = new User('Манго', 'mango@mail.com');
// console.log(mango); // { name: 'Манго', email: 'mango@mail.com' }

// const poly = new User('Поли', 'poly@mail.com');
// console.log(poly); // { name: 'Поли', email: 'poly@mail.com' }

// class Storage {
//   constructor(items) {
//     this.items = items;
//   }
//   getItems() {
//     return this.items;
//   }
//   addItem(newItem) {
//     this.items.push(newItem);
//   }
//   removeItem(itemToRemove) {
//     this.items.splice(1, 1);
//   }
// }

// // Change code above this line
// const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem('Droid');
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem('Prolonger');
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// class StringBuilder {
//   constructor(initialValue) {
//     this.value = initialValue;
//   }
//   getValue() {
//     return this.value;
//   }
//   padEnd(str) {
//     this.value += str;
//   }
//   padStart(str) {
//     this.value = str + this.value;
//   }
//   padBoth(str) {
//     padEnd(str), padStart(str);
//   }
// }

// // Change code above this line
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // "."
// builder.padStart('^');
// console.log(builder.getValue()); // "^."
// builder.padEnd('^');
// console.log(builder.getValue()); // "^.^"
// builder.padBoth('=');
// console.log(builder.getValue()); // "=^.^="

// class Car {
//   // Change code below this line
//   static Price = {
//     MAX_PRICE: 50000,
//   };
//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice <= MAX_PRICE) {
//       this.#price = newPrice;
//     } else {
//     }
//   }
//   // Change code above this line
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

// class Car {
//   // Change code below this line
//   static = {
//     MAX_PRICE: '50000',
//   };
//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice <= this.static.MAX_PRICE) {
//       this.#price = newPrice;
//     } else {
//     }
//   }
//   // Change code above this line
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

// class Car {
//   static #MAX_PRICE = 50000;
//   // Change code below this line
//   static checkPrice(price) {
//     if (price > this.#MAX_PRICE) {
//       return 'Error! Price exceeds the maximum';
//     }
//     if (price <= this.#MAX_PRICE) {
//       return 'Success! Price is within acceptable limits';
//     }
//   }

//   // Change code above this line
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   // Change code below this line

//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser',
//   };

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }

//   // Change code above this line
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Change code below this line

//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser',
//   };

//   constructor({ email, accessLevel, blacklistedEmails }) {
//     super(email);
//     this.accessLevel = accessLevel;
//     this.blacklistedEmails = [];
//   }

//   blacklist(email) {
//     this.blacklistedEmails.push(email);
//   }

//   isBlacklisted(email) {
//     this.blacklistedEmails.includes(email);
//   }

//   // Change code above this line
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist('poly@mail.com');
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted('mango@mail.com')); // false
// console.log(mango.isBlacklisted('poly@mail.com')); // true

// const listWithId = document.querySelector('#menu');
// listWithId.style.textTransform = 'uppercase';
// listWithId.style.fontSize = '24px';
// console.log(listWithId);

// const listWithClass = document.querySelector('.menu');
// console.log(listWithClass);

// const menuItemsByTagName = document.querySelectorAll('li');
// console.log(menuItemsByTagName);

// const menuItemsByClass = document.querySelectorAll('.menu-item');
// console.log(menuItemsByClass);

// const firstMenuItem = document.querySelector('.menu-item');
// firstMenuItem.style.color = 'tomato';
// console.log(firstMenuItem);

// Потрібно написати функцію, яка приймає 1 параметр key, яка буде перебирати об'єкт
// якщо об'єкт має такий ключ - поверне true

// const obj = {
//   name: 'Jhon',
//   car: 'Audi',
//   carColor: 'White',
// };

// function checkKey(key, obj) {
//   console.log(Object.keys(obj));

//   //   return Object.keys(obj).includes(key);

//   return key in obj;
// }

// console.log(checkKey('car', obj));

// console.log(document);

// const body = document.body;
// console.log(body);

// const list = body.firstElementChild;
// console.log(list);

// const firstListItem = list.firstElementChild;
// console.log(firstListItem);

// const listItems = list.children;
// console.log(listItems);
// const article = document.querySelector('.article');
// console.log(article.innerHTML);

// const title = document.querySelector('.article .title');
// console.log(title.innerHTML);

// const text = document.querySelector('.article .text');
// console.log(text.innerHTML);

// const link = document.querySelector('.article .link');
// console.log(link.innerHTML);

// const button = document.querySelector('.btn');

// const handleClick = event => {
//   console.log('event: ', event);
//   console.log('event type: ', event.type);
//   console.log('currentTarget: ', event.currentTarget);
// };

// button.addEventListener('click', handleClick);

// document.addEventListener('keydown', event => {
//   console.log('Keydown: ', event);
// });

// document.addEventListener('keyup', event => {
//   console.log('Keyup: ', event);
// });

// document.addEventListener('keydown', event => {
//   console.log('key: ', event.key);
//   console.log('code: ', event.code);
// });

// const categoriesNumber = document.querySelectorAll('.item');
// console.log('Number of categories: ', categoriesNumber.length);

// categoriesNumber.forEach(item => {
//   const categoryTitle = item.querySelector('h2');
//   console.log('Category: ', categoryTitle.textContent);
//   const listsNumber = item.querySelectorAll('ul > li');
//   console.log('Elements: ', listsNumber.length);
// });

// Напишіть функцію each(array, callback), яка
// першим параметром приймає масив, а другим - функцію,
// яка застосовується до кожного елемента масиву.
// Функція each повинна повернути новий масив, елементами
// якого будуть результати виклику callback
// callback функції повинна множити елементи на 2

// function multiply(array, callback) {
//   const resultArr = [];
//   array.forEach(element => {
//     resultArr.push(callback(element));
//   });
//   return resultArr;
// }
// console.log(multiply([2, 3, 6, 8], item => (item *= 5)));

//Напишіть функцію savePassword(password), яка приймає
//пароль і повертає внутрішню функцію, що приймає
//рядок і повертає true, якщо рядок збігається із збереженим
//паролем і false - якщо не збігається

// function savePassword(password) {
//   return function (userPassword) {
//     return password === userPassword;
//   };
// }
// const checkPassword = savePassword('12345qwerty');

// console.log(checkPassword('12345qwerty'));
// console.log(checkPassword('mango-poly'));
