describe('Upload File', () => {
  beforeEach(() => {
    cy.visit('/file-picker');
    cy.location().should(loc => {
      expect(loc.href).to.eq(`${Cypress.config('baseUrl')}/file-picker`);
    });
  });

  context('Screenshot', () => {
    it('should take a screenshot', () => {
      cy.screenshot();
    });

    it('should take a screenshot after trying to upload a picture', () => {
      cy.get('#photo-upload').attachFile('images/beach.jpeg');
      cy.screenshot();
    });
    it('should fail after uploading an image', () => {
      cy.get('figure img').should('be.visible');
    });
  });
});
