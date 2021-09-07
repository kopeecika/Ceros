package com.SwagLabs.utilities;

import org.junit.Assert;
import org.openqa.selenium.*;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import static org.junit.Assert.assertTrue;

public class BrowserUtils {

    public static void waitForPageToLoad(long timeOutInSeconds) {
        ExpectedCondition<Boolean> expectation = new ExpectedCondition<Boolean>() {
            public Boolean apply(WebDriver driver) {
                return ((JavascriptExecutor) driver).executeScript("return document.readyState").equals("complete");
            }
        };
        try {
            System.out.println("Waiting for page to load...");
            WebDriverWait wait = new WebDriverWait(Driver.getDriver(), timeOutInSeconds);
            wait.until(expectation);
        } catch (Throwable error) {
            System.out.println(
                    "Timeout waiting for Page Load Request to complete after " + timeOutInSeconds + " seconds");
        }
    }

    public static WebElement waitForClickability(By locator, int timeout) {
        WebDriverWait wait = new WebDriverWait(Driver.getDriver(), timeout);
        return wait.until(ExpectedConditions.elementToBeClickable(locator));
    }

       /**
     * Verifies whether the element is displayed on page
     * fails if the element is not found or not displayed
     *
     * @param element
     * @return
     */
    public static boolean verifyElementDisplayed(WebElement element) {
        try {
            assertTrue("Element not visible: " + element, element.isDisplayed());
        } catch (NoSuchElementException e) {
            Assert.fail("Element not found: " + element);

        }
        return false;
    }

     // This method is used to verify that an element is not displayed

    public static boolean IsElementDisplayed(WebElement element) {
        try {
            element.isDisplayed();
            return false;
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return true;
        }
    }

    public static List<String> getElementsText(List<WebElement> elements) {
        List<String> textValues = new ArrayList<>();
        for (WebElement element : elements) {
            if (!element.getText().isEmpty()) {
                textValues.add(element.getText().trim());
            }
        }
        return textValues;
    }

    // Here is the code to check if array list is sorted in Ascending order or not
    public static boolean checkAscendingSorting(List<String> arraylist) {
        boolean isSorted = true;
        for (int i = 1; i < arraylist.size(); i++) {
            if (arraylist.get(i - 1).compareTo(arraylist.get(i)) > 0) {
                isSorted = false;
                break;
            }
        }
        return isSorted;
    }

    /*
   This method takes a list of String and returns a List of Integer
    */
    public static List<Double>getIntegerList(List<String>liststr){
        List<Double>list=new ArrayList<>();
        for (String each:liststr ) {
           // list.add(Integer.parseInt(each));
            list.add(Double.parseDouble(each));
        }
        return list;
    }

    public static List<String>remove$(List<String>list){
        List<String>clean=new ArrayList<>();
        for (int i = 0; i <list.size() ; i++) {
            String removed=list.get(i).substring(1);
            clean.add(removed);
        }
        return clean;
    }

    public static boolean isNumListDescending(List<Double>nums){
        List<Double>sortedDesc= nums;
        Collections.sort(sortedDesc);
        boolean isSorted=nums.equals(sortedDesc);
        System.out.println(nums);
        System.out.println(sortedDesc);
        System.out.println(isSorted);
        return isSorted;
    }
}
