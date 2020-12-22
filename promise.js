// function promiseReturnVal (boolparam){
//     return new Promise ((resolve,reject)=>{
// if(boolparam){
//     resolve('good')
// }
// else{
//     reject('bad') 
// }
//     })
// }
// let bool = true;
// promiseReturnVal(bool)
// .then(res=>console.log(res))
// .catch(rej=>console.log(rej))
// .finally(()=>{ })

// bool = false;
// promiseReturnVal(bool)
// .then(res=>console.log(res))
// .catch(rej=>console.log(rej))
// .finally(()=>{ })

// ==================================================

// let counter =1;
// function ranNum(numberOfInput){
//     return new Promise((resolve,reject)=>{
//         let head = Math.floor((Math.random() * 10) + 1); 
//     console.log(head)
//         if(numberOfInput == head){
//             resolve(`nice work do it again` + ` ${head}`)
//         }

//     reject ('you lost try agin')

//     })
// }

// function ranNumbtn(){
//     ranNum(mainInput.value)
// .then(res=>printToDiv(res))
// .catch(rej=>printToDiv(rej))
// .finally(()=>{
//     counterDiv.innerHTML = `<div>numbers of trys: ${counter++}</div>`
// })
// }




// function printToDiv(prams){
//     mainDiv.innerHTML = prams
// }
// ===============================================

let counter =1;
 function ranNum(numberOfInput){
    return new Promise((resolve,reject)=>{
        let head = Math.floor((Math.random() * 10) + 1); 
    console.log(head)
        if(numberOfInput == head){
            resolve(`nice work do it again` + ` ${head} 😀` )
        }

    reject ('you lost try agin 😭')

    })
}

async function ranNumbtn(){
try{
    let lotto = await ranNum(mainInput.value);
    printToDiv(lotto)
}
catch (error){
    printToDiv(error)
}
finally{
    counterDiv.innerHTML = `<div><h3>numbers of trys: ${counter++}</h3></div>`
}
}

function printToDiv(prams){
    mainDiv.innerHTML = prams
}