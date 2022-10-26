class Param {
    main = () => {
        let x = 5
        this.triple(x)
        console.log(x)
        return x
    }
    triple = (arg) => {
        arg = arg * 3
        console.log(`arg in triple: ${arg}`)
    }
}

describe('primitives', () => {
    it('should pass by value', () => {
        let param1 = new Param()
        expect(param1.main()).toBe(5)
    })
})
