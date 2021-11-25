Feature: Create Account in AutomationPractice

    Scenario: Testing SignUP Page of the AutomationPractice
        Given This is the Home Page of MyStore
        When I Click on Sign in
        Then I should see the Text as "CREATE AN ACCOUNT"
        When I enter email address it should create account
        When I click on create an account button
        Then I should navigate and see the heading as "YOUR PERSONAL INFORMATION"
        When I enter the data in all fields as
        Then I see the text as "First name *"
        Then I should the text as "Last name *"
        Then I will see the text as "Password *"
        Then I should see the next Text as "Date of Birth"
        Then I am able to see the Next form Name as "YOUR ADDRESS"
        Then I should see the Address form first Text as "First name *"
        Then I can see the address form text as "Last name *"
        Then I am able to see the address text as "Address *"
        Then I see the city field in the address form as "City *"
        Then I Should see the State field in the address field as "State *"
        Then I should see the zip postal code in the address field "Zip/Postal Code *"
        Then I see the country field in the address form as "Country *"
        Then I should see the text for mobile phone number in the address form as "Mobile phone *"
        Then I see the last adress field as "Assign an address alias for future reference. *"
        When I click on the Register Button
        Then I should be navigated to another page and can see the text as "MY ACCOUNT"