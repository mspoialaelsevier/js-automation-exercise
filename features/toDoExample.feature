Feature: To Do Example

  Scenario: Validate we can add items to the list

    Given I am on the toDo page
    When I add one item with the value "test interview"
    Then I have the value "test interview" in the list