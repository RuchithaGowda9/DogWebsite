console.log("start async");
setTimeout(function(){
    console.log("Score = 90");
},2000);
console.log("end async");

let promise=new Promise(function(resolve,reject){
    requestCompleted=true;
    if(requestCompleted){
        resolve("The promised task is completed")
    }else{
        reject("The promised task is not completed")
    }
});
promise.then((fromRes)=>console.log(fromRes))
    .catch((fromRej)=>console.log(fromRej))
    .finally(()=>console.log("finally"));
