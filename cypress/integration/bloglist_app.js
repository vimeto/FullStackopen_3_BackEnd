describe('Bloglist', function() {
    it('front page can be opened', function() {
        cy.visit('http://localhost:3001')
        cy.contains('Phonebook')
        cy.contains('add a new')
        cy.contains('Numbers')
    })
})