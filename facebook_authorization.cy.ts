import page from "../pages/Factory";
import {LANGUAGES_ENUM} from "../types";

describe("Facebook authorization", (): void => {
    it.skip("User can log in via Facebook account", (): void => {
        const FACEBOOK_LOGIN: string = Cypress.env('FACEBOOK_LOGIN');
        const FACEBOOK_PASSWORD: string = Cypress.env('FACEBOOK_PASSWORD');
        const FACEBOOK_USER_FULL_NAME: string = Cypress.env('FACEBOOK_USER_FULL_NAME');

        page.home.visit(LANGUAGES_ENUM.EN);
        page.home.navbar.openAuthenticationModal();
        page.home.navbar.authenticationModal.openFacebookAuthorization();
        page.home.navbar.authenticationModal.facebookAuthenticationPage.login(FACEBOOK_LOGIN, FACEBOOK_PASSWORD);
        page.home.navbar.authenticatedUserMenuButton.should('be.visible');
        page.home.navbar.authenticatedUserMenuButton.contains(FACEBOOK_USER_FULL_NAME);
    });
});
