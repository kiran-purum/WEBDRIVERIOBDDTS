class ShoppingCartSummary {
    get shoppingCartSummaryText() { return $('#cart_title') }
    get checkingProductName() { return $('//a[text()="Faded Short Sleeve T-shirts"]') }
    get productPrice() { return $('#total_price') }
    get deliveryAddress() { return $('//li/h3') }
    get invoiceAddress() { return $('//ul[@class="address last_item alternate_item box"]/li/h3') }
    get productProceedToCheckOut() { return $('.button.btn.btn-default.standard-checkout.button-medium') }
}
export default new ShoppingCartSummary()