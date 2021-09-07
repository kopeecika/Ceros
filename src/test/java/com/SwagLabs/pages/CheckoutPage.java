package com.SwagLabs.pages;

import com.SwagLabs.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class CheckoutPage {
    public CheckoutPage() {
        PageFactory.initElements(Driver.getDriver(), this); }

    @FindBy(id = "first-name")
    public WebElement first_name_input;

    @FindBy(id = "last-name")
    public WebElement last_name_input;

    @FindBy(id = "postal-code")
    public WebElement postal_code_input;

    @FindBy(id = "continue")
    public WebElement continue_btn;
}
