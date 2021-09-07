@test
Feature: Card functionality
@Card @test
  Scenario: Add product to the card
    Given user is on "Login" page
    When user login as "standard_user"
    Then the "Inventory" page should be displayed
    When user adds the "product" to the cart
    And user navigates to "Cart" page
    Then the "Cart" page should be displayed
    And "chart items" should be displayed

  @inventory
  Scenario: Verify that by default inventory page lists 6 items
    Given user is on "Login" page
    When user login as "standard_user"
    Then the "Inventory" page should be displayed
    Then verify "Inventory" page lists 6 items