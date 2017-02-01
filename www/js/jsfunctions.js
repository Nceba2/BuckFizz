//this javascript file should have functions and objects that will be used by the app
	console.log("jsfunctions.js file openned.");

var results=[];

function sendHttpPost(url){
	

		try{
			if (url!==null && url!=="") {
			$.post(url,function(responseFromAPI){
				results.push(responseFromAPI);
				console.log("\n|\n|results recieved from API code: \n"+responseFromAPI+"\n|\n|");
			}).fail(function(xhr){return null;});

			return "ok";
			}else{
				console.log("url error")
				return null;
			}
		}catch(ex){
			console.log(ex);
			return null;
		}

}