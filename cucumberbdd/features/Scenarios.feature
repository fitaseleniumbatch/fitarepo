Feature: To validate all scenarios of the loginfeature in facebook application

	
  Scenario: To validate the hpapy path flow for valid user logging into the application
    Given I am a valid registered user and launch the facebook application
    When I enter valid_username and valid_password
    Then I should see the homepage of the application



	Scenario Outline: To validate happypath flow of multiple users logging into the application
	Given I am user and launch the application
	
	When I enter "<username>" and "<password>" to the application
	
	Then I should see the fb homepage
	
	Examples:
	|username|    	|password|
	|user1@fb.com|  |jkjkhjkg|
	|user2@fb.com|	|mhhmghjgjh|
	|user3@fb.com|  |jkhhjghjg|