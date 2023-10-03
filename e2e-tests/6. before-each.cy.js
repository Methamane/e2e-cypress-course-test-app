describe("Text input with max characters", () => {
    beforeEach(() => {
        cy.visit("/example-3");
        cy.get("[data-cy=input1]").as("input1");
        cy.get("[data-cy=label1]").as("label1")
        cy.get("[data-cy=input2]").as("input2")
        cy.get("[data-cy=label2]").as("label2")
    });

    it("Displays the correct remaining character count", () => {
        // Input and Label 1
        cy.get("@input1").clear();
        cy.get("@label1")
            .then($label1 => {
                expect($label1.text()).to.equal("You have 15 characters left.");
            });
        
        cy.get("@input1").type("H");
        cy.get("@input1").type("e");
        cy.get("@input1").type("l");
        cy.get("@input1").type("l");
        cy.get("@input1").type("o");

        cy.get("@label1")
            .invoke("text")
            .should("equal", "You have 10 characters left.");
        
        cy.get("@input1").type(" ");
        cy.get("@input1").type("m");
        cy.get("@input1").type("y");
        cy.get("@input1").type(" ");
        cy.get("@input1").type("f");
        cy.get("@input1").type("r");
        cy.get("@input1").type("i");
        cy.get("@input1").type("e");
        cy.get("@input1").type("n");
        cy.get("@input1").type("d");

        cy.get("@label1")
            .invoke("text")
            .should("equal", "You have 0 characters left.");
        
        // Input and Label 2
        cy.get("@input2").clear();
        cy.get("@label2")
            .invoke("text")
            .should("equal", "You have 15 characters left.");
        
        cy.get("@input2").type("H");
        cy.get("@input2").type("e");
        cy.get("@input2").type("l");
        cy.get("@input2").type("l");
        cy.get("@input2").type("o");

        cy.get("@label2")
            .invoke("text")
            .should("equal", "You have 10 characters left.");
        
        cy.get("@input2").type(" ");
        cy.get("@input2").type("m");
        cy.get("@input2").type("y");
        cy.get("@input2").type(" ");
        cy.get("@input2").type("f");
        cy.get("@input2").type("r");
        cy.get("@input2").type("i");
        cy.get("@input2").type("e");
        cy.get("@input2").type("n");
        cy.get("@input2").type("d");

        cy.get("@label2")
            .invoke("text")
            .should("equal", "You have 0 characters left.");
    });

    it("Prevent the user from typing more than max characters", () => {
        cy.get("@input1").clear();
        cy.get("@input1").type("Hello my friends!!!!!!!!");

        cy.get("@input1")
            .should("have.value", "Hello my friend");
    });
});