class Customer {
    rentals = []

    constructor(name) {
        this.name = name
    }

    addRental = (rental) => {
        this.rentals.push(rental)
    }
    generateStatement = () => `
            Rental Record for ${this.name}:
            Amount owed is ${this.getTotalCharge()}.
            You earned ${this.getTotalFrequentRenterPoints()} frequent renter points.`

    generateHtmlStatement = () => `
            <h1>Rental Record for <em>${this.name}</em></h1>
            <p>Amount owed is <em>${this.getTotalCharge()}</em>.</p>
            <p>You earned <em>${this.getTotalFrequentRenterPoints()}</em> frequent renter points.</p>`

    getTotalCharge = () => this.rentals.reduce((previousValue, currentValue) => previousValue + currentValue.getCharge(), 0)
    getTotalFrequentRenterPoints = () => this.rentals.reduce((previousValue, currentValue) => previousValue + currentValue.getFrequentRenterPoints(), 0)
}

module.exports = Customer
