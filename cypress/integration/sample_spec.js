describe("Visit pages", () => {
	it("Visits the main page", () => {
		cy.visit("/");
	});
	it("Visits the blog page", () => {
		cy.visit("blog");
	});
});
