describe("nieudane logowanie", () => {
  it("tests nieudane logowanie", () => {
    cy.visit("/en");
    cy.get("ul.ml-auto > li:nth-of-type(2) > a").click();
    cy.get("#authentication-modal___BV_modal_outer_ input").click();
    cy.get("#authentication-modal___BV_modal_outer_ input").type("maciej.sekalski.testy.e2e@gmail.com");
    cy.get("#authentication-modal___BV_modal_footer_ button").click();
    cy.get("#password").click();
    cy.get("#password").type("testyniudany");
    cy.get("#authentication-modal___BV_modal_footer_ button").click();
    cy.get("#authentication-modal___BV_modal_footer_ .authentication-warning-message", { timeout: 10000 })
        .should('be.visible')
        .contains('Username or password is incorrect');
  });
});
