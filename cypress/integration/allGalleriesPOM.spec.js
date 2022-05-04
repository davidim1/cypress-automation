import{allGalleriesPage} from '../page_objects/allGalleriesPage'
import { faker } from '@faker-js/faker';


describe ('All galleries', () => {
    let searchFieldText= {
        searchField: faker.random.word()  
    }
    
    beforeEach('visit all galleries page', () => {    
        cy.visit('/');    
        cy.url().should('not.include', '/register');
    })

    it ('validate page',() => {
        allGalleriesPage.allGalleriesHeading
           .should('be.visible')
           .and('have.text', 'All Galleries')
    })  

    it ('all galleries displaying correctly', () => {
        allGalleriesPage.singleGallery
           .should('be.visible')
           .and('have.length', 10)
    })

    it ('10 more galleries loading', () => {
        allGalleriesPage.singleGallery.should('have.length', 10);
        allGalleriesPage.loadMoreBtn.click();
        allGalleriesPage.singleGallery.should('have.length', 20);
        allGalleriesPage.loadMoreBtn.click();
        allGalleriesPage.singleGallery.should('have.length', 30);
        allGalleriesPage.loadMoreBtn.click();
        allGalleriesPage.singleGallery.should('have.length', 40);
    })

    it ('redirect to single gallery page', () => {
        allGalleriesPage.singleGallery
           .first()
           .find('a')
           .first()
           .click();
        cy.url().should('include','/galleries')
    })

    it ('redirect to author\'s gallery page', () => {
        allGalleriesPage.singleGallery
           .first()
           .find('a')
           .last()
           .click();
        cy.url().should('include','/authors')
    })

    it ('search returning correct results', () => {
        let searchTerm = 'Product Security Architect'

        allGalleriesPage.singleGallery.should('have.length', 10);
        allGalleriesPage.search('Product Security Architect');
        allGalleriesPage.singleGallery.should('have.length', 1);
        allGalleriesPage.singleGallery
           .find('a')
           .first()
           .should('include', searchTerm)
    })
    
    xit ('All galleries search function', () => {
        allGalleriesPage.allgalleries(
            searchFieldText.searchField
        )
    })
})