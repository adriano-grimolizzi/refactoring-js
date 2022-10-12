class ItemInvoice {
    constructor(quantity, price) {
        this.quantity = quantity
        this.price = price
    }
    getPrice() {
        let basePrice = this.quantity * this.itemPrice
        let discountFactor
        if (basePrice > 1000) {
            discountFactor = 0.95
        } else {
            discountFactor = 0.98
        }
        return basePrice * discountFactor
    }
}
