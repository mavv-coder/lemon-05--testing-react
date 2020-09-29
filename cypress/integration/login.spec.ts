describe('login scene specs', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('"user" input should get the focus when clicking on it', () => {
    // Arrange

    // Act
    cy.findByRole('textbox').as('userInput');
    cy.get('@userInput').click();

    // Asert
    cy.get('@userInput').should('have.focus');
  });

  it('"password" input should get the focus when clicking on it', () => {
    // Arrange

    // Act
    cy.findByLabelText('Contraseña *').as('passwordInput');
    cy.get('@passwordInput').click();

    // Asert
    cy.get('@passwordInput').should('have.focus');
  });

  it('"user" input should show error message when blur after clicking on it', () => {
    // Arrange
    const errorMsg = 'Debe informar el campo';

    // Act
    cy.findByRole('textbox').as('userInput');
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
    cy.findByLabelText('Contraseña *').as('passwordInput');
    cy.get('@passwordInput').click();
    cy.get('@passwordInput').blur();

    // Asert
    cy.get(
      'p[class="MuiFormHelperText-root MuiFormHelperText-contained Mui-error"]'
    ).should('have.text', errorMsg);
  });

  it('should show alert when clicking on "login" button with wrong values in the inputs', () => {
    // Arrange
    const userWrongValue = 'John';
    const passwordWrongValue = '12345';

    // Act
    cy.findByRole('textbox').as('userInput');
    cy.findByLabelText('Contraseña *').as('passwordInput');
    cy.findByRole('button').as('loginBtn');
    cy.get('@userInput').type(userWrongValue);
    cy.get('@passwordInput').type(passwordWrongValue);
    cy.get('@loginBtn').click();

    // Asert
    cy.findByRole('alert').should('be.visible');
  });

  it('should navigate to "submodule-list" after clicking "login" button with correct values in both inputs', () => {
    // Arrange
    const user = 'admin';
    const password = 'test';

    // Act
    cy.findByRole('textbox').as('userInput');
    cy.findByLabelText('Contraseña *').as('passwordInput');
    cy.findByRole('button').as('loginBtn');
    cy.get('@userInput').type(user);
    cy.get('@passwordInput').type(password);
    cy.get('@loginBtn').click();

    // Asert
    cy.visit('submodule-list');
  });
});
