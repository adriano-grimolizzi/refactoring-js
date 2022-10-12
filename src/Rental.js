const PriceCode = require('./PriceCode')

class Rental {
    constructor(movie, daysRented) {
        this.movie = movie
        this.daysRented = daysRented
    }
    getCharge() {
        let result = 0
        switch (this.movie.priceCode) {
            case PriceCode.REGULAR:
                result += 2
                if (this.daysRented > 2) {
                    result += (this.daysRented - 2) * 1.5
                }
                break
            case PriceCode.NEW_RELEASE:
                result += this.daysRented * 3
                break
            case PriceCode.CHILDREN:
                result += 1.5
                if (this.daysRented > 3) {
                    result += (this.daysRented - 3) * 1.5
                }
                break
        }
        return result
    }
    getFrequentRenterPoints = () => (this.movie.priceCode === PriceCode.NEW_RELEASE && this.daysRented > 1) ? 2 : 1
}

module.exports = Rental
