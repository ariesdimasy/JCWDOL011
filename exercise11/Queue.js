class Queue { 
    constructor() { 
        this.queueList = []
    }

    addOrder(order) { 
        this.queueList.push(order)
    }

    process() { 
        return new Promise((resolve, reject) => {
            if(this.queueList.length > 0) { 
                let time = Math.floor(Math.random() * 10 * 1000)
                setTimeout(() => {
                    let item = this.queueList.shift()
                    console.log(item , "Done in ", Math.floor(time/1000) , " seconds")
                    resolve(this.queueList)
                }, time)
            }
        })
    }

    async run() { 
        while(this.queueList.length > 0) { 
            await this.process()
        }
    }
}

module.exports = Queue