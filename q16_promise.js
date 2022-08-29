const myPromise=new Promise((resolve,reject)=>{
    let a="Apple"
    if (a=="Apple"){
        resolve("It is right");
    }
    else{
        reject("It is wrong answer");
    }
})
myPromise.then((value)=>{
    console.log(value);
}).catch((error)=>{
    console.log(error);
})
// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
const myyPromise=new Promise((resolve,reject)=>{
    let a="Apple"
    if (a=="Apple"){
        reject("It is right");
    }
    else{
        reject("It is wrong answer");
    }
})
myyPromise.then((value)=>{
    console.log(value);
}).catch((error)=>{
    console.log(error);
})
