import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

const SEARCH_FIELD = 'input[type=text]';
const SEARCH_BUTTON = 'input[type=submit]';
const SEARCH_TEXT = 'Search';

Given(`I'm at Google`, () => {
  cy.visit('/');
});

When(`I type search word {string}`, (query) => {
  cy.get(SEARCH_FIELD).type(query);
});

When(`Press Search`, () => {
  cy.get(SEARCH_BUTTON).contains(SEARCH_TEXT).click();
});

When('I submit the search form', () => {
  cy.get('form').submit();
});

Then(`I see {string} in the results`, (searchResult) => {
  cy.get('body').contains(searchResult);
});
