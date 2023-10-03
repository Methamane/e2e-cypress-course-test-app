describe("Heading text", () => {
    it("Contains correct title", () => {
        cy.visit("http://localhost:3030/example-1");

        cy.get("h1")
            .invoke("text")
            .should("contain", "My Awesome Web Application");
    })
}); 
