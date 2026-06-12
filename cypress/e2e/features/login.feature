# 1- Criar meus cenários

Feature: Login
    As a customer
    I want to log in to the application
    So that I can place an order

    Background: Access login screen
        Given I am on the login screen

    Scenario: Login with empty email field
        When I click on Login 
        Then I see the message "E-mail inválido." 

    Scenario: Login with empty password field
        And I fill in the email field
        When I click on Login 
        Then I see the message "Senha inválida." 

    Scenario: Successful login
        And I enter valid credentials
        When I click on Login 
        Then I see success message 