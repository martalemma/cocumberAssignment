$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/BankAndCash.feature");
formatter.feature({
  "line": 1,
  "name": "Techfios bank and cash New Account Functionality",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "User should be able to login with valid credentials\tand open a new account",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on the techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters the user name \"\u003cuserName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters the password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User clicks on login",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User clicks on bankCash",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks on newAccount",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enters the accountTitle \"\u003caccountTitle\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enters the description \"\u003cdescription\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enters the initialBalance \"\u003cinitialBalance\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enters the accountNumber \"\u003caccountNumber\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enters the contactPerson \"\u003ccontactPerson\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters the Phone \"\u003cPhone\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enters the internetBankingURL \"\u003cinternetBankingURL\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User clicks on submit",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account;",
  "rows": [
    {
      "cells": [
        "userName",
        "password",
        "accountTitle",
        "description",
        "initialBalance",
        "accountNumber",
        "contactPerson",
        "Phone",
        "internetBankingURL"
      ],
      "line": 23,
      "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account;;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123",
        "TechFios",
        "checking",
        "4000",
        "4444455555",
        "Jhon",
        "123456789",
        "https://techfios.com/billing/?ng\u003ddashboard/"
      ],
      "line": 24,
      "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3338209000,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "User should be able to login with valid credentials\tand open a new account",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on the techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters the user name \"demo@techfios.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters the password \"abc123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User clicks on login",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User clicks on bankCash",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks on newAccount",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enters the accountTitle \"TechFios\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enters the description \"checking\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enters the initialBalance \"4000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enters the accountNumber \"4444455555\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enters the contactPerson \"Jhon\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters the Phone \"123456789\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enters the internetBankingURL \"https://techfios.com/billing/?ng\u003ddashboard/\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User clicks on submit",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_is_on_the_techfios_login_page()"
});
formatter.result({
  "duration": 875459900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 27
    }
  ],
  "location": "StepDefinition.user_enters_the_user_name(String)"
});
formatter.result({
  "duration": 132396000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 26
    }
  ],
  "location": "StepDefinition.user_enters_the_password(String)"
});
formatter.result({
  "duration": 88072500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_login()"
});
formatter.result({
  "duration": 893357400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_should_land_on_Dashboard_page()"
});
formatter.result({
  "duration": 13246300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_bankCash()"
});
formatter.result({
  "duration": 442022400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_newAccount()"
});
formatter.result({
  "duration": 606135900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TechFios",
      "offset": 30
    }
  ],
  "location": "StepDefinition.user_enters_the_accountTitle(String)"
});
formatter.result({
  "duration": 128125900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "checking",
      "offset": 29
    }
  ],
  "location": "StepDefinition.user_enters_the_description(String)"
});
formatter.result({
  "duration": 115297500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4000",
      "offset": 32
    }
  ],
  "location": "StepDefinition.user_enters_the_initialBalance(String)"
});
formatter.result({
  "duration": 167435400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4444455555",
      "offset": 31
    }
  ],
  "location": "StepDefinition.user_enters_the_accountNumber(String)"
});
formatter.result({
  "duration": 128816400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jhon",
      "offset": 31
    }
  ],
  "location": "StepDefinition.user_enters_the_contactPerson(String)"
});
formatter.result({
  "duration": 105346300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456789",
      "offset": 23
    }
  ],
  "location": "StepDefinition.user_enters_the_Phone(String)"
});
formatter.result({
  "duration": 113447500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://techfios.com/billing/?ng\u003ddashboard/",
      "offset": 36
    }
  ],
  "location": "StepDefinition.user_enters_the_internetBankingURL(String)"
});
formatter.result({
  "duration": 195806600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_submit()"
});
formatter.result({
  "duration": 991628000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_should_be_able_to_validate_account_created_successfully()"
});
formatter.result({
  "duration": 6080900,
  "status": "passed"
});
});