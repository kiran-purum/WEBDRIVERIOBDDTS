class ShoppingCartSummary {
    get shoppingCartSummaryText() { return $('//h1') }
    get productDetailsChecking() { return $('//a[text()="Faded Short Sleeve T-shirts"]') }
    get totalPrice() { return $('#total_price') }
    get deliveryAddress() { return $('//ul[@class="address first_item item box"]/li/h3') }
    get invoiceAddress() { return $('//ul[@class="address last_item alternate_item box"]/li/h3') }
    get productProceedToCheckOut() { return $('.button.btn.btn-default.standard-checkout.button-medium') }
}
export default new ShoppingCartSummary()