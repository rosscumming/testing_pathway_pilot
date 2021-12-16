describe('API', () => {
  beforeEach(() => {
    cy.visit('/api');
    cy.location().should(loc => {
      expect(loc.href).to.eq(`${Cypress.config('baseUrl')}/api`);
    });
  });

  it('should find recipes in the list', () => {
    cy.request('https://kitchen.applitools.com/api/recipes').then(res => {
      const { data } = res.body;
      cy.get('#recipes-list li').each(($el, i) => {
        cy.wrap($el).find('h4').contains(data[i].title);
        cy.wrap($el).find('img').should('have.attr', 'src', data[i].image);
      });
    });
  });
});
