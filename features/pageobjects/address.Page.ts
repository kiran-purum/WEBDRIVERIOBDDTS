class AddressPage {
    get addressText() { return $('.page-heading') }
    get chooseDeliveryOption() { return $('//label[@for="id_address_delivery"]') }
    get addressDropDownList() { return $('#id_address_delivery') }
    get deliveryAddress() { return $('//h3[text()="Your delivery address"]') }
    get billingAddress() { return $('//h3[text()="Your billing address"]') }
    get clickOnCheckOutButton() { return $('//span[text()="Proceed to checkout"]') }
}
export default new AddressPage()