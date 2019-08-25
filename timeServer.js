var net = require('net')
     var server = net.createServer(function (socket) {
       // socket handling logic
       let date = new Date()
       // socket.write(data)
       let data=""
       data=date.getFullYear()+"-"+(parseInt(date.getMonth())+1).toString().padStart(2,'0')+"-"+date.getDate().toString().padStart(2,'0')+' '+
       date.getHours().toString().padStart(2,'0')+':'+date.getMinutes().toString().padStart(2,'0')+'\n'
      
       socket.write(data)

       console.log(data)
       // if(data===null)
       // 		  socket.write("") 
       socket.end()
     })
     server.listen(process.argv[2])