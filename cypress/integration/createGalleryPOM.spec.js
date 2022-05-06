import { createGalleryPage } from "../page_objects/createGalleryPage";
import { faker } from '@faker-js/faker';
import{allGalleriesPage} from '../page_objects/allGalleriesPage'


describe ('Create gallery', () => {
    let galleryId;
    let createGalleryData= {
        title: faker.random.word(),
        description: faker.random.word(),
        images: ('https://picsum.photos/200/300.jpg')
    }
    
    beforeEach('visit login page and login', () => {  
        cy.loginViaBackend();
        cy.visit('/create')
        // })
        // cy.visit('/login');
        // cy.url().should('include', '/login');
        // loginPage.emailInput.type('gugagaga@gmail.com');
        // loginPage.passwordInput.type('gugagaga1');
        // loginPage.submitBtn.click();
        // cy.get('a[href="/create"]').click();
    })
    
    it ('Creating a new gallery', () => {
        cy.intercept({
            method: 'POST',
            url: 'https://gallery-api.vivifyideas.com/api/galleries'
        }).as('createGallery');

        createGalleryPage.creategallery(
            createGalleryData.title,
            createGalleryData.description,
            createGalleryData.images
        );
     
        createGalleryPage.descriptionsField.should('be.visible');
        createGalleryPage.titleField.should('have.text', '');
        createGalleryPage.imagesField2.should('not.exist');
        createGalleryPage.deleteImageUrl.should('not.exist');
        createGalleryPage.submitBtn.click();

        cy.wait('@createGallery').then(interception => {
            galleryId = interception.response.body.id;

            cy.visit(`/galleries/${galleryId}`)
        })

        cy.url().should('include','/');
        createGalleryPage.logoutBtn.should('be.visible');
    })

    it ('Create invalid gallery', () => {
        cy.intercept({
            method: 'POST',
            url: 'https://gallery-api.vivifyideas.com/api/galleries'
        }).as('createInvalidDataGallery');

        createGalleryPage.createEmptyGallery(
            createGalleryData.title,
            createGalleryData.description
        );
        createGalleryPage.imagesField.type('https://cdn.britannica.com/55/2155-050-604F5A4A/lion')
     
        createGalleryPage.descriptionsField.should('be.visible');
        createGalleryPage.titleField.should('have.text', '');
        createGalleryPage.imagesField2.should('not.exist');
        createGalleryPage.deleteImageUrl.should('not.exist');
        createGalleryPage.submitBtn.click();

        cy.wait('@createInvalidDataGallery').then(interception => {
            expect(interception.response.statusCode).eq(422)           
        })

        cy.url().should('include','/');
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