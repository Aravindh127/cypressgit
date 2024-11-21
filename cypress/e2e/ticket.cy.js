describe('booking tickets',()=>{
    it('for a new movie',()=>{
        cy.visit('https://ticketnew.com/movies/chennai')
        cy.get('[href*="/movies/kanguva-movie-detail-161682"]').eq(0).click()
        cy.get('[value="Tamil-index"]').check({force: true}).should('be.checked')
        cy.get('[class="Button_btn___t8GZ Button_is-primary__Z7vVN Button_is-large__GjSIq LanguageSelectionDialog_applyBtn__2frJM"]').click()
        cy.get('[href*="/movies/kanguva-movie-detail-161682?frmtid=xb_xni_n5&fromdate=2024-11-21"]').click()
    })
})