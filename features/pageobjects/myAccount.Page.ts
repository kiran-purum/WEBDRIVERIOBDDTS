class MyAccountPage {
    get myAccountText() { return $('//h1[text()="My account"]'); }
    get clickingOnWomenSection() { return $('//a[@title="Women"]') }
}
export default new MyAccountPage()