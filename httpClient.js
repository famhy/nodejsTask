var http = require('http')
var arg = process.argv[2]

http.get(arg,(rep)=>{
	 rep.on('data',(data)=>{
	 	console.log(data.toString())
	 })
})