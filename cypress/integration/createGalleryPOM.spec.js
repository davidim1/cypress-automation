import { createGalleryPage } from "../page_objects/createGalleryPage";
import { faker } from '@faker-js/faker';
import {loginPage} from '../page_objects/loginPage'


describe ('Create gallery', () => {
    let createGalleryData= {
        title: faker.random.word(),
        description: faker.random.word(),
        images: ('https://picsum.photos/200/300.jpg')
    }
    
    beforeEach('visit login page and login', () => {  
        cy.visit('/login')
        cy.url().should('include', '/login')
        loginPage.emailInput.type('gugagaga@gmail.com');
        loginPage.passwordInput.type('gugagaga1');
        loginPage.submitBtn.click();
        cy.get('a[href="/create"]').click();
    })
    
    it ('Creating a new gallery', () => {
        createGalleryPage.creategallery(
            createGalleryData.title,
            createGalleryData.description,
            createGalleryData.images
        );
        cy.get('button[type="submit"]').contains('Submit').click
    })

    it ('Canceling creation of new gallery', () => {
        createGalleryPage.creategallery(
            createGalleryData.title,
            createGalleryData.description,
            createGalleryData.images
        );
        cy.get('button[type="submit"]').contains('Cancel').click()
    })
})