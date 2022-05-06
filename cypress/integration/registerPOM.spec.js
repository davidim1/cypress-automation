import {registerPage} from '../page_objects/registerPage'
import { faker } from '@faker-js/faker';


describe('registration POM', () => {
    let registerData = {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            randomEmail: faker.internet.email(),
            password: faker.internet.password(20, true, /[A-Z]/, '888 ')
        }
    before('visit register page', () => {
        cy.visit('/register');
        cy.url().should('include', '/register')
    })

    it ('register with invalid data', () => {
        cy.intercept({
            method: 'POST',
            url: 'https://gallery-api.vivifyideas.com/api/auth/register'
        }).as('unsuccessfulRegister');

        cy.visit('/register');
        cy.url().should('contains', '/register');
        registerPage.registerHeading.should('have.text', 'Register');
        registerPage.register('Danilo', 'Motika', 'danilomotika@gmailcom', 'D12345678');

        cy.wait('@unsuccessfulRegister').then(interception => {
            console.log('RESPONSE', interception)
            expect(interception.response.statusCode).eq(422)
            expect(interception.response.statusMessage).eq('Unprocessable Entity');
        })
        registerPage.errorMsg.should('be.visible')
        .and('have.text', 'The email must be a valid email address.')
        .and('have.css','border-color', 'rgb(245, 198, 203)');
    })    
    
    xit ('register with valid data', () => {
    // cy.visit('/register');
    // registerPage.firtNameInput.type('David');
    // registerPage.lastNameInput.type('Mijatovic');
    // registerPage.emailInput.type('milan@gmail.com');
    // registerPage.password.type('gu123456');
    // registerPage.passwordConfirmationInput.type('gu12345');
    // registerPage.submitBtn.click()

    registerPage.register(
        registerData.firstName,
        registerData.lastName,
        registerData.randomEmail,
        registerData.password
    )

})
})