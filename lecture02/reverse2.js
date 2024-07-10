function reverString(value){

    const reversedValue =  value.split('').reverse().join('')
    return reversedValue;
}

console.log(reverString("Hello JavaScript"));