package steps;

import org.junit.Assert;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import pages.LoginPage;
import pages.TestBase;

public class StepDefinition extends TestBase{
	
	LoginPage  loginPage;
	@Before
    public void init() {
    	initDriver();
    	loginPage = PageFactory.initElements(driver, LoginPage.class);
    }
	
	
	@Given("^User is on the techfios login page$")
	public void user_is_on_the_techfios_login_page()  {
		driver.get("https://techfios.com/billing/?ng=login");
	   
	}

	@When("^User enters the user name \"([^\"]*)\"$")
	public void user_enters_the_user_name(String username) {
		loginPage.insertUserName(username);
	   
	}

	@When("^User enters the password \"([^\"]*)\"$")
	public void user_enters_the_password(String password)  {
		loginPage.insertPassword(password);
	   
	}

	@When("^User clicks on login$")
	public void user_clicks_on_login() {
		loginPage.clickSignIn();
	   
	}

	@Then("^User should land on Dashboard page$")
	public void user_should_land_on_Dashboard_page()  {
		
		Assert.assertEquals("Dashboard- iBilling", loginPage.getPageTitle());
	}

	@Then("^User clicks on bankCash$")
	public void user_clicks_on_bankCash() {
		
       loginPage.clickBankAndCash();
		
	}

	@Then("^User clicks on newAccount$")
	public void user_clicks_on_newAccount()  {
		
	   loginPage.clicNewAccount();
	}

	@Then("^User enters the accountTitle \"([^\"]*)\"$")
	public void user_enters_the_accountTitle(String accountTitle) {
		
	  loginPage.insertAccountTitle(accountTitle + generatRandomNumber(99));
	}

	@Then("^User enters the description \"([^\"]*)\"$")
	public void user_enters_the_description(String description) {
		
	   loginPage.insertDescription(description);
	}

	@Then("^User enters the initialBalance \"([^\"]*)\"$")
	public void user_enters_the_initialBalance(String initialBalance)  {
		loginPage.insertInitialbalance(initialBalance);
	    
	}

	@Then("^User enters the accountNumber \"([^\"]*)\"$")
	public void user_enters_the_accountNumber(String accountNumber) {
	   loginPage.insertAccountNumber(accountNumber + generatRandomNumber(99));
	}

	@Then("^User enters the contactPerson \"([^\"]*)\"$")
	public void user_enters_the_contactPerson(String contactPerson)  {
		loginPage.insertContactPerson(contactPerson);
	   
	}

	@Then("^User enters the Phone \"([^\"]*)\"$")
	public void user_enters_the_Phone(String Phone)  {
		loginPage.insertPhoneNumber(Phone);
	   
	}


	@Then("^User enters the internetBankingURL \"([^\"]*)\"$")
	public void user_enters_the_internetBankingURL(String bankingURL)  {
	   loginPage.insertURL(bankingURL);
	}

	@Then("^User clicks on submit$")
	public void user_clicks_on_submit() {
		loginPage.clickSubmit();
	   
	}

	@Then("^User should be able to validate account created successfully$")
	public void user_should_be_able_to_validate_account_created_successfully()  {
		Assert.assertEquals("Accounts- iBilling", loginPage.getPageTitle());
	   
	}
	
	
	
//	@After
    public void tearDown() {
    	
    	driver.close();
    	driver.quit();
    }



}
