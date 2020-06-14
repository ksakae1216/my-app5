import * as common from './common.po';

export const navigatoTo = () => cy.visit(common.baseUrl);

export const getContent = () => cy.get('.js-content-login');

export const valid = () => {
    getContent().should('be.visible');
};
