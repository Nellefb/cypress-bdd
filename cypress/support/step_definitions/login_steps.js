// 2 - Transformar Gherkin em método/ação

/// <reference types="cypress" />

import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"
import home_page from "../pages/home_page"
import login_page from "../pages/login_page"
import { faker } from '@faker-js/faker';

const emailFaker = faker.internet.email();

Given("I am on the login screen", () =>{
    home_page.accessLogin()
})

Given("I fill in the email field", () => {
    login_page.fillEmail(emailFaker)
})

Given("I enter valid credentials", () => {
    login_page.fillEmail(emailFaker)
    login_page.fillPassword('123456')
})

When("I click on Login", () => {
    login_page.doLogin()
})

Then("I see the message {string}", (message) => {
    login_page.checkErrorMessage(message)
})

Then("I see success message", () => {
     login_page.checkSuccessMessage(emailFaker)
})