class CreateGalleryPage {
    get titleField() {
        return cy.get('#title.form-control')
    }

    get descriptionsField() {
        return cy.get('#description')
    }

    get imagesField() {
        return cy.get('input[class="form-control"]').eq(2)
    }

    get addImageBtn() {
        return cy.get('button[type="button"]')
    }

    get imagesField2() {
        return cy.get('input[class="form-control"]').eq(3)
    }

    get arrowUpBtn() {
        return cy.get('i[class="fas fa-chevron-circle-up"]')
    }

    get arrowDownBtn() {
        return cy.get('i[class="fas fa-chevron-circle-down"]')
    }

    get deleteImageUrl() {
        return cy.get('i[class="fas fa-trash"]')
    }

    get submitBtn() {
        return cy.get('button[class="btn btn-custom"]').eq(0)
    }

    get cancelBtn() {
        return cy.get('button[class="btn btn-custom"]').eq(1)
    }

    get logoutBtn() {
        return cy.get('a[class="nav-link nav-buttons"]')
    }


    creategallery(title, description, image) {
        this.titleField.type(title);
        this.descriptionsField.type(description);
        this.imagesField.type(image);
        // this.addImageBtn.click({ multiple: true });
        // this.imagesField2.type(image);
        // this.arrowUpBtn.click({ multiple: true });
        // this.arrowDownBtn.click({ multiple: true });        
    }

    createEmptyGallery(title, description) {
        this.titleField.type(title)
        this.descriptionsField.type(description);
        
    }
}
export const createGalleryPage = new CreateGalleryPage