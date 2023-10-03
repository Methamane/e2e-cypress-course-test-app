describe("Text input with max characters", () => {
    it("Displays the correct remaining character count", () => {
        cy.visit("http://localhost:3030/example-3");
        // Input and Label 1
        cy.get("[data-cy=input1]").clear();
        cy.get("[data-cy=label1]")
            .invoke("text")
            .should("equal", "You have 15 characters left.");
        
        cy.get("[data-cy=input1]").type("H");
        cy.get("[data-cy=input1]").type("e");
        cy.get("[data-cy=input1]").type("l");
        cy.get("[data-cy=input1]").type("l");
        cy.get("[data-cy=input1]").type("o");

        cy.get("[data-cy=label1]")
            .invoke("text")
            .should("equal", "You have 10 characters left.");
        
        cy.get("[data-cy=input1]").type(" ");
        cy.get("[data-cy=input1]").type("m");
        cy.get("[data-cy=input1]").type("y");
        cy.get("[data-cy=input1]").type(" ");
        cy.get("[data-cy=input1]").type("f");
        cy.get("[data-cy=input1]").type("r");
        cy.get("[data-cy=input1]").type("i");
        cy.get("[data-cy=input1]").type("e");
        cy.get("[data-cy=input1]").type("n");
        cy.get("[data-cy=input1]").type("d");

        cy.get("[data-cy=label1]")
            .invoke("text")
            .should("equal", "You have 0 characters left.");
        
        // Input and Label 2
        cy.get("[data-cy=input2]").clear();
        cy.get("[data-cy=label2]")
            .invoke("text")
            .should("equal", "You have 15 characters left.");
        
        cy.get("[data-cy=input2]").type("H");
        cy.get("[data-cy=input2]").type("e");
        cy.get("[data-cy=input2]").type("l");
        cy.get("[data-cy=input2]").type("l");
        cy.get("[data-cy=input2]").type("o");

        cy.get("[data-cy=label2]")
            .invoke("text")
            .should("equal", "You have 10 characters left.");
        
        cy.get("[data-cy=input2]").type(" ");
        cy.get("[data-cy=input2]").type("m");
        cy.get("[data-cy=input2]").type("y");
        cy.get("[data-cy=input2]").type(" ");
        cy.get("[data-cy=input2]").type("f");
        cy.get("[data-cy=input2]").type("r");
        cy.get("[data-cy=input2]").type("i");
        cy.get("[data-cy=input2]").type("e");
        cy.get("[data-cy=input2]").type("n");
        cy.get("[data-cy=input2]").type("d");

        cy.get("[data-cy=label2]")
            .invoke("text")
            .should("equal", "You have 0 characters left.");
    });

    it("Prevent the user from typing more than max characters", () => {
        cy.visit("http://localhost:3030/example-3");
        
        cy.get("[data-cy=input1]").clear();
        cy.get("[data-cy=input1]").type("Hello my friends!!!!!!!!");

        cy.get("[data-cy=input1]")
            .should("have.value", "Hello my friend");
    });
});