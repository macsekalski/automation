import page from '../pages/Factory';
import {LANGUAGES_ENUM} from "../types";

describe("Changing the application language.", (): void => {
    it("Should display buttons for all languages with correct hrefs.", (): void => {
        const languagesEnumValues: string[] = Object.values(LANGUAGES_ENUM);
        const uniqueHrefs: string[] = [];

        page.home.visit(LANGUAGES_ENUM.PL);
        page.home.navbar.openLanguageAndCurrencyModal();
        page.home.navbar.interfaceSettingsModal.languagesButtons.should('have.length', languagesEnumValues.length);

        page.home.navbar.interfaceSettingsModal.languagesButtons.then((languagesButtons): void => {
            for (const element of languagesButtons) {
                const href: string = element.getAttribute('href');
                expect(href, "Expect href to exist.").to.exist;

                const hrefLanguage: string = href.split('/').pop();
                expect(languagesEnumValues).to.include(hrefLanguage);

                if (!uniqueHrefs.includes(href)) {
                    uniqueHrefs.push(href);
                }
            }

            page.home.navbar.interfaceSettingsModal.close();

            expect(uniqueHrefs.length === languagesEnumValues.length, "Expect all hrefs from LANGUAGES_ENUM are displayed on the page.").to.be.true;
        });
    });

    it("Should take user to the appropriate language version of the page after selecting the language from the menu.", (): void => {
        page.home.visit(LANGUAGES_ENUM.PL);

        for (const languageCode of Object.keys(LANGUAGES_ENUM)) {
            page.home.navbar.openLanguageAndCurrencyModal();
            const element: Cypress.Chainable = page.home.navbar.interfaceSettingsModal.getLanguageButtonByType(LANGUAGES_ENUM[languageCode]);

            element.click().then((): void => {
                cy.location('pathname').should('eq', '/' + LANGUAGES_ENUM[languageCode]);
                page.home.navbar.selectedLanguageLabel.should('have.text', languageCode);
            });
        }
    });
});
