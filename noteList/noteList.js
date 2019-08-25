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

jsonFile.readFile('noteList.json',(err,obj)=>{
    if(err) console.error(err)
    if(process.argv[2]==='add')
    {
        if((process.argv[3]==='--title'||process.argv[3]=='-t')&&
        (process.argv[5]==='--body'||process.argv[5]=='-b')&&process.argv.length==7){
            if(search(obj.arr,process.argv[4])==-1){
                obj.arr.push({Title:process.argv[4],body:process.argv[6]})
                jsonFile.writeFile('noteList.json', obj)
                console.log('-- \n Title:',process.argv[4],'\n', 'body:',process.argv[6])
            }
            else{
                console.log('title already exists !')
            }
          
        }
        else if(process.argv[3]==='--help'||process.argv[3]=='-h'){
            console.log('add [--title || -t] [note title] [--body || -b] [note body]')
            console.log('option :\n --help, -h \t Show help  [boolean] \n --title, -t \t Title of note [required]  \n --body, -b \t Body of note [required]\n')
        }
        else{
            let mess='Missing required argument : '
            if(process.argv[3]!=='--title'&&process.argv[3]!=='-t'){
                mess+='title ,'
            }

            if(process.argv[5]!=='--body'&&process.argv[5]!=='-b'){
                mess+='body ,'
            }
            console.log('add [--title || -t] [note title] [--body || -b] [note body]')
            console.log('option :\n --help , -h \t Show help  [boolean] \n --title, -t \t Title of note [required]  \n --body, -b \t Body of note [required]\n')
            console.log(mess.slice(0,mess.length-1))
        }
        // console.log(obj)
    }
    else if(process.argv[2]==='list'){
        console.log('Printing ',obj.arr.length,'note(s).')
        for(i=0;i<obj.arr.length;i++){
            console.log('--')
            console.log('Title : ',obj.arr[i].Title)
            console.log('Body : ',obj.arr[i].body)
        }
    }
    else if(process.argv[2]==='read'){
        if((process.argv[3]==='--title'||process.argv[3]=='-t')&&process.argv.length==5){
            if(search(obj.arr,process.argv[4])==-1){
                console.log('title not exists !')
            }
            else{
                console.log('--')
            console.log('Title : ',obj.arr[search(obj.arr,process.argv[4])].Title)
            console.log('Body : ',obj.arr[search(obj.arr,process.argv[4])].body)
            }
          
        }
        else if(process.argv[3]==='--help'||process.argv[3]=='-h'){
            console.log('learn [--title || -t] [note title]')
            console.log('option :\n --help, -h \t Show help  [boolean] \n --title, -t \t Title of note [required]')
        }
        else{
            let mess='Missing required argument : '
            if(process.argv[3]!=='--title'&&process.argv[3]!=='-t'){
                mess+='title ,'
            }

            console.log('learn [--title || -t] [note title]')
            console.log('option :\n --help, -h \t Show help  [boolean] \n --title, -t \t Title of note [required]')
            console.log(mess.slice(0,mess.length-1))
        }
    }
    else if(process.argv[2]==='remove'){
        if((process.argv[3]==='--title'||process.argv[3]=='-t')&&process.argv.length==5){
            if(search(obj.arr,process.argv[4])==-1){
                console.log('title not exists !')
            }
            else{
                obj.arr.splice(search(obj.arr,process.argv[4]),1)
                jsonFile.writeFile('noteList.json', obj)
                console.log('Note was removed')
            }
          
        }
        else if(process.argv[3]==='--help'||process.argv[3]=='-h'){
            console.log('learn [--title || -t] [note title]')
            console.log('option :\n --help, -h \t Show help  [boolean] \n --title, -t \t Title of note [required]')
        }
        else{
            let mess='Missing required argument : '
            if(process.argv[3]!=='--title'&&process.argv[3]!=='-t'){
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

