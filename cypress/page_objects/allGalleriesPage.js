class AllGalleriesPage {
    get allGalleriesHeading(){
        return cy.get('h1');
    }

    get searchBox() {
        return cy.get('input')
    }

    get filterBtn() {
        return cy.get('button[class="btn btn-outline-secondary input-button"]')
    }

    get loadMoreBtn() {
        return cy.get('button[class="btn btn-custom"]')
    }

    get clickGalleryUrl() {
        return cy.get('a[class="box-title"]').eq(0)
    }

    get singleGallery() {
        return cy.get('.cell');
    }

    search(searchTerm) {
        this.searchBox.type(searchTerm);
        this.filterBtn.click();
    }

    allgalleries(search){
        this.clickGalleryUrl.click();
        cy.visit('/');
        this.loadMoreBtn.click();
        this.searchBox.type(search);
        this.filterBtn.click();
    }
}

export const allGalleriesPage = new AllGalleriesPage