  var http = require('http')
  var fs = require('fs')
     var server = http.createServer(function (req, res) {
       // request handling logic...
       res.writeHead(200, { 'content-type': 'text/plain' })
       src=fs.createReadStream(process.argv[3])
       // src.close();
       src.pipe(res)
     })
     server.listen(process.argv[2])