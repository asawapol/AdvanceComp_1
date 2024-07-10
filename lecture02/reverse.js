function reverString(value){
    let reversedValue = "";

    value.split("").forEach((char) =>{
        reversedValue = char + reversedValue;
    });
    return reversedValue;
}

console.log(reverString("Reverse Me"));