function promiseTimeout(ms){
    return new Promise((resolve, reject) => {
        setTimeout(resolve,ms);
    })
}

async function run(){
    //logig
    console.log("Start");
    //try take of await and compare
    await promiseTimeout(3000);
    console.log('Stop!')
}
console.log('Before Run');
run();
console.log('After Run');