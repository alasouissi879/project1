import com.intuit.karate.gatling.PreDef._
import io.gatling.core.Predef._
import io.gatling.http.Predef._ // Import the HTTP DSL
import scala.concurrent.duration._
import scala.language.postfixOps

class ApiTest extends Simulation {
  val headers_10 = Map("Content-Type" -> """application/json""")

  //http configuration

  val httpProtocol = http.baseUrl("https://reqres.in")

  // Scenario Definition
   
  val scn = scenario("BasicSimulation")
    .exec(http("request_1")
      .post("/api/login")
      .headers(headers_10)
      .body(StringBody("""{
                           "email": "eve.holt@reqres.in",
                            "password": "cityslicka"
   
                       } """)).asJson
      .check(status.is(200))) // Check for status 200
    .pause(5)

    // Load Simulation

  setUp(
    scn.inject(atOnceUsers(1000))
  ).protocols(httpProtocol)
}