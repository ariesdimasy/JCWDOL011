function calculateDataStudents(students) {
  let result = {
    score: {
      highest: students[0].score,
      lowest: students[0].score,
      average: 0,
    },
    age: {
      highest: (new Date() - students[0].age) / 31536000000,
      lowest: (new Date() - students[0].age) / 31536000000,
      average: 0,
    },
  };

  //console.log(" ===> ", result);

  let totalScore = 0;
  let totalAge = 0;
  for (let i = 0; i < students.length; i++) {
    let years = (new Date() - students[i].age) / 31536000000; // (365 * 24 * 60 * 60 * 1000);
    if (students[i].score > result.score.highest) {
      result.score.highest = students[i].score;
    }
    if (students[i].score < result.score.lowest) {
      result.score.lowest = students[i].score;
    }
    // mencari lowest dan highest age
    if (years > result.age.highest) {
      result.age.highest = students[i].age;
    }
    if (years < result.score.lowest) {
      result.age.highest = years;
    }

    totalScore += students[i].score; // totalScore = totalScore + studenta[i].score
    totalAge += years;
  }

  result.score.average = totalScore / students.length;
  result.age.average = totalAge / students.length;

  return result;
}

const students = [
  {
    name: "Aries Dimas",
    email: "ariesdimas@gmail.com",
    age: new Date("1999-09-09"),
    score: 89,
  },
  {
    name: "Yulianto",
    email: "yulianto@gmail.com",
    age: new Date("1995-04-09"),
    score: 80,
  },
  {
    name: "Sarutobi",
    email: "sarutobi@gmail.com",
    age: new Date("1998-05-09"),
    score: 85,
  },
  {
    name: "Rian D Xebec",
    email: "riand.xebec@gmail.com",
    age: new Date("1993-05-09"),
    score: 90,
  },
];

console.log(calculateDataStudents(students));
