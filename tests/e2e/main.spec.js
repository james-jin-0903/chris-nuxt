describe('Cool Webinars Page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should list two webinars', () => {
    cy.get('.webinar').should('have.length', 2)
  })

  it('first webinar should have two info elements', () => {
    cy.get('.webinar:first-child .info').should('have.length', 2)
  })

  it('second webinar should have one info elements', () => {
    cy.get('.webinar:nth-child(2) .info').should('have.length', 1)
  })
})
