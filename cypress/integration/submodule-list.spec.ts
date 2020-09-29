describe('submodule-list scene specs', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.findByRole('textbox').as('userInput');
    cy.findByLabelText('Contraseña *').as('passwordInput');
    cy.findByRole('button').as('loginBtn');
    cy.get('@userInput').type('admin');
    cy.get('@passwordInput').type('test');
    cy.get('@loginBtn').click();
  });

  it('should display left drawer when clicking on "menu" button', () => {
    // Arrange

    // Act
    cy.findByRole('button', { name: 'menu' }).as('menuBtn');
    cy.get('@menuBtn').click();

    // Assert
    cy.findByRole('list').should('be.visible');
  });
});
