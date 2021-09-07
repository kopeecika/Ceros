@test
Feature: Bonus
  @test @bonus
  Scenario: Ensure you can sort the inventory by name, Z-to-A, and the sorting is correct.(Descending)
    Given user is on "Login" page
    When user login as "standard_user"
    Then the "Inventory" page should be displayed
    Then user looks at the list of "items" on the "Inventory" page
    Then sort items in descending "A_to_Z" order


  @test @bonus
    Scenario: Verify you can sort the inventory items by price, high-to-low, and the sorting is correct
      Given user is on "Login" page
      When user login as "standard_user"
      Then the "Inventory" page should be displayed
      Then user looks at the list of "prices" on the "Inventory" page
      Then sort items in descending "high_to_low" order