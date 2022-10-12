const PriceCode = require('./PriceCode')

class Rental {
    constructor(movie, daysRented) {
        this.movie = movie
        this.daysRented = daysRented
    }
    getCharge = () => this.movie.getCharge(this.daysRented)
    getFrequentRenterPoints = () => this.movie.getFrequentRenterPoints(this.daysRented)
}

module.exports = Rental
