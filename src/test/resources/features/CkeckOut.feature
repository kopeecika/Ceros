@checkout @test
Feature: Checkout functionality

  Background:
    Given user is on "Login" page
    When user login as "standard_user"
    Then the "Inventory" page should be displayed



  Scenario Outline: Verify user can complete the purchase/checkout process
    When user adds the "product" to the cart
    And user navigates to "Cart" page
    Then the "Cart" page should be displayed
    And user navigates to "Checkout" page
    Then the "Checkout" page should be displayed
    When user enter "<first_name>" and "<last_name>" and "<postal_code>"
    And user click on "Continue" button on "Checkout" page
    Then the "Checkout-step-two" page should be displayed
    And user click on "Finish" button on "Checkout-step-two" page
    Then the "Checkout-complete" page should be displayed


     Examples:
     |first_name|last_name          |postal_code|
     |   Olga   |  Copeichina       |20165      |