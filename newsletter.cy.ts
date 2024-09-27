describe("newsletter signing", () => {
    it("newsletter signing with account regestration", () => {
        const currentTimestamp = Date.now();

        cy.visit("/en");
        cy.get("ul.ml-auto > li:nth-of-type(2) > a").click();
        cy.get("#authentication-modal___BV_modal_outer_ input").click();
        cy.get("#authentication-modal___BV_modal_outer_ input").type(`test_account_${currentTimestamp}@gmail.com`);
        cy.get("#authentication-modal___BV_modal_footer_ span").click();
        cy.get("#marketingConsent").click();
        cy.get("#password").click();
        cy.get("#password").type("asdasd");
        cy.get("#authentication-modal___BV_modal_footer_ button").click();
        cy.get("#authentication-modal___BV_modal_footer_ button  span.spinner-border", {timeout: 2000}).should('be.visible');
        cy.get("#authentication-modal___BV_modal_footer_ button  span.spinner-border", {timeout: 10000}).should('not.exist');
        cy.get('#authentication-modal___BV_modal_title_ span', {timeout: 10000}).should('be.visible').contains('Welcome to Slowhop');
        cy.get("#authentication-modal___BV_modal_footer_ button").click();
    });
});
