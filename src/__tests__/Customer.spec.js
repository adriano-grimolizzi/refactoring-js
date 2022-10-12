const Customer = require('../Customer')
const Movie = require('../Movie')
const Rental = require('../Rental')
const PriceCode = require('../PriceCode')

describe('Customer', () => {
    it('should add a rental', () => {
        const customer1 = new Customer('Ignacio')
        const rental1 = new Rental('Better Call Saul', 7)

        expect(customer1.rentals.length).toBe(0)
        customer1.addRental(rental1)
        expect(customer1.rentals.length).toBe(1)
    })

    describe('generateStatement', () => {
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
        
        it('should generate an HTML statement for a customer', () => {
            expect(customer1.generateHtmlStatement()).toEqual(`
            <h1>Rental Record for <em>James McGill</em></h1>
            <p>Amount owed is <em>17</em>.</p>
            <p>You earned <em>4</em> frequent renter points.</p>`)
        })
        it('should generate a statement for a customer', () => {
            expect(customer1.generateStatement()).toEqual(`
            Rental Record for James McGill:
            Amount owed is 17.
            You earned 4 frequent renter points.`)
        })
    })
})
