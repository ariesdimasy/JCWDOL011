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

async function withAsyncAwait() {
  try {
    console.log("task 1");
    await doTask(2, 3);
    await doTask(3, 2);
    await doTask(4, 4);
    console.log("task 3");
  } catch (err) {
    console.log(err);
  }
}

function tryThrow() {
  let isFalse = true;
  try {
    console.log("Task 1 processing ... ");
    if (isFalse) {
      throw "Terjadi Error";
    }
    console.log("Task 2 processing ... ");
  } catch (err) {
    console.log(err);
  }
}

function tryThrow2() {
  let isFalse = true;

  console.log("Task 1 processing ... ");
  if (isFalse) {
    throw new Error("Terjadi Error");
  }
  console.log("Task 2 processing ... ");
}

async function coba() {
  try {
    await doTask(3, 2);
    await doTask(3, 1);
  } catch (error) {
    console.log(" dari catch try => ", error);
  }
}

// withAsyncAwait();
// tryThrow2();

coba();
