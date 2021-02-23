// //create a Promise chain that uses SlowMath to perform all of the following operations, in this exact order:
// slowMath.add(6, 2)
// .then(result => {
//     console.log(result);
//     return slowMath.multiply(result, 2);
// }).then(result => {
//     console.log(result);
//     return slowMath.divide(result, 4);
// }).then(result => {
//     console.log(result);
//     return slowMath.subtract(result, 3);
// }).then(result => {
//     console.log(result);
//     return slowMath.add(result, 98);
// }).then(result => {
//     console.log(result);
//     return slowMath.remainder(result, 2);
// }).then(result => {
//     console.log(result);
//     return slowMath.multiply(result, 50);
// }).then(result => {
//     console.log(result);
//     return slowMath.remainder(result, 40);
// }).then(result => {
//     console.log(result);
//     return slowMath.add(result, 32);
// }).then(result => {
//     console.log(`The final result is ${result}.`);
// }).catch(err => {
//     console.log(err);
// });


async function doMath() {
    try {
        let value = await slowMath.add(6, 2);
        console.log(value);
        let valueNext = await slowMath.multiply(value, 2);
        console.log(valueNext);
        let value2 = await slowMath.divide(valueNext, 4);
        console.log(value2);
        let value3 = await slowMath.subtract(value2, 3);
        console.log(value3);
        let value4 = await slowMath.add(value3, 98);
        console.log(value4);
        let value5 = await slowMath.remainder(value4, 2);
        console.log(value5);
        let value6 = await slowMath.multiply(value5, 50);
        console.log(value6);
        let value7 = await slowMath.remainder(value6, 40);
        console.log(value7);
        let value8 = await slowMath.add(value7, 32);
        console.log(`The answer is ${value8}`);
        
    } catch (error) {
        console.error("looks like there's an error!")
    }}
doMath();

