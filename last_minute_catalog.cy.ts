import page from "../pages/Factory";
import {LANGUAGES_ENUM} from '../types';

describe("Last Minute catalog", () => {
    it("Tests if last minute offers are visible", () => {
        page.home.visit(LANGUAGES_ENUM.EN);
        page.home.navbar.openLastMinutePage();
        page.lastMinute.lastMinuteBanner.should('be.visible');
    });
});
