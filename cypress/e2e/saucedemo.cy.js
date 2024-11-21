describe('sauce demo ',()=>{
    it('total cost',()=>{
        cy.visit('https://www.saucedemo.com/v1/')
        cy.get('[name="user-name"]').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('[class="btn_primary btn_inventory"]').eq(0).click()
        cy.get('[class="btn_primary btn_inventory"]').eq(3).click()
        cy.get('[fill="currentColor"]').click()
        cy.get('[class="btn_action checkout_button"]').click()
        cy.get('#first-name').type('aravindh')
        cy.get('#last-name').type('k')
        cy.get('#postal-code').type('621212')
        cy.get('[class="btn_primary cart_button"]').click()
        cy.get('[class="btn_action cart_button"]').click()
        

    })
})
    


      