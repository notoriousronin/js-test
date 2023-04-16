console.log("sync1");
console.log("sync1");
setTimeout(
  () => Promise.resolve(true).then(() => console.log("Promise Timeout1")),
  0
);
setTimeout(() => console.log("Timeout1"), 0);
Promise.resolve(true).then(() => console.log("Promise1"));
console.log("sync2");

// sync1
// sync2
// Promise1
// Timeout1
// PromiseTimeout1

//sync1
//sonc2
//promise 1
//
//
