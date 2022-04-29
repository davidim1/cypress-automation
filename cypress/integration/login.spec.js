/// <reference types="Cypress" />

describe('login test', () => {
    xit('visit gallery app', () => {
        cy.visit('/');
        cy.url().should('include', '/');
    })

    xit ('click on login button', () => {
        cy.get('a[href="/login"]').click();
    })

    it ('login with invalid email', () => {
        cy.visit('/login');
        cy.url().should('include', '/login')
        cy.get('#email').type('gugagagagmail.com');
        cy.get('#password').type('gugagaga1');
        cy.get('button[type="submit"]').click();
    })

    it ('login with invalid password', () => {
        cy.visit('/login');
        cy.url().should('include', '/login')
        cy.get('#email').type('gugagaga@gmail.com');
        cy.get('#password').type('gugagaga');
        cy.get('button[type="submit"]').click();
    })

    it ('login without click on submit', () => {
        cy.visit('/login');
        cy.url().should('include', '/login')
        cy.get('#email').type('gugagaga@gmail.com');
        cy.get('#password').type('gugagaga1');        
    })


    it ('login with valid credentials', () => {
        cy.visit('/login');
        cy.url().should('include', '/login')
        cy.get('#email').type('gugagaga@gmail.com');
        // cy.get('input[id="email"]')
        cy.get('#password').type('gugagaga1');
        cy.get('button[type="submit"]').click();
    })

    it ('logout', () => {
        cy.get("a[class='nav-link nav-buttons']").should('have.length', 3);
        cy.get("a[class='nav-link nav-buttons']").eq(2).click;
    })
})