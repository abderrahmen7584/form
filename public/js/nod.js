    
    function add(dataa){
    const fs=require("fs")
    fs.exists("jsonfile.json",(exists)=>{
        if(!exists){
            let obj={
                table: [],
                count: 0
            };
            obj.table.push(dataa);
            obj.count++;
            let json=JSON.stringify(obj);
            fs.writeFile("jsonfile.json",json,(err)=>{
                if(err){
                    throw err;
                }
            });
        }
        else{
            fs.readFile("jsonfile.json", (err,obj)=>{
                if(err){
                    console.log(err);
                }
                else{
                    let a=JSON.parse(obj);
                    a.table.push(dataa);
                    a.count++;
                    let json=JSON.stringify(a);
                    fs.writeFile("jsonfile.json",json,(err)=>{
                        if(err){
                            throw err;
                        }
                    });
                }
            })
        }
    })
}