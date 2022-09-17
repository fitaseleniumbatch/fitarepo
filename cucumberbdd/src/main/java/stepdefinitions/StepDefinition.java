package stepdefinitions;

import javax.swing.plaf.synth.SynthOptionPaneUI;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;


public class StepDefinition {
	
	
	WebDriver driver;
	
	@Given("^I am a valid registered user and launch the facebook application$")
	public void I_am_a_valid_registered_user_and_launch_the_facebook_application() throws Throwable {
	    // Express the Regexp above with the code you wish you had
		
		System.out.println("Test");
		
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\inskuma\\Documents\\Automation\\chromedriver_win32\\chromedriver.exe");
		driver = new ChromeDriver();
		
		driver.get("https://www.facebook.com");
		driver.manage().window().maximize();
		
	}

	@When("^I enter valid_username and valid_password$")
	public void I_enter_valid_username_and_valid_password() throws Throwable {
	    // Express the Regexp above with the code you wish you had
		
		WebElement username = driver.findElement(By.id("email"));
		
		WebElement password = driver.findElement(By.id("pass"));
		
		username.sendKeys("user1@fb.com");
		password.sendKeys("hjghjghjg");
		
		
		
		
		
		
	}

	@Then("^I should see the homepage of the application$")
	public void I_should_see_the_homepage_of_the_application() throws Throwable {
	    // Express the Regexp above with the code you wish you had
		
		
		System.out.println("Execution completed");
		
			}

	
	@Given("I am user and launch the application")
	public void i_am_user_and_launch_the_application() {
	    // Write code here that turns the phrase above into concrete actions
		
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\inskuma\\Documents\\Automation\\chromedriver_win32\\chromedriver.exe");
		driver = new ChromeDriver();
		
		driver.get("https://www.facebook.com");
		driver.manage().window().maximize();
	}

	@When("I enter {string} and {string} to the application")
	public void i_enter_and_to_the_application(String string, String string2) {
	    // Write code here that turns the phrase above into concrete actions

	WebElement email = driver.findElement(By.id("email"));
	
	WebElement pass = driver.findElement(By.id("pass"));
	
	email.sendKeys(string);
	
	pass.sendKeys(string2);
		
	}

	@Then("I should see the fb homepage")
	public void i_should_see_the_fb_homepage() {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("Execution completed");
	}

}
