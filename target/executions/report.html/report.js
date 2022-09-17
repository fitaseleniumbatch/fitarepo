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
});