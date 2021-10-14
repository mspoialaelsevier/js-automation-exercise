Feature: To Do Example
  Scenario: Validate we can add items to the list
    Given I have clean list
    When I add one item with the value "test interview"
    Then I have just one value "test interview" in the list