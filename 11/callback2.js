console.log("task 1");
console.log("task 2");
console.log("task 3");

setTimeout(() => {
  console.log("task 1 done");
  return setTimeout(() => {
    console.log("task 2 done");
    return setTimeout(() => {
      console.log("task 3 done");
      return setTimeout(() => {
        console.log("task 4 done");
        return setTimeout(() => {
          console.log("task 5 done");
        }, 200);
      }, 1000);
    }, 2000);
  }, 4000);
}, 3000);

// setTimeout(function () {
//   console.log("Task 1 done!");
// }, 3000);

// setTimeout(function () {
//   console.log("Task 2 done!");
// }, 4000);

// setTimeout(function () {
//   console.log("Task 3 done!");
// }, 2000);

// for (let i = 1; i <= 3; i++) {
//   setTimeout(function () {
//     console.log(`Task ${i} done!`);
//   }, i * 1000);
// }

// setTimeout(() => console.log("Task 2"), 0);

// function test() {
//   console.log("Task 1");
//   console.log("Task 3");
// }

// test();
