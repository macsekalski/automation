import page from "../pages/Factory";
import {LANGUAGES_ENUM} from "../types";

describe("forgetten_password", (): void => {
    it("im checking if im able go from login modal to reset password page", (): void => {
        page.home.visit(LANGUAGES_ENUM.EN);
        const emailAddress: string = "maciej.sekalski.testy.e2e@gmail.com";

        cy.get("ul.ml-auto > li:nth-of-type(2) > a").click();
        cy.get("#authentication-modal___BV_modal_outer_ input").click();
        cy.get("#authentication-modal___BV_modal_outer_ input").type(emailAddress);
        cy.get("#authentication-modal___BV_modal_footer_ span").click();
        cy.get("#authentication-modal___BV_modal_outer_ a").click();
        cy.location('pathname').should('eq', `/${LANGUAGES_ENUM.EN}/resetting/request`);
        cy.get("#username").click();
        cy.get("#username").type(emailAddress);
        cy.get("#container button").click();
        cy.location("href").should("eq", `${Cypress.config().baseUrl}/${LANGUAGES_ENUM.EN}/resetting/check-email?username=${emailAddress}`);
    });
});
