/// <reference types = "cypress" />


// All tests 1-3 steps
Cypress.Commands.add('launchBrowserNavigateHome', () => {
    cy.visit('/');
    cy.get('#slider-carousel > .carousel-inner').should('be.visible');
});

Cypress.Commands.add('registerUser', (username, email, password) => {
    // Navigate to login page and fill primary new user info
    cy.get('.nav').contains('Signup / Login').click();
    cy.get('.signup-form > h2').contains('New User Signup!').should('be.visible');
    cy.get('.signup-form input[data-qa="signup-name"]').type(username);
    cy.get('.signup-form input[data-qa="signup-email"]').type(email);
    cy.get('.signup-form button[data-qa="signup-button"]').click();

    // Fill secondary new user info in /signup page
    cy.get('.login-form > h2.title.text-center').should('be.visible').and('have.text', 'Enter Account Information');
    cy.get('input[name="password"]').type(password);
    cy.get('input[name="first_name"]').type('John');
    cy.get('input[name="last_name"]').type('Doe');
    cy.get('input[name="address1"]').type('1235 Street');
    cy.get('select[name="country"]').select('Canada');
    cy.get('input[name="state"]').type('Toronto');
    cy.get('input[name="city"]').type('Toronto');
    cy.get('input[name="zipcode"]').type('90210');
    cy.get('input[name="mobile_number"]').type('+37060012345');

    // Form submit and exit to home page
    cy.get('button[type="submit"]').contains('Create Account').click();
    cy.get('h2.title.text-center').should('be.visible').and('have.text', 'Account Created!');
    cy.get('[data-qa="continue-button"]').contains('Continue').click();
})

Cypress.Commands.add('loginUser', (email, password) => {
    cy.get('input[data-qa="login-email"]').type(email);
    cy.get('input[data-qa="login-password"]').type(password);
    cy.get('button[data-qa="login-button"]').click();
});

Cypress.Commands.add('loginOrRegisterAndLoginUser', (username, email, password) => {
    // Check or Email Address exist
    cy.get('.signup-form input[data-qa="signup-name"]').type(username);
    cy.get('.signup-form input[data-qa="signup-email"]').type(email);
    cy.get('.signup-form button[data-qa="signup-button"]').click();
    // Login or Register
    cy.get('form > p').then((el) => {
        if (el.text().includes('Email Address already exist!')) {
            // Email already exists, proceed with login
            cy.loginUser(email, password);
        } else {
            // Register the user
            cy.registerUser(username, email, password);
            cy.get('.nav').contains('Logout').click();
            cy.get('.nav').contains('Signup / Login').click();
            cy.loginUser(email, password);
        }
    });
});

// Cypress.Commands.add('loginAndDeleteUser', (username, email, password) => {
//     cy.loginUser(username, email, password);
//     cy.get('.nav').contains('Delete Account').click();
//     cy.get('h2[data-qa="account-deleted"]').should('be.visible').and('have.text', 'Account Deleted!');
//     cy.get('[data-qa="continue-button"]').contains('Continue').click();
// })

Cypress.Commands.add('deleteUser', () => {
    cy.get('.nav').contains('Delete Account').click();
    cy.get('h2[data-qa="account-deleted"]').should('be.visible').and('have.text', 'Account Deleted!');
    cy.get('[data-qa="continue-button"]').contains('Continue').click();
    cy.get('#slider-carousel > .carousel-inner').should('be.visible');
})

