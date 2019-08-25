var dir = process.argv[2]
var ext = '.'+process.argv[3]
var fs = require('./searchModule')

fs(ext,dir,(err,list)=>{
	if (err) throw err;

	// console.log(list)
})

