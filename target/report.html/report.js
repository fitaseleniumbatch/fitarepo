$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:features/Scenarios.feature");
formatter.feature({
  "name": "To validate all scenarios of the loginfeature in facebook application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "To validate the hpapy path flow for valid user logging into the application",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I am a valid registered user and launch the facebook application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.StepDefinition.I_am_a_valid_registered_user_and_launch_the_facebook_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter valid_username and valid_password",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.StepDefinition.I_enter_valid_username_and_valid_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the homepage of the application",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.StepDefinition.I_should_see_the_homepage_of_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "To validate happypath flow of multiple users logging into the application",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am user and launch the application",
  "keyword": "Given "
});
formatter.step({
  "name": "I enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" to the application",
  "keyword": "When "
});
formatter.step({
  "name": "I should see the fb homepage",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "",
        "password"
      ]
    },
    {
      "cells": [
        "user1@fb.com",
        "",
        "jkjkhjkg"
      ]
    },
    {
      "cells": [
        "user2@fb.com",
        "",
        "mhhmghjgjh"
      ]
    },
    {
      "cells": [
        "user3@fb.com",
        "",
        "jkhhjghjg"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To validate happypath flow of multiple users logging into the application",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am user and launch the application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.StepDefinition.i_am_user_and_launch_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"user1@fb.com\" and \"jkjkhjkg\" to the application",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.StepDefinition.i_enter_and_to_the_application(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the fb homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.StepDefinition.i_should_see_the_fb_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate happypath flow of multiple users logging into the application",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am user and launch the application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.StepDefinition.i_am_user_and_launch_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"user2@fb.com\" and \"mhhmghjgjh\" to the application",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.StepDefinition.i_enter_and_to_the_application(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the fb homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.StepDefinition.i_should_see_the_fb_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate happypath flow of multiple users logging into the application",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am user and launch the application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.StepDefinition.i_am_user_and_launch_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"user3@fb.com\" and \"jkhhjghjg\" to the application",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.StepDefinition.i_enter_and_to_the_application(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the fb homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.StepDefinition.i_should_see_the_fb_homepage()"
});
formatter.result({
  "status": "passed"
});
});