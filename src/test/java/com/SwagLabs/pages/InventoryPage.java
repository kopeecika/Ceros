package com.SwagLabs.pages;

import com.SwagLabs.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class InventoryPage extends BasePage{

    public InventoryPage() {
        PageFactory.initElements(Driver.getDriver(), this);
    }

    @FindBy(xpath = "//button[contains(@id,'add-to-cart')]")
    public List<WebElement> addToCrt_btn;

    @FindBy(xpath = "//a[@class='shopping_cart_link']")
    public WebElement cart;

    @FindBy(xpath = "//div[@class='inventory_item_name']")
    public List<WebElement> item_name;

    @FindBy(xpath = "//div[@class='inventory_item_price']")
    public List<WebElement> item_price;

    @FindBy(xpath = "//select[@class='product_sort_container']")
    public WebElement sort;
}
