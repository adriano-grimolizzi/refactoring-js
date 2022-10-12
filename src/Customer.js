class Customer {
    rentals = []

    constructor(name) {
        this.name = name
    }

    addRental = (rental) => {
        this.rentals.push(rental)
    }

    generateStatement() {
        let totalAmount = 0
        let frequentRenterPoints = 0
    
        let result = `Rental Record for ${this.name}:\n`
    
        this.rentals.forEach(rental => {
            totalAmount += rental.getCharge()
            frequentRenterPoints += rental.getFrequentRenterPoints()
        })
        // add footer lines
        result += `Amount owed is ${totalAmount}.\nYou earned ${frequentRenterPoints} frequent renter points.`
    
        return result
    }
}

module.exports = Customer
