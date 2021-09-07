package com.SwagLabs.pages;

import com.SwagLabs.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class CheckOutPageTwo {
    public CheckOutPageTwo() {
        PageFactory.initElements(Driver.getDriver(), this); }

    @FindBy(id = "finish")
    public WebElement finish_btn;
}
