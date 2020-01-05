/**
 * Assertions
 */

describe("Map", () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it.skip("has a set of Controls");
  // TODO check MyLocation button exists.

  it("has a Map", () => {
    cy.get('#map').should('have.class', 'leaflet-container');
    cy.get('.leaflet-control-zoom');
    cy.get('.leaflet-control-attribution').contains('OpenStreetMap');
  });
});
