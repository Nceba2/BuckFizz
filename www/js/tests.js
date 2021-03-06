//the following units test are for sendHttpPost() method in jsfunctions.js file


QUnit.test( "Http post test should return ok", function( assert ) {
  assert.ok( sendHttpPost("http://nsportal.freevar.com/APIs/buckfizzAPI.php") == "ok", "Passed!" );
  });

QUnit.test( "Http post test should return reponse which is not null", function( assert ) {
  assert.ok( sendHttpPost("http://nsportal.freevar.com/APIs/buckfizzAPI.php") !== null, "Passed!" );
});

QUnit.test( "Http post empty url test should return null", function( assert ) {
  assert.ok( sendHttpPost("") === null, "Passed!" );
});