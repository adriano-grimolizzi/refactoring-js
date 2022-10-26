class Printer {
    constructor(name) {
        this.name = name
    }
    printBanner = () => {
        console.log('BANNER')
    }
    printOwning = (amount) => {
        this.printBanner()

        console.log(`name: ${this.name}`)
        console.log(`amount: ${amount}`)
    }
}
