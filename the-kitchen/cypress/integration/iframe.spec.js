describe('iFrame', () => {
  beforeEach(() => {
    cy.visit('/iframe');
    cy.location().should(loc => {
      expect(loc.href).to.eq(`${Cypress.config('baseUrl')}/iframe`);
    });
  });

  it('should find a table in the iframe', () => {
    cy.get('#the-kitchen-table')
      .its('0.contentDocument.body')
      .then(cy.wrap)
      .find('#fruits-vegetables')
      .should('be.visible');
  });

  it('should find a video in the iframe', () => {
    cy.get('#youtube-table-cypress')
      .its('0.contentDocument.body')
      .then(cy.wrap)
      .find('#player')
      .should('be.visible');
  });
});
