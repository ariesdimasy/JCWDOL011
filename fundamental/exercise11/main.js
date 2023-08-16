const Queue = require("./Queue")

const q1 = new Queue()

q1.addOrder("Pizza")
q1.addOrder("Pasta")
q1.addOrder("Macaroni")
q1.addOrder("Burger")

console.log(q1.queueList)

q1.run()