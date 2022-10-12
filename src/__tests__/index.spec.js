const Customer = require('../Customer')
const Movie = require('../Movie')
const Rental = require('../Rental')

const PriceCode = require('../PriceCode')

const { generateStatement } = require('../index')

describe('Statement', () => {
    it('should add a rental', () => {
        const movie1 = new Movie('Breaking Bad', PriceCode.REGULAR)
        const movie2 = new Movie('Better Call Saul', PriceCode.NEW_RELEASE)
        const movie3 = new Movie('El Camino', PriceCode.CHILDREN)

        const rental1 = new Rental(movie1, 4)
        const rental2 = new Rental(movie2, 2)
        const rental3 = new Rental(movie3, 6)

        const customer1 = new Customer('James McGill')

        customer1.addRental(rental1)
        customer1.addRental(rental2)
        customer1.addRental(rental3)

        expect(generateStatement(customer1)).toEqual(
            `Rental Record for James McGill:\nAmount owed is 17.\nYou earned 4 frequent renter points.`)
    })
})
