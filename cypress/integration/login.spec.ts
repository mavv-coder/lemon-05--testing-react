describe('login scene specs', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('"user" input should get the focus when clicking on it', () => {
    // Arrange

    // Act
    cy.get('input[name="user"]').as('userInput');
    cy.get('@userInput').click();

    // Asert
    cy.get('@userInput').should('have.focus');
  });

  it('"password" input should get the focus when clicking on it', () => {
    // Arrange

    // Act
    cy.get('input[name="password"]').as('passwordInput');
    cy.get('@passwordInput').click();

    // Asert
    cy.get('@passwordInput').should('have.focus');
  });

  it('"user" input should show error message when blur after clicking on it', () => {
    // Arrange
    const errorMsg = 'Debe informar el campo';

    // Act
    cy.get('input[name="user"]').as('userInput');
    cy.get('@userInput').click();
    cy.get('@userInput').blur();

    // Asert
    cy.get(
      'p[class="MuiFormHelperText-root MuiFormHelperText-contained Mui-error"]'
    ).should('have.text', errorMsg);
  });

  it('"password" input should show error message when blur after clicking on it', () => {
    // Arrange
    const errorMsg = 'Debe informar el campo';

    // Act
    cy.get('input[name="password"]').as('passwordInput');
    cy.get('@passwordInput').click();
    cy.get('@passwordInput').blur();

    // Asert
    cy.get(
      'p[class="MuiFormHelperText-root MuiFormHelperText-contained Mui-error"]'
    ).should('have.text', errorMsg);
  });
});
