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
import validationdata from "../assertionData/validationData.json"

Given(/^This is the Home Page of MyStore$/, async () => {
    await signInPage.homePageLink();
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
    await expect(signUpPage.firstnameText).toHaveText(validationdata.firstname);
    await expect(signUpPage.lastnameText).toHaveText(validationdata.lastname);
    await expect(signUpPage.passwordText).toHaveText(validationdata.password);
    await expect(signUpPage.dateOfBirthText).toHaveText(validationdata.dateOfBirth);
    await expect(signUpPage.yourAddressText).toHaveText(validationdata.yourAddress);
    await expect(signUpPage.addressFirstNameText).toHaveText(validationdata.addressFirstName);
    await expect(signUpPage.addressLastnameText).toHaveText(validationdata.addressLastName);
    await expect(signUpPage.companyText).toHaveText(validationdata.company)
    await expect(signUpPage.addressText).toHaveText(validationdata.address1);
    await expect(signUpPage.cityText).toHaveText(validationdata.city)
    await expect(signUpPage.stateText).toHaveText(validationdata.state);
    await expect(signUpPage.zipPostalCodeText).toHaveText(validationdata.zipCode);
    await expect(signUpPage.countryText).toHaveText(validationdata.country);
    await expect(signUpPage.mobileNumberText).toHaveText(validationdata.mobileNumber);
    await expect(signUpPage.aliasAddressText).toHaveText(validationdata.aliasAddress);
});
When(/^I click on the Register Button$/, async () => {
    await signUpPage.registerButton.click();
});
Then(/^I should navigate and see the message as My Account$/, async () => {
    await expect(myAccountPage.myAccountText).toHaveText(validationdata.myaccount);
});
When(/^I click on women section button$/, async () => {
    await myAccountPage.clickingOnWomenSection.click();
});
Then(/^I should see the text under women section as SubCategories$/, async () => {
    await expect(womenSectionPage.subCategories).toHaveText(validationdata.subcatagories);
});
When(/^I perform the actions to add the product into the cart$/, async () => {
    await womenSectionPage.hoverOnProduct.scrollIntoView();
    await womenSectionPage.addToCartButton.click();
});
Then(/^I should see a popup message product successfully added$/, async () => {
    await expect(womenSectionPage.succesfullyAddedToCart).toHaveText(validationdata.ProductAddedToCart);
});
When(/^I click on Proceed to CheckoutButton$/, async () => {
    await womenSectionPage.clickOnProceedToCartButton.click();
});
Then(/^I navigate and validate the Shopping Cart Page details$/, async () => {
    await expect(shoppingCartSummaryPage.shoppingCartSummaryText).toHaveTextContaining(validationdata.shoppingCartSummary);
    await expect(shoppingCartSummaryPage.checkingProductName).toHaveTextContaining(validationdata.productName);
    await expect(shoppingCartSummaryPage.productPrice).toHaveTextContaining(validationdata.totalPrice);
    await expect(shoppingCartSummaryPage.deliveryAddress).toHaveTextContaining(validationdata.deliveryAddress);
    await expect(shoppingCartSummaryPage.invoiceAddress).toHaveTextContaining(validationdata.invoiceAddress);
});
When(/^I click on Proceed to checkout button for shopping cart$/, async () => {
    await shoppingCartSummaryPage.clickOnProceedToCheckOut.click();
});
Then(/^I navigate to Addresses Page and validate the details$/, async () => {
    await expect(addressPage.addressText).toHaveText(validationdata.addressHeader);
    await expect(addressPage.chooseDeliveryOption).toHaveText(validationdata.deliverLocation);
    await expect(addressPage.deliveryAddress).toHaveText(validationdata.yourDeliverAddress);
    await expect(addressPage.billingAddress).toHaveText(validationdata.yourBillinAddress)
});
When(/^I choose address from list and clink on Checkout button$/, async () => {
    await addressPage.addressDropDownList.selectByVisibleText(validationdata.addressList);
    await addressPage.clickOnCheckOutButton.click();
});
Then(/^I navigate to next page and validate shipping details$/, async () => {
    await expect(shippingPage.shippingHeaderText).toHaveText(validationdata.shippingHeader);
    await expect(shippingPage.checkBoxText).toHaveText(validationdata.termsOfService)
});
When(/^I select the check box and proceed to check out$/, async () => {
    await shippingPage.selectingCheckBox.click();
    await shippingPage.proceedToCheckOutButton.click();
});
Then(/^I should be navigated and validate payments page$/, async () => {
    await expect(paymentsPage.choosePaymentMethodText).toHaveText(validationdata.pleaseChoosePaymentType);
});
When(/^I click on the payment type button$/, async () => {
    await paymentsPage.choosePaymentType.click();
});
Then(/^I should be navigate and validate the bankwire payment page$/, async () => {
    await expect(paymentsPage.orderSummaryText).toHaveText(validationdata.orderSummary)
    await expect(paymentsPage.bankWireText).toHaveText(validationdata.bankWirePayment);
});
When(/^I click on navigated to I confirm my order$/, async () => {
    await paymentsPage.clickOnConfirmOrderButton.click();
});
Then(/^I navigate and validate the order confirmation page$/, async () => {
    await expect(orderConfirmationPage.orderConfirmationText).toHaveText(validationdata.orderConfirmation);
    await expect(orderConfirmationPage.orderConfirmDetailsText).toHaveText(validationdata.orderConfirmationDetails)
});