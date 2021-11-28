class PaymentsPage {
    get choosePaymentMethodText() { return $('.page-heading') }
    get selectingPaymentsOptions() { return $('.bankwire') }
    get orderSummaryText() { return $('//h1') }
    get bankWireText() { return $('//h3') }
    get clickOnConfirmOrderButton() { return $('//span[text()="I confirm my order"]') }
}
export default new PaymentsPage()