describe('login scene specs', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('"user" input should get the focus when clicking on it', () => {
    // Arrange

    // Act
    cy.get('input[name="user"]').click();

    // Asert
    cy.get('input[name="user"]').should('have.focus');
  });

  it('"password" input should get the focus when clicking on it', () => {
    // Arrange

    // Act
    cy.get('input[name="password"]').click();

    // Asert
    cy.get('input[name="password"]').should('have.focus');
  });

  it('"user" input should show error message "Debe informar el campo" when blur after clicking on it', () => {
    // Arrange
    const errorMsg = 'Debe informar el campo';

    // Act
    cy.get('input[name="user"]').click();
    cy.get('input[name="user"]').blur();

    // Asert
    cy.get(
      'p[class="MuiFormHelperText-root MuiFormHelperText-contained Mui-error"]'
    ).should('have.text', errorMsg);
  });

  it('"password" input should show error message "Debe informar el campo" when blur after clicking on it', () => {
    // Arrange
    const errorMsg = 'Debe informar el campo';

    // Act
    cy.get('input[name="password"]').click();
    cy.get('input[name="password"]').blur();

    // Asert
    cy.get(
      'p[class="MuiFormHelperText-root MuiFormHelperText-contained Mui-error"]'
    ).should('have.text', errorMsg);
  });
});
