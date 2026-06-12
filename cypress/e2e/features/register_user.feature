Feature: Register User
    As a customer
    I want to register in the application
    So that I can place an order

    Background: Access register screen
        Given I am on the registration screen

    Scenario: Empty name field
        When I click on Register
        Then I see the message "O campo nome deve ser prenchido" on register

    Scenario: Empty email field
        And I fill in the name field
        When I click on Register
        Then I see the message "O campo e-mail deve ser prenchido corretamente" on register

    Scenario: Invalid email field
        And I fill in the name field
        And I fill in the email field with "email_invalido"
        When I click on Register
        Then I see the message "O campo e-mail deve ser prenchido corretamente" on register
    
    Scenario: Empty password field
        And I fill in the name field
        And I fill in the email field with a valid email
        When I click on Register
        Then I see the message "O campo senha deve ter pelo menos 6 dígitos" on register

    Scenario: Invalid password
        And I fill in the name field
        And I fill in the email field with a valid email
        And I fill password "123"
        When I click on Register
        Then I see the message "O campo senha deve ter pelo menos 6 dígitos" on register

    Scenario: Successful user registration
        And I fill in valid registration data
        When I click on Register
        Then I see a success message on register