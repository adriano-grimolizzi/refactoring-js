const Printer = require('./after')

describe('noLocalVariables', () => {
    test('printOwing', () => {
        const mockOrders = {
            getElements: () => [
                { getAmount: () => 1 },
                { getAmount: () => 2 },
                { getAmount: () => 3 },
            ]
        }
        const printer1 = new Printer('Adriano', mockOrders)
        printer1.printOwing()
    })
})
