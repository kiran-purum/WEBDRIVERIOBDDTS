import { Given, When, Then } from "@wdio/cucumber-framework";
import addressPage from "../pageobjects/address.Page";
import myAccountPage from "../pageobjects/myAccount.Page";
import orderConfirmationPage from "../pageobjects/orderConfirmation.Page";
import paymentsPage from "../pageobjects/payments.Page";
import shippingPage from "../pageobjects/shipping.Page";
import shoppingCartSummaryPage from "../pageobjects/shoppingCartSummary.Page";
import signInPage from "../pageobjects/signIn.Page";
import signUpPage from "../pageobjects/signUp.Page";
import signup from "../testData/myStore.json"
import randomData from "faker"
import womenSectionPage from "../pageobjects/womenSection.Page";

Given(/^This is the Home Page of MyStore$/, async () => {
    await signInPage.homePageLink()
});
When(/^I Click on Sign in$/, async () => {
    await signInPage.clickOnSIgnIn.click();
});
Then(/^I should see the Text as create an account$/, async () => {
    await expect(signInPage.createAccountText).toHaveText("CREATE AN ACCOUNT");
});
When(/^I enter email address it should create account$/, async () => {
    await signInPage.enteringEmailAddress.setValue(randomData.internet.email())
});
When(/^I click on create an account button$/, async () => {
    await signInPage.ClickOnCreateAccountButton.click();
});
Then(/^I should navigate and see text as Your Personal Information$/, async () => {
    await expect(signUpPage.pageHeading).toHaveText("YOUR PERSONAL INFORMATION");
});
When(/^I enter the data in all fields as$/, async () => {
    await signUpPage.radioButton.isSelected();
    await signUpPage.firstName.setValue(signup.firstName);
    await signUpPage.lastname.setValue(signup.lastName);
    await signUpPage.password.setValue(signup.password);
    await signUpPage.dobDay.selectByAttribute('value', signup.DOB.day);
    await signUpPage.dobMonth.selectByAttribute('value', signup.DOB.month);
    await signUpPage.dobYear.selectByAttribute('value', signup.DOB.year);
    await signUpPage.addressFirstName.setValue(signup.Address.addressFirstName);
    await signUpPage.addressLastName.setValue(signup.Address.addressLastName);
    await signUpPage.companyName.setValue(signup.Address.company)
    await signUpPage.address.setValue(signup.Address.address);
    await signUpPage.city.setValue(signup.Address.city);
    await signUpPage.state.selectByAttribute('value', signup.Address.state);
    await signUpPage.zipCode.setValue(signup.Address.zipcode);
    await signUpPage.country.selectByVisibleText(signup.Address.country);
    await signUpPage.mobileNumber.setValue(signup.Address.mobileNumber);
    await signUpPage.aliasAddress.setValue(signup.Address.aliasAddress);
});
Then(/^I validate text of each and every mandatory field$/, async () => {
    await expect(signUpPage.firstnameText).toHaveText("First name *");
    await expect(signUpPage.lastnameText).toHaveText("Last name *");
    await expect(signUpPage.passwordText).toHaveText("Password *");
    await expect(signUpPage.dateOfBirthText).toHaveText("Date of Birth");
    await expect(signUpPage.yourAddressText).toHaveText("YOUR ADDRESS");
    await expect(signUpPage.addressFirstNameText).toHaveText("First name *");
    await expect(signUpPage.addressLastnameText).toHaveText("Last name *");
    await expect(signUpPage.companyText).toHaveText("Company")
    await expect(signUpPage.addressText).toHaveText("Address *");
    await expect(signUpPage.cityText).toHaveText("City *")
    await expect(signUpPage.stateText).toHaveText("State *");
    await expect(signUpPage.zipPostalCodeText).toHaveText("Zip/Postal Code *");
    await expect(signUpPage.countryText).toHaveText("Country *");
    await expect(signUpPage.mobileNumberText).toHaveText("Mobile phone *");
    await expect(signUpPage.aliasAddressText).toHaveText("Assign an address alias for future reference. *");
});
When(/^I click on the Register Button$/, async () => {
    await signUpPage.registerButton.click();
});
Then(/^I should navigate and see the message as My Account$/, async () => {
    await expect(myAccountPage.myAccountText).toHaveText("MY ACCOUNT");
});
When(/^I click on women section button$/, async () => {
    await myAccountPage.clickingOnWomenSection.click();
});
Then(/^I should see the text under women section as SubCategories$/, async () => {
    await expect(womenSectionPage.subCategories).toHaveText("Subcategories");
});
When(/^I perform the actions to add the product into the cart$/, async () => {
    await womenSectionPage.hoverOnProduct.scrollIntoView();
    await womenSectionPage.addToCartButton.click();
});
Then(/^I should see a popup message product successfully added$/, async () => {
    await expect(womenSectionPage.addToCartMessage).toHaveText("Product successfully added to your shopping cart");
});
When(/^I click on Proceed to CheckoutButton$/, async () => {
    await womenSectionPage.clickOnProceedToCartButton.click();
});
Then(/^I navigate and validate the Shopping Cart Page details$/, async () => {
    await expect(shoppingCartSummaryPage.shoppingCartSummaryText).toHaveTextContaining("SHOPPING-CART SUMMARY");
    await expect(shoppingCartSummaryPage.checkingProductName).toHaveTextContaining('Faded Short Sleeve T-shirts');
    await expect(shoppingCartSummaryPage.productPrice).toHaveTextContaining('$');
    await expect(shoppingCartSummaryPage.deliveryAddress).toHaveTextContaining('DELIVERY ADDRESS');
    await expect(shoppingCartSummaryPage.invoiceAddress).toHaveTextContaining('INVOICE ADDRESS');
});
When(/^I click on Proceed to checkout button for shopping cart$/, async () => {
    await shoppingCartSummaryPage.productProceedToCheckOut.click();
});
Then(/^I navigate to Addresses Page and validate the details$/, async () => {
    await expect(addressPage.addressText).toHaveText('ADDRESSES');
    await expect(addressPage.chooseDeliveryOption).toHaveText('Choose a delivery address:');
    await expect(addressPage.deliveryAddress).toHaveText('YOUR DELIVERY ADDRESS');
    await expect(addressPage.billingAddress).toHaveText('YOUR BILLING ADDRESS')
});
When(/^I choose address from list and clink on Checkout button$/, async () => {
    await addressPage.addressDropDownList.selectByVisibleText("between Mars and Earth");
    await addressPage.clickOnCheckOutButton.click();
});
Then(/^I navigate to next page and validate shipping details$/, async () => {
    await expect(shippingPage.shippingHeaderText).toHaveText("SHIPPING");
    await expect(shippingPage.checkBoxText).toHaveText("Terms of service")
});
When(/^I select the check box and proceed to check out$/, async () => {
    await shippingPage.selectingCheckBox.click();
    await shippingPage.proceedToCheckOutButton.click();
});
Then(/^I should be navigated and validate payments page$/, async () => {
    await expect(paymentsPage.choosePaymentMethodText).toHaveText("PLEASE CHOOSE YOUR PAYMENT METHOD");
});
When(/^I click on the payment type button$/, async () => {
    await paymentsPage.choosePaymentType.click();
});
Then(/^I should be navigate and validate the bankwire payment page$/, async () => {
    await expect(paymentsPage.orderSummaryText).toHaveText("ORDER SUMMARY")
    await expect(paymentsPage.bankWireText).toHaveText("BANK-WIRE PAYMENT.");
});
When(/^I click on navigated to I confirm my order$/, async () => {
    await paymentsPage.clickOnConfirmOrderButton.click();
});
Then(/^I navigate and validate the order confirmation page$/, async () => {
    await expect(orderConfirmationPage.orderConfirmationText).toHaveText("ORDER CONFIRMATION");
    await expect(orderConfirmationPage.orderConfirmDetailsText).toHaveText("Your order on My Store is complete.")
});