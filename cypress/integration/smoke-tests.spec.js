/// <reference types="Cypress" />

describe("ChmodChamp Smoke Tests", () => {
    let DEFAULT_VALUES = {};

    before(() => {
        cy.visit('http://localhost:4200');
        cy.fixture('defaultValues').then(values => DEFAULT_VALUES = values);
    });

    it('Should have the title of the website in the body of the website', () => {
        cy.get('h1').should('have.text', DEFAULT_VALUES.siteTitle);
    });

    it('Should have an input field with a default value', () => {
        cy.get('input').should('have.value', DEFAULT_VALUES.permissionOctal);
    });

    it('Should have a text field with a default value', () => {
        cy.get('p[id="permissionSymbols"]').should('have.text', DEFAULT_VALUES.permissionSymbols);    
    });

    it('Should have a table with buttons that are blue via the Bootstrap class btn-primary', () => {
        cy.get('table[id="permissionToggleTable"').within(() => {
            cy.get('button[id="ownerReadBtn"]').should('have.class', 'btn btn-primary');
            cy.get('button[id="ownerWriteBtn"]').should('have.class', 'btn btn-primary');
            cy.get('button[id="ownerExecuteBtn"]').should('have.class', 'btn btn-primary');
            cy.get('button[id="groupReadBtn"]').should('have.class', 'btn btn-primary');
            cy.get('button[id="groupExecuteBtn"]').should('have.class', 'btn btn-primary');
            cy.get('button[id="otherExecuteBtn"]').should('have.class', 'btn btn-primary');
        })
    });
})