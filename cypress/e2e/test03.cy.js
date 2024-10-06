/// <reference types = "cypress" />

describe('Register User with existing email', () => {
    it('should not let register with already registered email address', () => {
        // 1-3. Launch browser, navigate to url 'http://automationexercise.com', verify that home page is visible successfully:
        cy.launchBrowserNavigateHome();

        // 4. Click on 'Signup / Login' button
        cy.get('.nav').contains('Signup / Login').click();

        // 5. Verify 'New User Signup!' is visible
        cy.get('.signup-form > h2').contains('New User Signup!').should('be.visible');

        cy.fixture('user').then((fakeUser) => {
            const { username, email, password } = fakeUser.user;

            // Check or Email Address exist
            cy.get('.signup-form input[data-qa="signup-name"]').type(username);
            cy.get('.signup-form input[data-qa="signup-email"]').type(email);
            cy.get('.signup-form button[data-qa="signup-button"]').click();

            // 6. Enter name and already registered email address
            // 7. Click 'Signup' button
            // 8. Verify error 'Email Address already exist!' is visible
            cy.get('form > p').then((el) => {
                if (el.text().includes('Email Address already exist!')) {
                    cy.get('form > p').contains('Email Address already exist!');
                } else {
                    // Register the user
                    cy.registerUser(username, email, password);
                    cy.get('.signup-form input[data-qa="signup-name"]').type(username);
                    cy.get('.signup-form input[data-qa="signup-email"]').type(email);
                    cy.get('.signup-form button[data-qa="signup-button"]').click();
                    cy.get('form > p').contains('Email Address already exist!');
                }
            });
        });
    });
});