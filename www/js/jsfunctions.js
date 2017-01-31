//this javascript file should have functions and objects that will be used by the app
	console.log("jsfunctions.js file openned.");

	var results=[];

function sendHttpPost(url){

	$.post(url,function(responseFromAPI){
		results.push(responseFromAPI);
		console.log("\n|\n|results recieved from API code: \n"+results[0]+"\n|\n|");
	});
	
	return "ok";
}