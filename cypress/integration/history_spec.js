describe('History Page Test', function(){
    it('test the title', function(){
        cy.visit('./Front-end/History.html')
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
        cy.get('form')
        cy.title().should('eq', 'Login')
    })

})
