class ShootingGame {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
  }

  getRandomItem() {
    const items = ["health", "power"];
    const rand = Math.ceil(Math.random() * 1);
    if (items[rand] === "health") {
      const health = Math.ceil(Math.random() * 9);
      console.log("get health ", health);
      return {
        health: health,
        power: 0,
      };
    } else {
      const power = Math.ceil(Math.random() * 9);
      console.log("get power ", power);
      return {
        power: power,
        health: 0,
      };
    }
  }

  start() {
    let isFinish = false;
    while (!isFinish) {
      console.log("===== player status =====");
      this.player1.showStatus();
      this.player2.showStatus();

      console.log("===== get random item =======");
      this.player1.useItem(this.getRandomItem());
      this.player2.useItem(this.getRandomItem());

      console.log("==== shoting =====");
      if (this.player2.health > 0) {
        this.player1.hit(this.player2.power);
      }
      if (this.player1.health > 0) {
        this.player2.hit(this.player1.power);
      }

      console.log("===== player status AFTER shooting =====");
      this.player1.showStatus();
      this.player2.showStatus();

      if (this.player1.health <= 0 || this.player2.health <= 0) {
        isFinish = true;
      }
    }

    if (this.player1.health > 0) {
      console.log(this.player1.name, " is a winner ");
    } else {
      console.log(this.player2.name, " is a winner ");
    }
  }
}

class Player {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.power = 10;
  }

  hit(power) {
    console.log(this.name, " taken hit ", power);
    this.health = this.health - power;
  }

  useItem(item) {
    if (item.health > 0) {
      console.log(this.name, " use item health : ", item.health);
      this.health = this.health + item.health;
    } else {
      console.log(this.name, " use item power : ", item.power);
      this.power = this.power + item.power;
    }
  }

  showStatus() {
    console.log(this.name, " => ", { health: this.health, power: this.power });
  }
}

// =========== mainkan ===================

const player1 = new Player("Kunglaw");
const player2 = new Player("Galih");

const arena1 = new ShootingGame(player1, player2);

arena1.start();
