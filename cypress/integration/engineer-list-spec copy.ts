describe('Engineer-list', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200');
    cy.get(':nth-child(1) > .form-control').type('abcde');
    cy.get(':nth-child(2) > .form-control').type('zzz');
    cy.get('.btn').click();
  });

  it('display engineer list', () => {
    cy.get('tbody > :nth-child(1) > .cdk-column-id').contains(1);
    cy.get('tbody > :nth-child(1) > .cdk-column-name').contains('sato');
    cy.get('tbody > :nth-child(1) > .cdk-column-skill').contains('A');
    cy.get('tbody > :nth-child(1) > .cdk-column-status').contains('Working');

    cy.get('tbody > :nth-child(2) > .cdk-column-id').contains(2);
    cy.get('tbody > :nth-child(2) > .cdk-column-name').contains('kato');
    cy.get('tbody > :nth-child(2) > .cdk-column-skill').contains('S');
    cy.get('tbody > :nth-child(2) > .cdk-column-status').contains('Empty');

    cy.get('tbody > :nth-child(3) > .cdk-column-id').contains(3);
    cy.get('tbody > :nth-child(3) > .cdk-column-name').contains('ito');
    cy.get('tbody > :nth-child(3) > .cdk-column-skill').contains('C');
    cy.get('tbody > :nth-child(3) > .cdk-column-status').contains('Working');
  });
  
})

