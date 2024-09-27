import page from '../pages/Factory';
import {LANGUAGES_ENUM} from '../types';

describe("Product Page", (): void => {
    it("User sees product page and details on it", (): void => {
        page.home.visit(LANGUAGES_ENUM.EN);
        page.home.navbar.openCatalogPage();
        page.catalog.openFirstCatalogItem();
        page.productPage.validateMainTitleVisibility();
    });
});
