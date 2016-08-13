var request = require('request');
var cheerio = require('cheerio');
module.exports = (name, zip, callback) => {
	var formatedName = name.replace(/\s/g, '-');
	var url = 'https://www.411.com/name/'+ formatedName + "/" + zip;
	request({
		url: url,
		method: "GET",
		headers: {
			"Host": "www.whitepages.com",
			"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36"
		}
	}, (err, res, html) => {
		var $ = cheerio.load(html);
		var path = $('.clickstream-link').eq(0).attr('href');
		console.log(path);
		var url2 = 'https://www.411.com'+path;
		setTimeout(function() {
		return request({
			url: url2,
			method: "GET",
			headers: {
				"Host": "www.whitepages.com",
				"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36"
			}
		}, (err, res2, html2) => {
			var $ = cheerio.load(res2.body);
			var address = $('.address-card').eq(0).text();
			return callback(address);
		})}, 5000);
		
	});
};