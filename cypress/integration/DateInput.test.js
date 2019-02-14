describe('DateInput', () => {
  beforeEach(() => {
    cy.visit(
      'iframe.html?selectedKind=DateInput%2FIntegration&selectedStory=some%20test'
    );
  });

  describe('Calendar', () => {
    it('can be navigated with arrow keys', () => {
      cy.get('input')
        .type('1/1/2019')
        .should('have.value', '1/1/2019')
        .type('{leftarrow}')
        .should('have.value', '12/31/2018')
        .type('{uparrow}')
        .should('have.value', '12/24/2018')
        .type('{rightarrow}')
        .should('have.value', '12/25/2018')
        .type('{downarrow}')
        .should('have.value', '1/1/2019');
    });

    it('can jump by months', () => {
      cy.get('input').type('1/1/2019');

      cy.get('.js-next-month').click();

      cy.get('input').should('have.value', '2/1/2019');

      cy.get('.js-prev-month').click();

      cy.get('input').should('have.value', '1/1/2019');
    });

    it('can jump by years', () => {
      cy.get('input').type('1/1/2019');

      cy.get('.js-next-year').click();

      cy.get('input').should('have.value', '1/1/2020');

      cy.get('.js-prev-year').click();

      cy.get('input').should('have.value', '1/1/2019');
    });
  });
});
