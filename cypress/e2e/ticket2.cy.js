describe('booking tickets',()=>{
    it('for kanguva movie',()=>{
        cy.visit('https://ticketnew.com/movies/chennai')
        cy.get('[href="/movies/kanguva-movie-detail-161682"]').eq(1).click()
    })
})