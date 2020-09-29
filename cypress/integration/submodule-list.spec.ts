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

  xit('should hide left drawer when clicking anywhere except for "menu" button', () => {
    // Arrange
    // Act
    // Assert
  });

  it('should display user menu when clicking on "userMenu" button', () => {
    // Arrange

    // Act
    cy.findByRole('button', { name: 'userMenu' }).as('menuBtn');
    cy.get('@menuBtn').click();

    // Assert
    cy.findByRole('menu').should('be.visible');
  });

  it('should navigate to "/login" when clicking on "Cerrar sesión" button in "userMenu"', () => {
    // Arrange

    // Act
    cy.findByRole('button', { name: 'userMenu' }).as('menuBtn');
    cy.get('@menuBtn').click();
    cy.findByRole('menuitem', { name: 'Cerrar sesión' }).as('logoutBtn');
    cy.get('@logoutBtn').click();

    // Assert
    cy.url().should('equal', 'http://localhost:8080/#/login');
  });

  xit('should hide user menu when clicking anywhere except for "menu" button', () => {
    // Arrange
    // Act
    // Assert
  });

  it('should navigate to "/projects"  when clicking on "Proyectos" link', () => {
    // Arrange

    // Act
    cy.findByRole('link', { name: 'Proyectos' }).as('projectLink');
    cy.get('@projectLink').click();

    // Assert
    cy.url().should('equal', 'http://localhost:8080/#/projects');
  });

  it('should navigate to "/employees"  when clicking on "Proyectos" link', () => {
    // Arrange

    // Act
    cy.findByRole('link', { name: 'Empleados' }).as('employeeLink');
    cy.get('@employeeLink').click();

    // Assert
    cy.url().should('equal', 'http://localhost:8080/#/employees');
  });

  xit('should navigate to "https://lemoncode.net/"  when clicking on "Lemoncode" footer link', () => {
    // Arrange

    // Act
    cy.findByRole('link', { name: 'Lemoncode' }).as('lemoncodeLink');
    cy.get('@lemoncodeLink').click();

    // Assert
    cy.url().should('equal', 'https://lemoncode.net/');
  });
});
