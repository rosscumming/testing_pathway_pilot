package upload;

import base.BaseTests;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;


public class Upload extends BaseTests {

    @BeforeEach
    public void launchApp(){
        driver.get("https://kitchen.applitools.com/ingredients/file-picker");
    }

    @Test
    public void testFileUpload(){
        String filePath = "/Users/rosscumming/Documents/testing-pathway/selenium-testing-pathway/src/main/resources/images/beach.jpg";
        driver.findElement(By.id("photo-upload")).sendKeys(filePath);
    }

}
