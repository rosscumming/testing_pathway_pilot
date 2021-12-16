describe('Select', () => {
  beforeEach(() => {
    cy.visit('/select');
    cy.location().should(loc => {
      expect(loc.href).to.eq(`${Cypress.config('baseUrl')}/select`);
    });

    cy.get('#spices-select-single').as('singleSpiceSelect');
    cy.get('#spices-select-multi').as('multiSpiceSelect');
  });

  context('Single Spice Select', () => {
    it('should select a spice option from the dropdown menu', () => {
      cy.get('@singleSpiceSelect')
        .select('Garlic')
        .should('have.value', 'garlic');
    });

    it('should select multiple spices from the multi-select dropdown', () => {
      cy.get('@multiSpiceSelect')
        .select(['Garlic', 'Ginger'])
        .invoke('val')
        .should('deep.equal', ['garlic', 'ginger']);
    });
  });
});
