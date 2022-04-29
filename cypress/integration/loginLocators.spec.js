/// <reference types="Cypress" />

const Locators = require('../fixtures/locators.json')

describe('Login with locators', () => {

    before('visit login page', () => {
        cy.visit('/login');
    })

    it('login with valid data', () => {
        cy.visit('/login');
        cy.get(Locators.Login.emailInput.type('gugagaga@gmail.com'));
        cy.get(Locators.Login.passwordInput.type('gugagaga1'));
        cy.get(Locators.Login.submitBtn).click();
        cy.url().should('not.include', '/login');
    })

    it ('logout', () => {
        cy.visit('/login');
        cy.get(Locators.Login.emailInput.type('gugagaga@gmail.com'));
        cy.get(Locators.Login.passwordInput.type('gugagaga1'));
        cy.get(Locators.Login.submitBtn).click();
        cy.get(Locators.Logout.logoutBtn).click();
        cy.url().should('include', '/login');

    })

    it ('register', () => {
        cy.visit('/register');
        cy.get(Locators.Registration.firstNameInput.type('Dragan'));
        cy.get(Locators.Registration.lastNameInput.type('Nikolic'));
        cy.get(Locators.Registration.emailInput.type('dragan@gmail.com'));
        cy.get(Locators.Logout.logoutBtn).click();
        cy.url().should('include', '/login');

    })

    
})