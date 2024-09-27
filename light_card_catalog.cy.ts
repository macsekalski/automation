import page from "../pages/Factory";
import {LANGUAGES_ENUM} from "../types";

describe("Light Card catalog", (): void => {
    it.skip("[SKIP] All light card links from the our inspirations section lead to catalogs with light cards", (): void => {
        page.home.visit(LANGUAGES_ENUM.PL);
        page.home.ourInspirationsLightCards.each((_, index): void => {
            page.home.ourInspirationsLightCards.eq(index).click();
            page.lightCardsCatalog.validateIfPageIsOpened();
            page.lightCardsCatalog.lightCardsTiles.should('have.length.greaterThan', 0);
            page.lightCardsCatalog.navbar.openHomePage();
            page.home.validateIfPageIsOpened();
        });
    });
});
