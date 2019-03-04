const url = '/ui/start.html'

 describe('Generate Certificates', () => {
  before(() => {
    cy.visit(url)
  })

  it('Should be on virgin_state', () => {
    cy.get('.virgin_state').should('be.visible')
    cy.screenshot()
  })

  it('Should generate certificate & go to booting_state', () => {
    cy.get('#initialize').click()
    cy.get('.booting_state').should('be.visible')
    cy.screenshot()
  })
})