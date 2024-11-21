describe('Basic elements testing',()=>{
    it('Handling elements from practice demo page',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        //radio button
        cy.get('[value="radio1"]').check().should('be.checked')

        //static drop down
        cy.get('Select').select('option2').should('have.value','Option2')
    })
})