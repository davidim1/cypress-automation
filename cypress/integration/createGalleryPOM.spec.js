import { createGalleryPage } from "../page_objects/createGalleryPage";
import { faker } from '@faker-js/faker';
import {loginPage} from '../page_objects/loginPage';
import{allGalleriesPage} from '../page_objects/allGalleriesPage'


describe ('Create gallery', () => {
    let createGalleryData= {
        title: faker.random.word(),
        description: faker.random.word(),
        images: ('https://picsum.photos/200/300.jpg')
    }
    
    beforeEach('visit login page and login', () => {  
        cy.visit('/login');
        cy.url().should('include', '/login');
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
        createGalleryPage.descriptionsField.should('be.visible');
        createGalleryPage.imagesField2.should('not.exist');
        createGalleryPage.deleteImageUrl.should('not.exist');
        createGalleryPage.submitBtn.click();
        cy.url().should('include','/');
        allGalleriesPage.singleGallery.should('have.length', 10);
        createGalleryPage.logoutBtn.should('be.visible');
    })

    it ('Canceling creation of new gallery', () => {
        createGalleryPage.creategallery(
            createGalleryData.title,
            createGalleryData.description,
            createGalleryData.images
        );
        createGalleryPage.imagesField2.should('not.exist');
        createGalleryPage.deleteImageUrl.should('not.exist');
        createGalleryPage.cancelBtn.click();
        cy.url().should('include','/');
        allGalleriesPage.singleGallery.should('have.length', 10);
        createGalleryPage.logoutBtn.should('be.visible');
    })

    it ('Adding more images and creating gallery', () => {
        createGalleryPage.creategallery(
            createGalleryData.title,
            createGalleryData.description,
            createGalleryData.images
        );
        createGalleryPage.addImageBtn.click({ multiple: true });
        createGalleryPage.imagesField2.type(createGalleryData.images);
        createGalleryPage.deleteImageUrl.should('be.visible')
        createGalleryPage.submitBtn.click();
        cy.url().should('include','/');
        allGalleriesPage.singleGallery.should('have.length', 10);
        createGalleryPage.logoutBtn.should('be.visible');
    })

    it ('Moving url fields up and down and creating gallery', () => {
        createGalleryPage.creategallery(
            createGalleryData.title,
            createGalleryData.description,
            createGalleryData.images
        );
        createGalleryPage.addImageBtn.click({ multiple: true });
        createGalleryPage.imagesField2.should('be.visible')
        createGalleryPage.imagesField2.type(createGalleryData.images);
        createGalleryPage.arrowUpBtn.click({ multiple: true })
            .should('be.visible');
        createGalleryPage.arrowDownBtn.click({ multiple: true })
            .should('be.visible');
        createGalleryPage.submitBtn.click();
        cy.url().should('include','/');
        allGalleriesPage.singleGallery.should('have.length', 10);
        createGalleryPage.logoutBtn.should('be.visible');
    })

    it ('Deleting first image and creating gallery', () => {
        createGalleryPage.creategallery(
            createGalleryData.title,
            createGalleryData.description,
            createGalleryData.images
        );
        createGalleryPage.addImageBtn.click({ multiple: true });
        createGalleryPage.imagesField2.type(createGalleryData.images);
        createGalleryPage.deleteImageUrl.eq(0).click()
        createGalleryPage.submitBtn.click();
        cy.url().should('include','/');
        allGalleriesPage.singleGallery.should('have.length', 10);
        createGalleryPage.logoutBtn.should('be.visible');
        
    })

    it ('Deleting last image and creating gallery', () => {
        createGalleryPage.creategallery(
            createGalleryData.title,
            createGalleryData.description,
            createGalleryData.images
        );
        createGalleryPage.addImageBtn.click({ multiple: true });
        createGalleryPage.imagesField2.type(createGalleryData.images);
        createGalleryPage.deleteImageUrl.last().click()
        createGalleryPage.submitBtn.click();
        cy.url().should('include','/');
        allGalleriesPage.singleGallery.should('have.length', 10);
        createGalleryPage.logoutBtn.should('be.visible');
        
    })


})