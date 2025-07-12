Feature: Get method for single user api
Background: 
    * url https://reqres.in



Scenario: Api Test
    Given path '/api/users?page=2'
    When method Get
    Then status 200

    
