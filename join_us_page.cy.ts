import page from "../pages/Factory";
import {LANGUAGES_ENUM} from "../types";

describe("Join Us Page", (): void => {
    it("User sees Join Us page and all links are active", (): void => {
        const SLOWHOP_LOGIN: string = Cypress.env('SLOWHOP_LOGIN');
        const SLOWHOP_PASSWORD: string = Cypress.env('SLOWHOP_PASSWORD');

        page.home.visit(LANGUAGES_ENUM.EN);
        page.home.navbar.openAuthenticationModal();
        page.home.navbar.authenticationModal.typeEmail(SLOWHOP_LOGIN);
        page.home.navbar.authenticationModal.clickNextButton();
        page.home.navbar.authenticationModal.typePassword(SLOWHOP_PASSWORD);
        page.home.navbar.authenticationModal.clickNextButton();
        page.home.navbar.openJoinUsPage();
    });
});