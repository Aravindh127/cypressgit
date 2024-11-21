describe('login page', () => {
    it('automation testing', () => {
      cy.visit('https://practicetestautomation.com/practice-test-login/')
      cy.get('input#username').type('student')
      cy.get('input#password').type('Password123')
      cy.get('button#submit').click()

    cy.url().should('include','practicetestautomation.com/logged-in-successfully')

    cy.get('strong').should('have.text','Congratulations student. You successfully logged in!')

    cy.get('.post-title').should('have.text','Logged In Successfully')

    
      
    })
  })