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

for (let i = 50; i >= 0; i -= 5) {
  console.log(i);
}
