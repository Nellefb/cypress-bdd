// 2 - Transformar Gherkin em método/ação

/// <reference types="cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import home_page from "../pages/home_page"
import register_page from "../pages/register_page"
import { faker } from '@faker-js/faker';

const nameFaker = faker.person.firstName();
const emailFaker = faker.internet.email();

Given("I am on the registration screen", () =>{
    home_page.accessRegister()
})

Given("I fill in the name field", () =>{
    register_page.fillName(nameFaker)
})

Given("I fill in the email field with {string}", (email) =>{
    register_page.fillEmailRegister(email)
})

Given("I fill in the email field with a valid email", () => {
    register_page.fillEmailRegister(emailFaker)
})

Given("I fill password {string}", (password) => {
    register_page.fillPasswordRegister(password)
})

Given("I fill in valid registration data", () =>{
    register_page.fillName(nameFaker)
    register_page.fillEmailRegister(emailFaker)
    register_page.fillPasswordRegister("123456")
})

When("I click on Register", () =>{
    register_page.doRegister()
})

Then("I see the message {string} on register", (message) =>{
    register_page.checkErrorMessage(message)
})

Then("I see a success message on register", () => {
    register_page.successMessageRegister(nameFaker)
})