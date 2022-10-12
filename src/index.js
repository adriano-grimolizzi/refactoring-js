const PriceCode = require('./PriceCode')

function generateStatement(customer) {
    let totalAmount = 0
    let frequentRenterPoints = 0

    let result = `Rental Record for ${customer.name}:\n`

    customer.rentals.forEach(rental => {
        totalAmount += rental.getCharge()

        // add frequent renter points
        frequentRenterPoints++

        // add bonus for a two day new release rental
        if (rental.movie.priceCode === PriceCode.NEW_RELEASE && rental.daysRented > 1) {
            frequentRenterPoints++
        }
    })
    // add footer lines
    result += `Amount owed is ${totalAmount}.\nYou earned ${frequentRenterPoints} frequent renter points.`

    return result
}

module.exports = {
    generateStatement,
}
