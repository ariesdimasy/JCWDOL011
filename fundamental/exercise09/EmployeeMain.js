class Employee {
  constructor(name, position) {
    this.name = name;
    this.position = position;
  }
}

class FulltimeEmployee extends Employee {
  constructor(name, position) {
    super(name, position);
    this.workHour;
    this.totalSalary;
  }
  addWorkingHour(workHour) {
    this.workHour = workHour;
  }

  calculateTotalSalary() {
    if (this.workHour > 6) {
      this.totalSalary = 6 * 100000 + (this.workHour - 6) * 75000;
    } else {
      this.totalSalary = this.workHour * 100000;
    }
  }
}

class PartimeEmployee extends Employee {
  constructor(name, position) {
    super(name, position);
    this.workHour;
    this.totalSalary;
  }
  addWorkingHour(workHour) {
    this.workHour = workHour;
  }

  calculateTotalSalary() {
    if (this.workHour > 6) {
      this.totalSalary = 6 * 50000 + (this.workHour - 6) * 30000;
    } else {
      this.totalSalary = this.workHour * 50000;
    }
  }
}

// ============== mainkan ========================

let dimas = new FulltimeEmployee("Aries Dimas", "Fullstack Developer");
dimas.addWorkingHour(6);
dimas.calculateTotalSalary();

console.log(dimas);

let galih = new PartimeEmployee("Galih S", "Instructor Web Developer");
galih.addWorkingHour(10);
galih.calculateTotalSalary();

console.log(galih);
