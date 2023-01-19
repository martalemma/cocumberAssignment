package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class LoginPage {
	
	WebDriver driver;
	
	public LoginPage(WebDriver driver) {
		this.driver = driver;
	}
	
	
//	webElement list
	@FindBy(how = How.XPATH,using = "//input[@id='username']")WebElement USERNAME_Element;
	@FindBy(how = How.XPATH,using = "//input[@id='password']")WebElement PASSWORD_Element;
	@FindBy(how = How.XPATH,using = "//button[@name='login']")WebElement SIGNIN_Element;
	@FindBy(how = How.XPATH,using = "//span[text()='Bank & Cash']")WebElement BANK_AND_CASH_Element;
	@FindBy(how = How.XPATH,using = "//a[text()='New Account']")WebElement NEW_ACCOUNT_Element;
	@FindBy(how = How.XPATH,using = "//input[@id='account']")WebElement ACCOUNT_TITLE_Element;
	@FindBy(how = How.XPATH,using = "//input[@id='description']")WebElement DESCRIPTION_Element;
	@FindBy(how = How.XPATH,using = "//input[@id='balance']")WebElement INITIAL_BALANCE_Element;
	@FindBy(how = How.XPATH,using = "//input[@id='account_number']")WebElement ACCOUNT_NUMBER_Element;
	@FindBy(how = How.XPATH,using = "//input[@id='contact_person']")WebElement CONTACT_PERSON_Element;
	@FindBy(how = How.XPATH,using = "//input[@id='contact_phone']")WebElement PHON_NUMBER_Element;
	@FindBy(how = How.XPATH,using = "//input[@id='ib_url']")WebElement BANKING_URL_Element;
	@FindBy(how = How.XPATH,using = "//button[@class='btn btn-primary']")WebElement SUBMIT_BUTTON_Element;

//	Corresponding method
	public  void insertUserName(String UserName) {
		
		USERNAME_Element.sendKeys(UserName);
	}
	public void insertPassword(String Password) {
		PASSWORD_Element.sendKeys(Password);
	}
	public void clickSignIn() {
		SIGNIN_Element.click();
	}
	public String getPageTitle() {
		return driver.getTitle();
	}
	public void clickBankAndCash() {
		
		BANK_AND_CASH_Element.click();
		
	}
	public void clicNewAccount() {
		NEW_ACCOUNT_Element.click();
		
	}
	public void insertAccountTitle(String accountTitle) {
		
		ACCOUNT_TITLE_Element.sendKeys(accountTitle);
		
		
	}
	public void insertDescription(String description) {
		DESCRIPTION_Element.sendKeys(description);
		
	}
	public void insertInitialbalance(String initialBalance) {
		INITIAL_BALANCE_Element.sendKeys(initialBalance);
		
	}
	public void insertAccountNumber(String accountNumber) {
		ACCOUNT_NUMBER_Element.sendKeys(accountNumber);
		
	}
	public void insertContactPerson(String contactPerson) {
		CONTACT_PERSON_Element.sendKeys(contactPerson);
		
	}
	public void insertPhoneNumber(String phoneNumber) {
		PHON_NUMBER_Element.sendKeys(phoneNumber);
		
		
	}
	public void insertURL(String bankingURL) {
		BANKING_URL_Element.sendKeys(bankingURL);
		
	}
	public void clickSubmit() {
		SUBMIT_BUTTON_Element.click();
		
	}
	
	public String validateAccount() {
		return driver.getTitle();
	}
	

	}

