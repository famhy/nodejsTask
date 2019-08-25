var fs = require('fs')

 module.exports = function (ext,dir,callback){

	return list = fs.readdir(dir,(err,list)=>{
	if(err) {
		// console.log(err)
		return callback(err,null);
	}
	
	// console.log(ext)
	callback(null,list.filter(el => el.includes(ext)).map(el=> console.log(el)))
})
}

// function bar (callback) {
//        foo(function (err, data) {
//          if (err)
//            return callback(err) // early return

//          // ... no error, continue doing cool things with `data`

//          // all went well, call callback with `null` for the error argument

//          callback(, data)
//        })
//      }
