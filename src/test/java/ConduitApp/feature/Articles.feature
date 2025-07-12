Feature: Articles
Background: Define URL
Given url apiUrl

Scenario: Get all Tags
    //Given path 'users/login'
    //And request  { "user":  { "email": "karate@test.com" , "password": "karate123"}}
    //When method Post
    //Then status 200
    //* def token = response.user.token
    * def TokenResponse = callonce read ('classpath:helpers/CreateToken.feature')
    * def Token = TokenResponse.authToken


    Given header Authorisation = 'Token' + token
    Given path 'articles'
    And request  { "article":  { "taglist":[] , "title": "Bla bla" , "description": "test test","body": "body" }}
    When method Post
    Then status 200
    And match response.article.title == 'Bla bla'

