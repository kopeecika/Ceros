package com.SwagLabs.stepDefenitions;

import com.SwagLabs.pages.CartPage;
import com.SwagLabs.pages.CheckOutPageTwo;
import com.SwagLabs.pages.CheckoutPage;
import com.SwagLabs.pages.InventoryPage;
import com.SwagLabs.utilities.BrowserUtils;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class CardFunctionality {
 InventoryPage inventoryPage =new InventoryPage();
 CartPage cartPage=new CartPage();
 CheckoutPage checkoutPage=new CheckoutPage();
 CheckOutPageTwo checkOutPageTwo=new CheckOutPageTwo();

    @When("user adds the {string} to the cart")
    public void user_adds_the_to_the_card(String product) {
       inventoryPage.addToCrt_btn.get(0).click();

    }

   @When("user navigates to {string} page")
   public void user_navigates_to_page(String page) {
     page=page.toUpperCase();
     switch (page){
        case "CART":
           inventoryPage.cart.click();
           break;
        case"CHECKOUT":
           cartPage.checkout_btn.click();
           break;
        default:
           Assert.fail("The "+page+"is not defined in this switch statement");
     }
   }

   @Then("{string} should be displayed")
   public void should_be_displayed(String item) {
      item=item.toLowerCase();
      switch (item){
         case "chart items":
          Assert.assertFalse(BrowserUtils.verifyElementDisplayed(cartPage.cartItemsList.get(0)));
            break;
         default:
            Assert.fail("The "+item+"is not defined in this switch statement");
      }
   }
   @Then("verify {string} page lists {int} items")
   public void verify_page_lists_items(String page, Integer items) {
      page=page.toUpperCase();
      switch (page){
         case"INVENTORY":
           // Assert.assertEquals(BrowserUtils.getElementsText(productsPage.addToCrt_btn).size()),items);
            int totalItems=BrowserUtils.getElementsText(inventoryPage.addToCrt_btn).size();
             Assert.assertTrue(totalItems==items);

            break;
         default:
            Assert.fail("The "+page+"is not defined in this switch statement");
      }
   }

    @When("user enter {string} and {string} and {string}")
    public void user_enter_and_and(String data1, String data2, String data3) {
       checkoutPage.first_name_input.sendKeys(data1);
        checkoutPage.last_name_input.sendKeys(data2);
        checkoutPage.postal_code_input.sendKeys(data3);
    }

    @When("user click on {string} button on {string} page")
    public void user_click_on_button_on_page(String button, String page) {
        page=page.toUpperCase();
        switch (page){
            case "CHECKOUT":
                checkoutPage.continue_btn.click();
                break;
            case "CHECKOUT-STEP-TWO":
                checkOutPageTwo.finish_btn.click();
                break;
            default:
                Assert.fail("The "+page+"is not defined in this switch statement");
        }

    }

}
