function doTask(task, time) {
  return new Promise((resolve, reject) => {
    let isError = false;
    if (task == 3) {
      isError = true;
    }

    console.log(" doing task ", task, " ... ");
    setTimeout(() => {
      if (isError) {
        reject(" task " + task + " Error");
      } else {
        resolve(" task " + task + " Success");
      }
    }, time * 1000);
  });
}

// doTask(1, 3)
//   .then((res) => {
//     console.log(" res dari then => ", res);
//     return doTask(2, 4);
//     // doTask(2, 4).then((res) => {
//     //   console.log(res);
//     //   doTask(3, 2).then((res) => {
//     //     console.log(res);
//     //     doTask(4, 1).then((res) => {
//     //       console.log(res);
//     //     });
//     //   });
//     // });
//   })
//   .then((res) => {
//     console.log(res);
//     return doTask(3, 2);
//   })
//   .then((res) => {
//     console.log(res);
//     return doTask(4, 1);
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(" res dari catch => ", err);
//   })
//   .finally(() => {
//     console.log("FINISH");
//   });

// function getDataFromServer() {
//   return blabla.get("https://sample/products");
// }

// getDataFromServer().then((res) => {
//   let data = res; // si data punya 5 data // undefined
// }).catch(err => {

// })

// const newData = data
//   ? data.map((item) => {
//       return displayExoticComponent(item);
//     })
//   : componentError("data gak dapetcuy dari server");

function withoutAsyncAwait() {
  console.log("task 1");
  doTask(2, 0)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(" res dari catch => ", err);
    })
    .finally(() => {
      console.log("FINISH");
    });
  console.log("task 3");
}

withoutAsyncAwait();
