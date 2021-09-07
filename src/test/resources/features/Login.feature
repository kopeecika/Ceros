@test
Feature: Login functionality
  @login @test
  Scenario:
    Given user is on "Login" page
    When user login as "standard_user"
    Then the "Inventory" page should be displayed


