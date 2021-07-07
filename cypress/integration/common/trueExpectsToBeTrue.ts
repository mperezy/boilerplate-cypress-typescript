import { And } from 'cypress-cucumber-preprocessor/steps';

And('true expects to be true', () => {
  expect(true).to.equal(true);
});
