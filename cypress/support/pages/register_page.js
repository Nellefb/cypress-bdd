/// <reference types="cypress" />

export default {
    doRegister() {
        cy.get('#btnRegister')
            .click()
    },

    checkErrorMessage(message) {
        cy.get('.errorLabel')
            .should('have.text', message)
    },

    fillName(name){
        cy.get('#user')
            .type(name)
    },

    fillEmailRegister(email){
        cy.get('#email')
            .type(email)
    },

    fillPasswordRegister(password){
        cy.get('#password')
            .type(password)
    },

    successMessageRegister(nome){
        cy.get('#swal2-title')
            .should('be.visible')
            .should('have.text', 'Cadastro realizado!')

        cy.get('#swal2-html-container')
            .should('be.visible')
            .should('have.text', `Bem-vindo ${nome}`)
    }

}
