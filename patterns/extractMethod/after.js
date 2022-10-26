class Printer {
    constructor(name) {
        this.name = name
    }
    printBanner = () => {
        console.log('BANNER')
    }
    printDetails = (amount) => {
        console.log(`name: ${this.name}`)
        console.log(`amount: ${amount}`)
    }
    printOwning = (amount) => {
        this.printBanner()
        this.printDetails(amount)
    }
}
