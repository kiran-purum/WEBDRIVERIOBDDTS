class ShippingPage {
    get shippingText() { return $('//h1') }
    get checkBoxTitle() { return $('//p[text()="Terms of service"]') }
    get selectingCheckBox() { return $('#cgv') }
    get proceedToCheckOutButton() { return $('.button.btn.btn-default.standard-checkout.button-medium') }
}
export default new ShippingPage()