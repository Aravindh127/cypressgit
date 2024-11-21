describe('First test', () => {
    it('passes', () => {
      cy.visit('https://www.flipkart.com/')
      cy.get('[class*=Pke_EE]').type('mobiles{enter}');
      cy.get('[title="SAMSUNG"]').click()
    })
  })