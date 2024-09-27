import page from "../pages/Factory";
import {LANGUAGES_ENUM} from "../types";

describe("Navbar", (): void => {
    it("User sees navbar and all links are active", (): void => {
        page.home.visit(LANGUAGES_ENUM.EN);
        page.home.navbar.element.should('be.visible');

        page.home.navbar.openCatalogPage();
        page.catalog.navbar.openMapPage();
        page.map.navbar.openLastMinutePage();
        page.lastMinute.navbar.openHomePage();
        page.home.navbar.openIdeasPage();
        page.home.visit(LANGUAGES_ENUM.EN);
        page.home.navbar.openAboutUsPage();
    });
});
