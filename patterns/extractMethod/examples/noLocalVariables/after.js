class Printer {
    constructor(name, orders) {
        this.name = name
        this.orders = orders
    }
    printOwing = () => {
        this.printBanner()
        this.printDetails(this.getOutstanding())
    }
    printBanner = () => {
        console.log('***********************')
        console.log('**** Customer Owes ****')
        console.log('***********************')
    }
    /*
    Easiest case with local variables.
    The variables are read byt not changed.
    They can be passed in as parameters.
    */
    printDetails = (outstanding) => {
        console.log(`name: ${this.name}`)
        console.log(`amount: ${outstanding}`)
    }
    getOutstanding = () =>
        this.orders
            .getElements()
            .map(e => e.getAmount())
            .reduce((prev, curr) => prev + curr, 0)
}

module.exports = Printer
