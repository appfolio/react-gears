describe('HasManyFields', () => {
  beforeEach(() => {
    cy.visit(
      'iframe.html?selectedKind=HasManyFields%2FIntegration&selectedStory=some%20test'
    );
  });

  it('can add new rows', () => {
    cy.contains('Add an Address')
      .siblings()
      .as('rows')
      .should('have.length', 1);

    cy.get('@rows')
      .first()
      .find('input')
      .first()
      .clear()
      .type('address 1');

    cy.contains('Add an Address').click();

    cy.get('@rows').should('have.length', 2);

    cy.get('@rows')
      .last()
      .find('input')
      .first()
      .clear()
      .type('address 2');

    cy.get('@rows')
      .first()
      .find('.icon-times-circle-o')
      .click();

    cy.get('@rows')
      .first()
      .contains('Delete')
      .click();

    cy.get('@rows').should('have.length', 1);

    cy.get('@rows')
      .first()
      .find('input')
      .first()
      .should('have.value', 'address 2');
  });
});
