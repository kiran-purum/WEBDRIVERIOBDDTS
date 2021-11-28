Feature: Create Account in AutomationPractice

    Scenario: Testing SignUP Page of the AutomationPractice
        Given This is the Home Page of MyStore
        When I Click on Sign in
        Then I should see the Text as create an account
        When I enter email address it should create account
        When I click on create an account button
        Then I should navigate and see text as Your Personal Information
        When I enter the data in all fields as
        Then I validate text of each and every mandatory field
        When I click on the Register Button
        Then I should navigate and see the message as My Account
        When I click on women section button
        Then I should see the text under women section as SubCategories
        When I perform the actions to add the product into the cart
        Then I should see a popup message product successfully added
        When I click on Proceed to CheckoutButton
        Then I navigate and validate the Shopping Cart Page details
        When I click on Proceed to checkout button for shopping cart
        Then I navigate to Addresses Page and validate the details
        When I choose address from list and clink on Checkout button
        Then I navigate to next page and validate shipping details
        When I select the check box and proceed to check out
        Then I should be navigated and validate payments page
        When I click on the payment type button
        Then I should be navigate and validate the bankwire payment page
        When I click on navigated to I confirm my order
        Then I navigate and validate the order confirmation page