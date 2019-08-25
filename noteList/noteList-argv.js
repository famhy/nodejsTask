var argv = require('yargs').argv;

var jsonFile = require('jsonfile')
const search=(arr,item) =>{
     
    let i=0
    while(i<arr.length&&arr[i].Title!=item){
       
        i++
    }
   
    if(i>=arr.length){
        return -1
    }
    else{
        return i
    }
 }

 console.log(argv._)
jsonFile.readFile('noteList.json',(err,obj)=>{
    if(err) console.error(err)
    if(argv._[0]=='add')
    {
        if(((argv.title!==undefined&&argv.title!==true)||(argv.t!==undefined&&argv.t!==true))&&
        ((argv.body!==undefined&&argv.body!==true)||(argv.b!==undefined&&argv.b!==true))&&process.argv.length==7){
            let title = argv.title!==undefined? argv.title:argv.t
            let body = argv.body!==undefined?argv.body:argv.b
            console.log(title)
            if(search(obj.arr,title)==-1){
                obj.arr.push({Title:title,body:body})
                jsonFile.writeFile('noteList.json', obj)
                console.log('-- \n Title:',title,'\n', 'body:',body)
            }
            else{
                console.log('title already exists !')
            }
          
        }
        else if(argv.help!==undefined||argv.h!==undefined){
            console.log('add [--title || -t] [note title] [--body || -b] [note body]')
            console.log('option :\n --help, -h \t Show help  [boolean] \n --title, -t \t Title of note [required]  \n --body, -b \t Body of note [required]\n')
        }
        else{
            let mess='Missing required argument : '
            if((argv.title!==undefined&&argv.title!==true)&&(argv.t!==undefined&&argv.t)){
                mess+='title ,'
            }

            if((argv.body!==undefined&&argv.body!==true)&&(argv.b!==undefined&&argv.b!==true)){
                mess+='body ,'
            }
            console.log('add [--title || -t] [note title] [--body || -b] [note body]')
            console.log('option :\n --help , -h \t Show help  [boolean] \n --title, -t \t Title of note [required]  \n --body, -b \t Body of note [required]\n')
            console.log(mess.slice(0,mess.length-1))
        }
        // console.log(obj)
    }
    else if(argv._[0]=='list'){
        console.log('Printing ',obj.arr.length,'note(s).')
        for(i=0;i<obj.arr.length;i++){
            console.log('--')
            console.log('Title : ',obj.arr[i].Title)
            console.log('Body : ',obj.arr[i].body)
        }
    }
    else if(argv._[0]==='read'){
        if((argv.title!==undefined&&argv.title!==true)||(argv.t!==undefined&&argv.t!==true)){
            let title = argv.title!==undefined? argv.title:argv.t

            if(search(obj.arr,title)==-1){
                console.log('title not exists !')
            }
            else{
                console.log('--')
            console.log('Title : ',obj.arr[search(obj.arr,title)].Title)
            console.log('Body : ',obj.arr[search(obj.arr,title)].body)
            }
          
        }
        else if(argv.help!==undefined||argv.h!==undefined){
            console.log('learn [--title || -t] [note title]')
            console.log('option :\n --help, -h \t Show help  [boolean] \n --title, -t \t Title of note [required]')
        }
        else{
            let mess='Missing required argument : '
            if((argv.title!==undefined&&argv.title!==true)&&(argv.t!==undefined&&argv.t!==true)){
                mess+='title ,'
            }

            console.log('read [--title || -t] [note title]')
            console.log('option :\n --help, -h \t Show help  [boolean] \n --title, -t \t Title of note [required]')
            console.log(mess.slice(0,mess.length-1))
        }
    }
    else if(argv._[0]==='remove'){
        if((argv.title!==undefined&&argv.title!==true)||(argv.t!==undefined&&argv.t)){
            let title = argv.title!==undefined? argv.title:argv.t
            if(search(obj.arr,title)==-1){
                console.log('title not exists !')
            }
            else{
                obj.arr.splice(search(obj.arr,title),1)
                jsonFile.writeFile('noteList.json', obj)
                console.log('Note was removed')
            }
          
        }
        else if(argv.help!==undefined||argv.h!==undefined){
            console.log('remove [--title || -t] [note title]')
            console.log('option :\n --help, -h \t Show help  [boolean] \n --title, -t \t Title of note [required]')
        }
        else{
            let mess='Missing required argument : '
            if((argv.title!==undefined&&argv.title!==true)&&(argv.t!==undefined&&argv.t!==true)){
                mess+='title ,'
            }
            console.log('learn [--title || -t] [note title]')
            console.log('option :\n --help, -h \t Show help  [boolean] \n --title, -t \t Title of note [required]')
            console.log(mess.slice(0,mess.length-1))
        }
    }
    else{
        console.log('option :\n --add ')
    }
    
})

