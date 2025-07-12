function fn() {
  var env = karate.env; // get system property 'karate.env'
  karate.log('karate.env system property was:', env);
  if (!env) {
    env = 'dev';
  }
  var config = {
    env: env,
   apiUrl: 'https://reqres.in/api'
  }
  if (env == 'dev') {
    config.userEmail = 'karate@test.com'
    config.userPassword = 'karate123'

  } else if (env == 'qa') {
    config.userEmail = 'karate2@test.com'
    config.userPassword = 'karate456'  }

 
  return config;
}