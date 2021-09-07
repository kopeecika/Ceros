package com.SwagLabs.pages;

import com.SwagLabs.utilities.Driver;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage extends BasePage{
    public LoginPage() {
        PageFactory.initElements(Driver.getDriver(), this);
    }

    @FindBy(id = "user-name")
    public WebElement username;

    @FindBy(id = "password")
    public WebElement password;

    @FindBy(id = "login-button")
    public WebElement loginBtn;

    public void login(String email, String password) {
        this.username.sendKeys(email);
        this.password.sendKeys(password);
        loginBtn.click();
    }


}
