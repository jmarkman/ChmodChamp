/// <reference types="Cypress" />

describe('ChmodChamp Core Function Tests', () => {
    let DEFAULT_VALUES = {};

    before(() => {
        cy.visit('http://localhost:4200');
        cy.fixture('defaultValues').then(defaults => DEFAULT_VALUES = defaults);
    });

    it('Should have dashes for all permission symbols in the permission field when the input field is empty', () => {
        cy.get('input').clear();
        cy.get('p[id="permissionSymbols"]').should('have.text', '----------');
    });

    it('Should have greyed-out buttons in the permission table when the input field is empty', () => {
        cy.get('input').clear();

        cy.fixture('elementIds').then((ids) => {
            cy.get('table[id="permissionToggleTable"').within(() =>  {
                let buttonArr = ids.buttons;

                for (let i = 0; i < buttonArr.length; i++) {
                    cy.get(`button[id=${buttonArr[i]}]`).should('have.class', 'btn btn-light');
                }
            });
        });
    });

    it('Should correctly update the permission symbols when the input field is changed to a valid value', () => {
        cy.get('input').clear().type(DEFAULT_VALUES.chmod777);

        cy.get('p[id="permissionSymbols"]').should('have.text', '-rwxrwxrwx');
    });

    it('Should correctly update the permission octal value when the buttons in the permission table are toggled', () => {
        cy.fixture('elementIds').then((ids) => {
            cy.get('table[id="permissionToggleTable"').within(() =>  {
                let buttonArr = ids.buttons.filter(b => b.includes("group"));

                for (let i = 0; i < buttonArr.length; i++) {
                    cy.get(`button[id=${buttonArr[i]}]`).click();
                }
            });
        });

        cy.get('input').should('have.value', '707');
    });
});
