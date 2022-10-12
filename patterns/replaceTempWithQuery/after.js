class ItemInvoice {
    constructor(quantity, price) {
        this.quantity = quantity
        this.price = price
    }
    getPrice = () => this.getBasePrice() * this.getDiscountFactor()
    getBasePrice = () => this.quantity * this.itemPrice
    getDiscountFactor = () => this.getBasePrice() > 1000 ? 0.95 : 0.98
}
