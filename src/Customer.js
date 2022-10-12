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

    getTotalCharge = () => this.rentals.reduce((previousValue, currentValue) => previousValue + currentValue.getCharge(), 0)
    getTotalFrequentRenterPoints = () => this.rentals.reduce((previousValue, currentValue) => previousValue + currentValue.getFrequentRenterPoints(), 0)
}

module.exports = Customer
