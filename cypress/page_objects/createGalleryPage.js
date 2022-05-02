class CreateGalleryPage {
    get titleField() {
        return cy.get('#title.form-control')
    }

    get descriptionsField() {
        return cy.get('#description')
    }

    get imagesField() {
        return cy.get('input[placeholder="image url"]')
    }

    get addImageBtn() {
        return cy.get('button[type="button"]')
    }

    get imagesField2() {
        return cy.get('input[placeholder="image url"]').eq(1)
    }

    get arrowUpBtn() {
        return cy.get('i[class="fas fa-chevron-circle-up"]')
    }

    get arrowDownBtn() {
        return cy.get('i[class="fas fa-chevron-circle-down"]')
    }

    get submitBtn() {
        return cy.get('button[type="submit"]').contains('Submit')
    }

    get cancelBtn() {
        return cy.get('button[type="submit"]').contains('Cancel')
    }

    creategallery(title, description, image) {
        this.titleField.type(title);
        this.descriptionsField.type(description);
        this.imagesField.type(image);
        this.addImageBtn.click({ multiple: true });
        this.imagesField2.type(image);
        this.arrowUpBtn.click({ multiple: true });
        this.arrowDownBtn.click({ multiple: true });        
    }
}
export const createGalleryPage = new CreateGalleryPage