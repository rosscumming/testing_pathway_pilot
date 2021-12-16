describe('Alert', () => {
  beforeEach(() => {
    cy.visit('/alert');
    cy.location().should(loc => {
      expect(loc.href).to.eq(`${Cypress.config('baseUrl')}/alert`);
    });

    cy.get('#alert').as('alertBtn');
    cy.get('#confirm').as('confirmBtn');
    cy.get('#prompt').as('promptBtn');
  });

  context('Trigger an Alert button', () => {
    it(`should click the 'Trigger an Alert' button`, () => {
      cy.get('@alertBtn').contains('Trigger an Alert').click();
    });

    it(`should show an alert message stating 'Airfryers can make anything!' when the 'Trigger an Alert' button is clicked`, () => {
      cy.get('@alertBtn').contains('Trigger an Alert').click();
      cy.on('window:alert', str => {
        expect(str).to.contains('Airfryers can make anything!');
      });
    });
  });

  context('Trigger a Confirmation button', () => {
    it(`should click the 'Trigger a Confirmation' button`, () => {
      cy.get('@confirmBtn').contains('Trigger a Confirmation').click();
    });

    it(`should show a confirmation message stating 'Proceed with adding garlic?' when the 'Trigger a Confirmation' button is clicked`, () => {
      cy.get('@confirmBtn').contains('Trigger a Confirmation').click();
      cy.on('window:confirm', str => {
        expect(str).to.contains('Proceed with adding garlic?');
      });
    });
  });

  context('Trigger a Prompt', () => {
    it(`should click the 'Trigger a Prompt' button, prompt for a message, and cancel`, () => {
      cy.window().then(win => {
        cy.stub(win, 'prompt').callsFake(() => null);
        cy.get('@promptBtn').contains('Trigger a Prompt').click();
        cy.get('#prompt-answer').contains('Answer: Cancelled');
      });
    });

    it(`should click the 'Trigger a Prompt' button, prompt for a message, and return 'Apple`, () => {
      cy.window().then(win => {
        cy.stub(win, 'prompt').returns('Apple');
        cy.get('@promptBtn').contains('Trigger a Prompt').click();
        cy.get('#prompt-answer').contains('Answer: Apple');
      });
    });
  });
});
