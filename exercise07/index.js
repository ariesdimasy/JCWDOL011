function intersectionOfObject(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

console.log(
  intersectionOfObject(
    {
      a: 1,
      b: 2,
      d: 4,
    },
    {
      a: 1,
      c: 3,
      b: 2,
    }
  )
);

function swipeObject(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let newObj = {};
    for (let key in arr[i]) {
      //console.log(arr[i][key], ":", key);
      let value =
        typeof arr[i][key] == "number" ? Number(arr[i][key]) : arr[i][key];
      newObj[value] = key;
      //newObj[key] = arr[i][key];
    }
    result.push(newObj);
  }

  return result;
}

console.log(
  swipeObject([
    {
      name: "David",
      age: 20,
    },
    {
      name: "Dimas",
      hobbies: "Playing",
      email: "ariesdimas@gmail.com",
    },
  ])
);
