class PaymentsPage {
    get choosePaymentMethodText() { return $('.page-heading') }
    get choosePaymentType() { return $('.bankwire') }
    get orderSummaryText() { return $('//div[@id="center_column"]/h1') }
    get bankWireText() { return $('//*[@class="box cheque-box"]/h3') }
    get clickOnConfirmOrderButton() { return $('//span[text()="I confirm my order"]') }
}
export default new PaymentsPage()