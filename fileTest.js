
var fs = require('fs')
var file = process.argv[2]

var string = fs.readFile(file,(err,data)=>{
	if(err)throw err;
	
	console.log(data.toString().split('\n').length-1)

	
})
var nb=0


// if(string)
// console.log(string.toString().split('\n').length-1)
// console.log(string.split('\n'))