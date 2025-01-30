// Задание 9. Написать несколько методов, которые выполняют то же, что и существующие.
/*mySlice(arr, [start], [end]) - делает то же самое, что и arr.slice([start], [end]) только без использования само собой внутри себя arr.slice
И аналогично еще парочка:
myIndexOf(arr, item, from)
myIncludes(arr, item, from)*/

const originalArr = [1, 2, 3, 4, 5];

function mySlice (arr, start = 0, end = arr.length) {
    if (start < 0){
        start = Math.max(arr.length + start, 0);
    }

    if (end < 0){
        end = Math.max(arr.length + end, 0);
    }

    let result = [];
    for (let i = start; i < end; i++){
        if (i < arr.length){
            result.push(arr[i]);
        }
    }
    return result;
}

console.log (mySlice (originalArr, 2));
console.log (mySlice (originalArr, -3, -2));
console.log (mySlice (originalArr, 1, 4));

function myIndexOf(arr, item, from = 0){
    if (from < 0){
        from = Math.max(arr.length + from, 0);
    }

    if (from >= arr.length) {
        return -1;
    }

    for (let i = from; i < arr.length; i++){
        if (arr[i]===item){
            return i;
        }
    }
    return -1;
}

console.log(myIndexOf(originalArr, 3));
console.log(myIndexOf(originalArr, 6)); 
console.log(myIndexOf(originalArr, 4, -3)); 

function myIncludes(arr, item, from = 0){
    if (from < 0){
        from = Math.max(arr.length + from, 0);
    }

    if (from >= arr.length) {
        return false;
    }

    for (let i = from; i < arr.length; i++){
        if (arr[i]===item){
            return true;
        }
    }
    return false;
}

console.log(myIncludes(originalArr, 3));
console.log(myIncludes(originalArr, 6)); 
console.log(myIncludes(originalArr, 4, -3)); 