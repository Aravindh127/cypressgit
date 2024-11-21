describe('Ecommerce Project Test',()=>{
    it('validate each functionality expected',()=>{
        cy.visit('https://www.saucedemo.com/v1/')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('#inventory_container .inventory_item').each(($results)=>{
            if($results.text().includes('Backpack')){
                cy.wrap($results).find('[class="btn_primary btn_inventory"]').click()   
            }

            if($results.text().includes('Onesie')){
                cy.wrap($results).find('[class="btn_primary btn_inventory"]').click()
            }
            if($results.text().includes('Fleece ')){
                cy.wrap($results).find('[class="btn_primary btn_inventory"]').click()
            }
        
        })
        cy.get('.shopping_cart_container').click()
            cy.url().should('include','v1')
        


    })

})