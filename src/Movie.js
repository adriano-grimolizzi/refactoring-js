const PriceCode = require('./PriceCode')
class Movie {
    constructor(title, priceCode) {
        this.title = title
        this.priceCode = priceCode
    }
    getCharge(daysRented) {
        let result = 0
        switch (this.priceCode) {
            case PriceCode.REGULAR:
                result += 2
                if (daysRented > 2) {
                    result += (daysRented - 2) * 1.5
                }
                break
            case PriceCode.NEW_RELEASE:
                result += daysRented * 3
                break
            case PriceCode.CHILDREN:
                result += 1.5
                if (daysRented > 3) {
                    result += (daysRented - 3) * 1.5
                }
                break
        }
        return result
    }
    getFrequentRenterPoints = (daysRented) => (this.priceCode === PriceCode.NEW_RELEASE && daysRented > 1) ? 2 : 1
}

module.exports = Movie
