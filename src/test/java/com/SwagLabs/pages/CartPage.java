package com.SwagLabs.pages;

import com.SwagLabs.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class CartPage {
    public CartPage() {
        PageFactory.initElements(Driver.getDriver(), this); }


    @FindBy(xpath = "//div[@class='cart_item']")
    public List<WebElement> cartItemsList;

    @FindBy(id = "checkout")
    public WebElement checkout_btn;
}
