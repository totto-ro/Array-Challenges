
/*each time the value is "food" it should console log "yummy". 
If "food" was not present in the array console log "I'm hungry" once*/

function alwaysHungry(arr) {
    let yummyCount = 0;
    for(let i = 0; i < arr.length; i++){
        if( arr[i] == "food" ){
            yummyCount++;
            console.log("yummy");
        }
    }
    if (yummyCount == 0){
        console.log("I am alwaysHungry");
        }

}
alwaysHungry([3.14, "food", "pie", true, "food"]);

alwaysHungry([4, 1, 5, 7, 2]);


/*return a new array containing only the values larger 
than cutoff*/

function highPass(arr, cutoff) {
    var filteredArr = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > cutoff){
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result);


/*return a count of how many of the numbers are larger than the average*/

function betterThanAverage(arr) {
    var sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum = sum + arr[i];
        avg = sum / arr.length;
    }
    var count = 0;
    for(let i = 0; i < arr.length; i++){
        if (arr[i] > avg ){
            count++;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result);


/*Write a function that will reverse the values an array and return them*/

function reverse(arr) {
    let swap = arr[0];
    arr[0] = arr[arr.length-1]
    arr[arr.length-1] = swap;

    let swapSecond = arr[1];
    arr[1] = arr[arr.length-2]
    arr[arr.length-2] = swapSecond;

    return arr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result);


/*Write a function that will return an array of Fibonacci numbers up to a given length n.
Numbers are calculated by adding the last two values in the sequence together*/

function fibonacciArray(n){
    var fibArr = [0, 1];
    for(let i = 0; fibArr.length < n; i++){
        let prevNum = fibArr[fibArr.length - 1];
        let prevprevNum = fibArr[fibArr.length - 2];
        fibArr.push (prevNum + prevprevNum);
    }
    return fibArr;
}
var result = fibonacciArray(10);
console.log(result);
