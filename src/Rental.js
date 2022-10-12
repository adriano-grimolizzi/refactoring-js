const PriceCode = require('./PriceCode')

class Rental {
    constructor(movie, daysRented) {
        this.movie = movie
        this.daysRented = daysRented
    }
    getCharge = () => this.movie.getCharge(this.daysRented)
    getFrequentRenterPoints = () => (this.movie.priceCode === PriceCode.NEW_RELEASE && this.daysRented > 1) ? 2 : 1
}

module.exports = Rental
