const PriceCode = require('./PriceCode')

function generateStatement(customer) {
    let totalAmount = 0
    let frequentRenterPoints = 0

    let result = `Rental Record for ${customer.name}:\n`

    customer.rentals.forEach(rental => {
        switch (rental.movie.priceCode) {
            case PriceCode.REGULAR:
                totalAmount += 2
                if (rental.daysRented > 2) {
                    totalAmount += (rental.daysRented - 2) * 1.5
                }
                break
            case PriceCode.NEW_RELEASE:
                totalAmount += rental.daysRented * 3
                break
            case PriceCode.CHILDREN:
                totalAmount += 1.5
                if (rental.daysRented > 3) {
                    totalAmount += (rental.daysRented - 3) * 1.5
                }
                break
        }
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
