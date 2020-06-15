import * as loginPo from '../support/po/login.po';

describe('Login', () => {

  beforeEach(() => {
    loginPo.navigatoTo();
    loginPo.valid();
  });

  it('display login', () => {
    cy.matchImageSnapshot('login');
  });

  it('do login', () => {
    cy.get(':nth-child(1) > .form-control').type('abcde');
    cy.get(':nth-child(2) > .form-control').type('zzz');
    cy.get('.btn').click();
    cy.url().should('eq', 'http://localhost:4200/engineer-list');
  });

});
