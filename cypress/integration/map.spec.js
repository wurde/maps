/**
 * Assertions
 */

describe("Map", () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it("has a set of Controls", () => {
    cy.get('.controls-toolbar');
    cy.get('#locate-me-btn').should('be.visible');
  });

  it("has a Map", () => {
    cy.get('#map').should('have.class', 'leaflet-container');
    cy.get('.leaflet-control-zoom');
    cy.get('.leaflet-control-attribution').contains('OpenStreetMap');
  });
});
