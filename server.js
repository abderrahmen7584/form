const express=require("express")
const app=express();
const port=8989;

app.use(express.static("public"))
app.use(express.json())

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
app.post("/",(req,res)=>{
    let data=req.body;
    console.log(data);
    if (!data){
        return res.status(400).send({status:"failed to add"});
    }
    res.status(200).send({status:"added"});
    add(data);
})
app.listen(port,()=>{console.log(`server started on port :${port}`)});
