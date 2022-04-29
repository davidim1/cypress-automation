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
    

    it ('register with valid data', () => {
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