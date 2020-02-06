describe("Visit pages", () => {
  it("Visits the main page", () => {
    cy.visit("/");
    cy.contains(/example-post/i);
  });
  it("Visits the blog page", () => {
    cy.visit("blog");
    cy.contains(/example-post/i);
  });
});
