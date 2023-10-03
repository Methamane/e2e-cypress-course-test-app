describe("Text input with max characters", () => {
    it("Displays the correct remaining character count", () => {
        cy.visit("http://localhost:3030/example-2");

        cy.get("input").clear();
        cy.get("#c6")
            .invoke("text")
            .should("equal", "You have 15 characters left.");
        
        cy.get("input").type("H");
        cy.get("input").type("e");
        cy.get("input").type("l");
        cy.get("input").type("l");
        cy.get("input").type("o");

        cy.get("#c6")
            .invoke("text")
            .should("equal", "You have 10 characters left.");
        
        cy.get("input").type(" ");
        cy.get("input").type("m");
        cy.get("input").type("y");
        cy.get("input").type(" ");
        cy.get("input").type("f");
        cy.get("input").type("r");
        cy.get("input").type("i");
        cy.get("input").type("e");
        cy.get("input").type("n");
        cy.get("input").type("d");

        cy.get("#c6")
            .invoke("text")
            .should("equal", "You have 0 characters left.");
    });

    it("Prevent the user from typing more than max characters", () => {
        cy.visit("http://localhost:3030/example-2");
        
        cy.get("input").clear();
        cy.get("input").type("Hello my friends!!!!!!!!");

        cy.get("input")
            .should("have.value", "Hello my friend");
    });
});