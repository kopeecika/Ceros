package com.SwagLabs.pages;

import com.SwagLabs.utilities.Driver;
import org.openqa.selenium.support.PageFactory;

public class BasePage  {
    public BasePage(){
        PageFactory.initElements(Driver.getDriver(),this);
    }
}
