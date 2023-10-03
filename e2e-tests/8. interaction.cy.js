

describe("Basic page interactions", () => {
  beforeEach(() => {
    cy.visit("/example-4");
  });
  
  it("sets header text to the item's name when double clicked", () => {
    cy.get("[data-cy=box-1-item-2]").dblclick();
    cy.get("[data-cy=box-1-current-item]")
      .invoke("text")
      .should("equal", "Option Two");
  });

  it("displays the number of selected checkboxes", () => {
    cy.get("[data-cy=checkbox1],[type=aria-checked]").click();
    cy.get("[data-cy=checkbox3],[type=aria-checked]").click();
    cy.get("[data-cy=checkbox-label]")
      .invoke("text")
      .should("equal", "2 checkboxes");
  });

  it("displays the name of the currently selected item", () => {
    cy.get("[data-cy=select]").click();
    cy.get("span").contains("Option 3").click();
    cy.get("[data-cy=select-label]").invoke("text").should("equal", "Option 3");
  });

  it("displays the name of the hovered option", () => {
    cy.get("[data-cy=hover-3]").trigger("mouseover");
    cy.get("[data-cy=hover-label]").invoke("text").should("equal", "Option 3");
  });
});
