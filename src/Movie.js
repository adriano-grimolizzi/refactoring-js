const { RegularPrice, NewReleasePrice, ChildrensPrice } = require('./Price')
const PriceCode = require('./PriceCode')

class Movie {
    constructor(title, priceCode) {
        this.title = title
        this.setPrice(priceCode)
    }
    setPrice(priceCode) {
        switch (priceCode) {
            case PriceCode.REGULAR:
                this.price = new RegularPrice()
                break
            case PriceCode.NEW_RELEASE:
                this.price = new NewReleasePrice()
                break
            case PriceCode.CHILDREN:
                this.price = new ChildrensPrice()
                break
        }
    }
    getCharge = (daysRented) => this.price.getCharge(daysRented)
    getFrequentRenterPoints = (daysRented) => this.price.getFrequentRenterPoints(daysRented)
}

module.exports = Movie
