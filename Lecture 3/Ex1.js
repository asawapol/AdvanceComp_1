let values1 = ['Apple', 1, false];
let values2 = ['Fries', 9, true,'Mars'];
let values3 = ['Mars', 9, 'Apple'];
console.log(values3.lengt);


for (let big = 0;  big < values1.length; big++){
    for (let kuma = 0; kuma < values2.length; kuma++) {
        if (values1[big] === values2[kuma]){
            console.log(`The values1 เหมือนกับ values2,ที่คำว่า: ${values1[big]}`);
        }
    }
}

for (let big = 0;  big < values1.length; big++){
    for (let kuma = 0; kuma < values3.length; kuma++) {
        if (values1[big] === values3[kuma]){
            console.log(`The values1 เหมือนกับ values3,ที่คำว่า: ${values1[big]}`);
        }
    }
}

for (let big = 0;  big < values2.length; big++){
    for (let kuma = 0; kuma < values3.length; kuma++) {
        if (values2[big] === values3[kuma]){
            console.log(`The values2 เหมือนกับ values3,ที่คำว่า: ${values2[big]}`);
        }
    }
}



// for (let i = 0; i < values1.length; i++) { 
//   if (values2 == values1[i]) {
//     console.log(`The values1 เหมือนกับ values2, ที่คำว่า: ${values1[i]}`);
//   }
//   if (values3.includes(values1[i])) {
//     console.log(`The values1 เหมือนกับ values3, ที่คำว่า: ${values1[i]}`);
//   }
// }
// for (let i = 0; i < values2.length; i++) {
//   if (values3.includes(values2[i])) {
//     console.log(`The values2 เหมือนกับ values3,ที่คำว่า: ${values2[i]}`);
//   }
// }




