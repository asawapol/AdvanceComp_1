//Date function return miliseconds that have elapsed
//since midnight on January 1, 1970, UTC
//this example takes 2 seconds to run
const start = Date.now();

console.log('starting timer...');

setTimeout(() =>{
    const millis = Date.now() -start;

    console.log(`seconds elapsed = ${Math.floor(millis / 1000)}`);
}, 2000);