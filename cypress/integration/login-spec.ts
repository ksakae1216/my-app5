describe('Login', () => {

  beforeEach(() => {
    const baseUrl = 'http://localhost:4200';
    cy.visit(baseUrl);
  });

  it('display login', () => {
    cy.contains('TestApli(my-app5)');
  });

  it('do login', () => {
    cy.get(':nth-child(1) > .form-control').type('abcde');
    cy.get(':nth-child(2) > .form-control').type('zzz');
    cy.get('.btn').click();
    cy.url().should('eq', 'http://localhost:4200/engineer-list');
  });

});
