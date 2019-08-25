var bl = require('bl')
var http = require('http')
var arg = process.argv[2]

http.get(arg,(rep)=>{
	 rep.pipe(bl(function (err, data) { /* ... */

	if(err) throw err

	console.log(data.toString().length)
	console.log(data.toString())

 }))
})

