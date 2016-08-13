var request = require('request');
var axios = require('axios')
var addressFinder = (name, zip, callback) => {
	var formatedName = name.replace(/\s/g, '-');
	var url = 'https://www.whitepages.com/name/'+ formatedName + "/" + zip + "/asdlfjkeighasdf/../";
	console.log(url)
	axios({
		url: url,
		method: "GET",
		headers: {
			"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36"
		}
	})
	.then(function (response) {
		console.log(response)
		callback(response.data)
	})
	.catch(function (error) {
		console.log(error)
    	callback(error)
  	});
}


module.exports = addressFinder;
