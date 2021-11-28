class MyAccountPage {
    get myAccountText() { return $('//h1[text()="My account"]'); }
    get clickOnWomenSection() { return $('//a[@title="Women"]') }
}
export default new MyAccountPage()