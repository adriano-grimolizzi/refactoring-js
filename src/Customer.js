class Customer {
    rentals = []

    constructor(name) {
        this.name = name
    }

    addRental = (rental) => {
        this.rentals.push(rental)
    }
}

module.exports = Customer
