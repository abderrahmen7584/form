var USER=document.querySelector("#username");
var MAIL=document.querySelector("#email");
var PASS=document.querySelector("#password");
var BT=document.querySelector("#bt");

async function go(){
    baseURL="http://localhost:8989"
    let obj={
        username: USER.value,
        email: MAIL.value,
        password: PASS.value
    };
    console.log(JSON.stringify(obj));
    let res=await fetch(baseURL,{
        method:'POST',
        headers:{
            "content-type":'application/json'
        },
        body:JSON.stringify(obj)
    })
    console.log(res);
    
}

BT.addEventListener("click",go);

console.log('window height : '+window.innerHeight);
console.log('width : ' + window.innerWidth);