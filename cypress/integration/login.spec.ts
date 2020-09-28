describe('login scene specs', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('user input should get the focus when clicking on it', () => {
    // Arrange

    // Act
    cy.get('input[name="user"]').click();

    // Asert
    cy.get('input[name="user"]').should('have.focus');
  });

  it('user input should get the focus when clicking on it', () => {
    // Arrange

    // Act
    cy.get('input[name="password"]').click();

    // Asert
    cy.get('input[name="password"]').should('have.focus');
  });
});
