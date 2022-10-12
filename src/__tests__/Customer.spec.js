const Customer = require('../Customer')
const Rental = require('../Rental')

describe('Customer', () => {
    it('should add a rental', () => {
        const customer1 = new Customer('Ignacio')
        const rental1 = new Rental('Better Call Saul', 7)

        expect(customer1.rentals.length).toBe(0)
        customer1.addRental(rental1)
        expect(customer1.rentals.length).toBe(1)
    })
})
