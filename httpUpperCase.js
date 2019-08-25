var map = require('through2-map')  

          var http = require('http')
  var fs = require('fs')                               


var server = http.createServer(function (req,res) {
       // request handling logic...
       // res.writeHead(200, { 'content-type': 'text/plain' })

       req.pipe(map(function (chunk) {                      
  return (chunk.toString().toUpperCase())    
})).pipe(res)                                     
                 
     })
		
     server.listen(process.argv[2])