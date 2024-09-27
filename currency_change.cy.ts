import page from "../pages/Factory";
import {CURRENCIES_ENUM, LANGUAGES_ENUM} from "../types";

describe("Changing currency.", (): void => {
    it("Should display buttons for all currencies.", (): void => {
        const currenciesEnumValues: string[] = Object.values(CURRENCIES_ENUM);

        page.home.visit(LANGUAGES_ENUM.EN);
        page.home.navbar.openLanguageAndCurrencyModal();
        page.home.navbar.interfaceSettingsModal.currencyButtons.should('have.length', currenciesEnumValues.length);
    });

    it("Should change the currency in the app after clicking the currency button in the menu.", (): void => {
        page.home.visit(LANGUAGES_ENUM.EN);

        for (const currencyCode of Object.keys(CURRENCIES_ENUM)) {
            page.home.navbar.openLanguageAndCurrencyModal();
            const element: Cypress.Chainable = page.home.navbar.interfaceSettingsModal.getCurrencyButtonByType(currencyCode);

            element.click().then((): void => {
                page.home.navbar.selectedCurrencyLabel.should('have.text', CURRENCIES_ENUM[currencyCode]);
            });
        }
    });
});
