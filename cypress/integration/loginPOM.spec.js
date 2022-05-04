import {loginPage} from '../page_objects/loginPage'

describe('login POM', () => {
    it ('login with invalid data', () => {
        cy.visit('/login');
        cy.url().should('contains', '/login');
        loginPage.loginHeading.should('have.text', 'Please login');
        loginPage.login('gugagaga@gmail.com', 'gugagaga11');
        loginPage.errorMsg.should('be.visible')
            .and('have.text', 'Bad Credentials')
            .and('have.css', 'background-color', 'rgb(248, 215, 218)');
        cy.url().should('include', '/login');

       
    })













    xit ('login with valid data', () => {
        cy.visit('/login');
        cy.url().should('contains', '/login');
        loginPage.loginHeading.should('have.text', 'Please login');
        loginPage.login('gugagaga@gmail.com', 'gugagaga1');
        // loginPage.emailInput.type('gugagaga@gmail.com');
        // loginPage.passwordInput.type('gugagaga1');
        // loginPage.submitBtn.click();

        // loginPage.login('gugagaga@gmail.com','gugagaga1')
    })
})