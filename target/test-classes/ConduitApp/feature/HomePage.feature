Feature: Tests in Home Page



Scenario: Get all Tags
    Given url 'https://conduit.productionready.io/api/tags'
    When method Get
    Then status 200
    And match response.tags contains ['cars' , 'baby']

cenario: Get 10 articles from the page
    Given params  { limit:10 , offset: 0}
    Given url 'https://conduit.productionready.io/api/articles'
    When method Get
    Then status 200
    