Feature: Search in Google
  
  Scenario: Search github in Google
    Given I'm at Google
    When I type search word 'github'
    When I submit the search form
    Then I see 'GitHub is where over 65 million developers shape the future of software' in the results
    And true expects to be true