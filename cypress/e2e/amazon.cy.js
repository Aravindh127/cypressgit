describe('First test', () => {
  it('passes', () => {
    cy.visit('https://www.amazon.in')
    cy.get('#twotabsearchtextbox').click().type('watches{enter}');
  })
})
