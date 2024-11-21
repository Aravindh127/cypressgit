describe('login page', () => {
    it('automation testing', () => {
      cy.visit('https://practicetestautomation.com/practice-test-login/')
      cy.get('input#username').type('incorrectUser ')
      cy.get('input#password').type('Password123')
      cy.get('button#submit').click()
      cy.get('.show').should('have.text','Your username is invalid!')
      cy.get('.show').should('have.text','Your username is invalid!').should('be.visible')


      })
  })