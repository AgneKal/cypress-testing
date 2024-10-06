# 🌐 Automation Exercise Testing with Cypress

[![Cypress](https://img.shields.io/badge/Tested%20with-Cypress-04C38E?style=flat-square&logo=cypress&logoColor=white)](https://www.cypress.io)

Automated end-to-end testing for [Automation Exercise](https://www.automationexercise.com) using Cypress.

## 📖 About

This project contains Cypress tests for the [Automation Exercise](https://www.automationexercise.com) website. The goal is to automate UI testing, ensuring key functionalities of the website perform as expected.

---

## 🚀 Prerequisites

Make sure you have the following installed before starting:

-   [Node.js](https://nodejs.org/)
-   [Git](https://git-scm.com)

---

## 🔧 Installation

Clone the repository and install the required dependencies:

```bash
git clone https://github.com/AgneKal/cypress-testing.git
cd your-repository-name
npm install
```

---

## ▶️ Running Tests

To run Cypress tests, execute the following command:

```bash
npm run test
```

This will launch the Cypress Test Runner, where you can run individual test files. Alternatively, to run tests in headless mode:

```bash
npm run test:ci
```

---

## 🧩 Test Structure

The test files are structured as follows:

```bash
📁 cypress
 ┣ 📁 e2e           # Test files
 ┣ 📁 fixtures      # Test data (JSON files)
 ┗ 📁 support       # Custom commands and support utilities
```

Example test case:

```javascript
describe('Automation Exercise', () => {
    it('should load homepage', () => {
        cy.visit('https://www.automationexercise.com');
        cy.get('.logo').should('be.visible');
    });
});
```

---

## 📝 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE.txt) file for details.

---

### 🔗 Useful Links

-   [Cypress Documentation](https://docs.cypress.io/)
-   [Node.js Documentation](https://nodejs.org/en/docs/)

---

### 👩‍💻 Author

Agne: [Github](https://github.com/AgneKal)
