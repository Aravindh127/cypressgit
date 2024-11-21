describe('First test', () => {
  it('passes', () => {
    cy.visit('https://www.flipkart.com/')
    cy.get('input.Pke_EE').type('mobiles{enter}');
    cy.get('.XPD6hh')

  
  })
})