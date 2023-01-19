Feature: Techfios bank and cash New Account Functionality 

@Regression
Scenario Outline: User should be able to login with valid credentials	and open a new account	
  Given User is on the techfios login page
  When User enters the user name "<userName>" 
	When User enters the password "<password>"
	And  User clicks on login
	Then User should land on Dashboard page 
	And User clicks on bankCash
	And User clicks on newAccount
	And User enters the accountTitle "<accountTitle>"
	And User enters the description "<description>"
	And User enters the initialBalance "<initialBalance>" 
	And User enters the accountNumber "<accountNumber>"
	And User enters the contactPerson "<contactPerson>"
	And User enters the Phone "<Phone>"
	And User enters the internetBankingURL "<internetBankingURL>"
	And User clicks on submit
	Then User should be able to validate account created successfully

Examples:
|userName|password|accountTitle|description|initialBalance|accountNumber|contactPerson|Phone|internetBankingURL|
|demo@techfios.com|abc123|TechFios|checking|4000|4444455555|Jhon|123456789|https://techfios.com/billing/?ng=dashboard/|
	