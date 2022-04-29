const Locators = require('../fixtures/locators.json')

import { faker } from '@faker-js/faker';



describe('Register with locators', () => {
    let registerData = {
        firstName: '',
        lastName: '',
        randomEmail: '',
        password: '',
    }

    beforeEach(() => {
        registerData.firstName = faker.name.firstName();
        registerData.lastName = faker.name.lastName();
        registerData.randomEmail = faker.internet.email();
        registerData.password = faker.internet.password ();
    })
    

    it ('register', () => {
        cy.visit('/register');
        cy.get(Locators.Registration.firstNameInput).type(registerData.firstName);
        cy.get(Locators.Registration.lastNameInput).type(registerData.lastName);
        cy.get(Locators.Login.emailInput).type(registerData.randomEmail);
        cy.get(Locators.Registration.passwordInput).type(registerData.password);
        cy.get(Locators.Registration.passwordConfirmationInput).type(registerData.password);
        cy.get(Locators.Registration.tosCheckbox).check();
        cy.get('button[type="submit"]').click();
        cy.url().should('not.include', '/login');

    })
})