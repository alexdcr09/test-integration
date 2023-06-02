describe('template spec', () => {
  it('passes', () => {
    cy.visit('localhost:5173/')
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('AddNote', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:5173/');
    cy.get(':nth-child(1) > input').clear('te');
    cy.get(':nth-child(1) > input').type('test');
    cy.get('textarea').click();
    cy.get(':nth-child(3) > input').click();
    cy.get(':nth-child(3) > input').click();
    cy.get(':nth-child(3) > input').click();
    cy.get(':nth-child(3) > input').click();
    cy.get(':nth-child(3) > input').click();
    cy.get(':nth-child(3) > input').click();
    cy.get('button').click();
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('DeleteNote', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:5173/');
    cy.get(':nth-child(1) > input').clear('te');
    cy.get(':nth-child(1) > input').type('test');
    cy.get('textarea').click();
    cy.get(':nth-child(3) > input').click();
    cy.get(':nth-child(3) > input').click();
    cy.get(':nth-child(3) > input').click();
    cy.get(':nth-child(3) > input').click();
    cy.get('.createBtn').click();
    cy.get('[style="background-color: red;"] > button').click();
    cy.get('.deleteBtn').click();
    cy.get('.confirmBtn').click();
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('UpdateNote', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:5173/');
    cy.get(':nth-child(1) > input').clear('te');
    cy.get(':nth-child(1) > input').type('test');
    cy.get(':nth-child(3) > input').click();
    cy.get(':nth-child(3) > input').click();
    cy.get(':nth-child(3) > input').click();
    cy.get(':nth-child(3) > input').click();
    cy.get('textarea').click();
    cy.get('.createBtn').click();
    cy.get('[style="background-color: red;"] > button').click();
    cy.get(':nth-child(1) > form > :nth-child(1) > input').clear('t');
    cy.get(':nth-child(1) > form > :nth-child(1) > input').type('testtttt');
    cy.get(':nth-child(3) > textarea').click();
    cy.get(':nth-child(1) > form > [type="submit"]').click();
    /* ==== End Cypress Studio ==== */
  });
})