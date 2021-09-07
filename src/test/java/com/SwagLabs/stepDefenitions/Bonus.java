package com.SwagLabs.stepDefenitions;

import com.SwagLabs.pages.InventoryPage;
import com.SwagLabs.utilities.BrowserUtils;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.support.ui.Select;

import java.util.ArrayList;
import java.util.List;

public class Bonus {
    InventoryPage inventoryPage =new InventoryPage();
    List<String> list;
    List<String>sortedList;
    List<Double>numList;
    List<Double>sortedNumList;


    @Then("sort items in descending {string} order")
    public void sort_items_in_descending_order(String order) throws InterruptedException {
        order=order.toLowerCase();
        inventoryPage.sort.click();
        Select dropdown=new Select(inventoryPage.sort);
        switch (order){
            case "a_to_z":
                dropdown.selectByIndex(1);
                sortedList=BrowserUtils.getElementsText(inventoryPage.item_name);
                Assert.assertFalse(BrowserUtils.checkAscendingSorting(sortedList));
                break;
            case "high_to_low":
                dropdown.selectByIndex(3);
                sortedNumList=BrowserUtils.getIntegerList(BrowserUtils.remove$(BrowserUtils.getElementsText(inventoryPage.item_price)));
                Assert.assertTrue(BrowserUtils.isNumListDescending(sortedNumList));
                break;
            default:
                Assert.fail("The "+order+"is not defined in this switch statement");
        }

    }

    @Then("user looks at the list of {string} on the {string} page")
    public void user_looks_at_the_list_of_on_the_page(String items, String page) {
        items=items.toLowerCase();
        switch (items){
            case"items":
                list= BrowserUtils.getElementsText(inventoryPage.item_name);
                Assert.assertTrue(BrowserUtils.checkAscendingSorting(list));
                break;
            case "prices":
                list= BrowserUtils.getElementsText(inventoryPage.item_price);
                list=BrowserUtils.remove$(list);
                System.out.println(list);
                numList=BrowserUtils.getIntegerList(list);
                break;
        }
    }


}
