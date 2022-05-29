Feature: Is it a workable day ?

  I want to know if I have to work a given day.

  Scenario: It is christmas
    Given It is 2022/12/25
    When I ask if it is a workable day
    Then I should be told "no"

  Scenario: It is Sunday
    Given It is 2022/05/29
    When I ask if it is a workable day
    Then I should be told "no"

  Scenario: It is a Normal Monday
    Given It is 2022/05/30
    When I ask if it is a workable day
    Then I should be told "yes"
