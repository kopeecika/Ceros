package com.SwagLabs.stepDefenitions;

import com.SwagLabs.pages.LoginPage;
import com.SwagLabs.utilities.BrowserUtils;
import com.SwagLabs.utilities.ConfigurationReader;
import com.SwagLabs.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class LoginFunctionality {
LoginPage loginPage=new LoginPage();

    @Given("user is on {string} page")
    public void user_is_on_page(String page) {
        Driver.getDriver().get(ConfigurationReader.getProperty("url"));
    }

    @When("user login as {string}")
    public void user_login_as(String user_type) {
        user_type=user_type.toLowerCase();
        switch (user_type){
            case "standard_user":
                loginPage.login(ConfigurationReader.getProperty("user_username"),ConfigurationReader.getProperty("user_password"));
                break;
            default:
                Assert.fail("There is no "+user_type+" in this switch statement");
        }

    }

    @Then("the {string} page should be displayed")
    public void the_page_should_be_displayed(String page) {
        page=page.toLowerCase();
        BrowserUtils.waitForPageToLoad(10);
        String actualTitle = Driver.getDriver().getCurrentUrl();
        Assert.assertTrue(actualTitle.contains(page));

    }




}
