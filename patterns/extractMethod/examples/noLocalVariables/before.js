class Printer {
    constructor(name, orders) {
        this.name = name
        this.orders = orders
    }
    printOwing = () => {

        const elements = this.orders.getElements()
        let outstanding = 0.0

        // print banner
        console.log('***********************')
        console.log('**** Customer Owes ****')
        console.log('***********************')

        // calculate outstanding
        elements.forEach(element => outstanding += element.getAmount())

        // print details
        console.log(`name: ${this.name}`)
        console.log(`amount: ${outstanding}`)
    }
}