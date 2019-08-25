var http = require('http')
var bl = require('bl')

var arg = process.argv[2]
var arr =["","",""]
var count = 0
for(let i=2;i<process.argv.length;i++){

// 	http.get(process.argv[i],(rep)=>{
// 	 rep.on('data',(data)=>{
// 	 	arr[i-2]+=data.toString()
	 	
// 	 })
// 	 rep.on('end',()=>{
// 	 	console.log(arr[i-2])
	 	
// 	 })
// })

	http.get(process.argv[i],(rep)=>{
	 rep.pipe(bl(function (err, data) { /* ... */

	if(err) throw err

	// console.log(data.toString().length)
	arr[i-2]=data.toString()
	count++

	if(count===3){
		for(let j=0;j<3;j++)
			console.log(arr[j])
	}

 }))
})


}
