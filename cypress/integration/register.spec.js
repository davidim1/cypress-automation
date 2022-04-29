/// <reference types="Cypress" />
import { faker } from '@faker-js/faker';



describe('test register', () => {
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
    

    xit ('register with empty first-name', () => {
        cy.visit('/register');
        cy.url().should('include', '/register');
        cy.get('#first-name').type('');
        cy.get('#last-name').type('Motika');
        cy.get('#email').type('johnmotika@gmail.com');
        cy.get('#password').type('john1234');
        cy.get('#password-confirmation').type('john1234');
        cy.get('.form-check-input').check();
        cy.get('button[type="submit"]').click();
    })

    xit ('register with empty last-name', () => {
        cy.visit('/register');
        cy.url().should('include', '/register');
        cy.get('#first-name').type('John');
        cy.get('#last-name').type('');
        cy.get('#email').type('johnmotika@gmail.com');
        cy.get('#password').type('john1234');
        cy.get('#password-confirmation').type('john1234');
        cy.get('.form-check-input').check();
        cy.get('button[type="submit"]').click();
    })

    xit ('register with invalid email', () => {
        cy.visit('/register');
        cy.url().should('include', '/register');
        cy.get('#first-name').type('John');
        cy.get('#last-name').type('Motika');
        cy.get('#email').type('johnmotikagmail.com');
        cy.get('#password').type('john1234');
        cy.get('#password-confirmation').type('john1234');
        cy.get('.form-check-input').check();
        cy.get('button[type="submit"]').click();
    })

    xit ('register with invalid password', () => {
        cy.visit('/register');
        cy.url().should('include', '/register');
        cy.get('#first-name').type('John');
        cy.get('#last-name').type('Motika');
        cy.get('#email').type('johnmotika@gmail.com');
        cy.get('#password').type('johnjohn');
        cy.get('#password-confirmation').type('johnjohn');
        cy.get('.form-check-input').check();
        cy.get('button[type="submit"]').click();
    })

    xit ('register with invalid confirmation-password', () => {
        cy.visit('/register');
        cy.url().should('include', '/register');
        cy.get('#first-name').type('John');
        cy.get('#last-name').type('Motika');
        cy.get('#email').type('johnmotika@gmail.com');
        cy.get('#password').type('john1234');
        cy.get('#password-confirmation').type('john12345');
        cy.get('.form-check-input').check();
        cy.get('button[type="submit"]').click();
    })

    xit ('register without accepting terms', () => {
        cy.visit('/register');
        cy.url().should('include', '/register');
        cy.get('#first-name').type('John');
        cy.get('#last-name').type('Motika');
        cy.get('#email').type('johnmotika@gmail.com');
        cy.get('#password').type('john1234');
        cy.get('#password-confirmation').type('john1234');
        cy.get('button[type="submit"]').click();
    })

    it('register with valid data', () => {
        cy.visit('/register');
        cy.url().should('include', '/register');
        cy.get('#first-name').type('John');
        cy.get('#last-name').type('Motika');
        cy.get('#email').type(randomEmail);
        cy.get('#password').type('john1234');
        cy.get('#password-confirmation').type('john1234');
        cy.get('.form-check-input').check();
        cy.get('button[type="submit"]').click();
    })

})