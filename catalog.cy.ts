describe("test1-katalog", () => {
  it("tests test1-katalog", () => {
    cy.visit("/");
    cy.get("#content-wrapper ul:nth-of-type(1) > li:nth-of-type(1) > a").click();
    cy.location("href").should("eq", "https://develop.staging-k8s.slowteam.net/en/catalog");
    cy.get("#where").click();
    cy.get("#where").type("war");
    cy.get("li:nth-of-type(1) span.result-links__label > span").click();
  });
});
