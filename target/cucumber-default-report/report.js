$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Bonus.feature");
formatter.feature({
  "name": "Bonus",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@test"
    }
  ]
});
formatter.scenario({
  "name": "Ensure you can sort the inventory by name, Z-to-A, and the sorting is correct.(Descending)",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@test"
    },
    {
      "name": "@test"
    },
    {
      "name": "@bonus"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on \"Login\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.SwagLabs.stepDefenitions.LoginFunctionality.user_is_on_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user login as \"standard_user\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.SwagLabs.stepDefenitions.LoginFunctionality.user_login_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the \"Inventory\" page should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.SwagLabs.stepDefenitions.LoginFunctionality.the_page_should_be_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user looks at the list of \"items\" on the \"Inventory\" page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.SwagLabs.stepDefenitions.Bonus.user_looks_at_the_list_of_on_the_page(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sort items in descending \"A_to_Z\" order",
  "keyword": "Then "
});
formatter.match({
  "location": "com.SwagLabs.stepDefenitions.Bonus.sort_items_in_descending_order(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify you can sort the inventory items by price, high-to-low, and the sorting is correct",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@test"
    },
    {
      "name": "@test"
    },
    {
      "name": "@bonus"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on \"Login\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.SwagLabs.stepDefenitions.LoginFunctionality.user_is_on_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user login as \"standard_user\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.SwagLabs.stepDefenitions.LoginFunctionality.user_login_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the \"Inventory\" page should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.SwagLabs.stepDefenitions.LoginFunctionality.the_page_should_be_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user looks at the list of \"prices\" on the \"Inventory\" page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.SwagLabs.stepDefenitions.Bonus.user_looks_at_the_list_of_on_the_page(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sort items in descending \"high_to_low\" order",
  "keyword": "Then "
});
formatter.match({
  "location": "com.SwagLabs.stepDefenitions.Bonus.sort_items_in_descending_order(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/Card.feature");
formatter.feature({
  "name": "Card functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@test"
    }
  ]
});
formatter.scenario({
  "name": "Add product to the card",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@test"
    },
    {
      "name": "@Card"
    },
    {
      "name": "@test"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on \"Login\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.SwagLabs.stepDefenitions.LoginFunctionality.user_is_on_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user login as \"standard_user\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.SwagLabs.stepDefenitions.LoginFunctionality.user_login_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the \"Inventory\" page should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.SwagLabs.stepDefenitions.LoginFunctionality.the_page_should_be_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user adds the \"product\" to the cart",
  "keyword": "When "
});
formatter.match({
  "location": "com.SwagLabs.stepDefenitions.CardFunctionality.user_adds_the_to_the_card(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"Cart\" page",
  "keyword": "And "
});
formatter.match({
  "location": "com.SwagLabs.stepDefenitions.CardFunctionality.user_navigates_to_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the \"Cart\" page should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.SwagLabs.stepDefenitions.LoginFunctionality.the_page_should_be_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"chart items\" should be displayed",
  "keyword": "And "
});
formatter.match({
  "location": "com.SwagLabs.stepDefenitions.CardFunctionality.should_be_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that by default inventory page lists 6 items",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@test"
    },
    {
      "name": "@inventory"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on \"Login\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.SwagLabs.stepDefenitions.LoginFunctionality.user_is_on_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user login as \"standard_user\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.SwagLabs.stepDefenitions.LoginFunctionality.user_login_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the \"Inventory\" page should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.SwagLabs.stepDefenitions.LoginFunctionality.the_page_should_be_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify \"Inventory\" page lists 6 items",
  "keyword": "Then "
});
formatter.match({
  "location": "com.SwagLabs.stepDefenitions.CardFunctionality.verify_page_lists_items(java.lang.String,java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/CkeckOut.feature");
formatter.feature({
  "name": "Checkout functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@checkout"
    },
    {
      "name": "@test"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Verify user can complete the purchase/checkout process",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user adds the \"product\" to the cart",
  "keyword": "When "
});
formatter.step({
  "name": "user navigates to \"Cart\" page",
  "keyword": "And "
});
formatter.step({
  "name": "the \"Cart\" page should be displayed",
  "keyword": "Then "
});
formatter.step({
  "name": "user navigates to \"Checkout\" page",
  "keyword": "And "
});
formatter.step({
  "name": "the \"Checkout\" page should be displayed",
  "keyword": "Then "
});
formatter.step({
  "name": "user enter \"\u003cfirst_name\u003e\" and \"\u003clast_name\u003e\" and \"\u003cpostal_code\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user click on \"Continue\" button on \"Checkout\" page",
  "keyword": "And "
});
formatter.step({
  "name": "the \"Checkout-step-two\" page should be displayed",
  "keyword": "Then "
});
formatter.step({
  "name": "user click on \"Finish\" button on \"Checkout-step-two\" page",
  "keyword": "And "
});
formatter.step({
  "name": "the \"Checkout-complete\" page should be displayed",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "first_name",
        "last_name",
        "postal_code"
      ]
    },
    {
      "cells": [
        "Olga",
        "Copeichina",
        "20165"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on \"Login\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.SwagLabs.stepDefenitions.LoginFunctionality.user_is_on_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user login as \"standard_user\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.SwagLabs.stepDefenitions.LoginFunctionality.user_login_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the \"Inventory\" page should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.SwagLabs.stepDefenitions.LoginFunctionality.the_page_should_be_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify user can complete the purchase/checkout process",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@checkout"
    },
    {
      "name": "@test"
    }
  ]
});
formatter.step({
  "name": "user adds the \"product\" to the cart",
  "keyword": "When "
});
formatter.match({
  "location": "com.SwagLabs.stepDefenitions.CardFunctionality.user_adds_the_to_the_card(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"Cart\" page",
  "keyword": "And "
});
formatter.match({
  "location": "com.SwagLabs.stepDefenitions.CardFunctionality.user_navigates_to_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the \"Cart\" page should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.SwagLabs.stepDefenitions.LoginFunctionality.the_page_should_be_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"Checkout\" page",
  "keyword": "And "
});
formatter.match({
  "location": "com.SwagLabs.stepDefenitions.CardFunctionality.user_navigates_to_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the \"Checkout\" page should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.SwagLabs.stepDefenitions.LoginFunctionality.the_page_should_be_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter \"Olga\" and \"Copeichina\" and \"20165\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.SwagLabs.stepDefenitions.CardFunctionality.user_enter_and_and(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on \"Continue\" button on \"Checkout\" page",
  "keyword": "And "
});
formatter.match({
  "location": "com.SwagLabs.stepDefenitions.CardFunctionality.user_click_on_button_on_page(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the \"Checkout-step-two\" page should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.SwagLabs.stepDefenitions.LoginFunctionality.the_page_should_be_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on \"Finish\" button on \"Checkout-step-two\" page",
  "keyword": "And "
});
formatter.match({
  "location": "com.SwagLabs.stepDefenitions.CardFunctionality.user_click_on_button_on_page(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the \"Checkout-complete\" page should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.SwagLabs.stepDefenitions.LoginFunctionality.the_page_should_be_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/Login.feature");
formatter.feature({
  "name": "Login functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@test"
    }
  ]
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@test"
    },
    {
      "name": "@login"
    },
    {
      "name": "@test"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on \"Login\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.SwagLabs.stepDefenitions.LoginFunctionality.user_is_on_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user login as \"standard_user\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.SwagLabs.stepDefenitions.LoginFunctionality.user_login_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the \"Inventory\" page should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.SwagLabs.stepDefenitions.LoginFunctionality.the_page_should_be_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});