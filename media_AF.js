const  median=function(arr1,arr2){
    console.log("Anonymous")
    const arr3=arr1.concat(arr2)
    const m=(arr3.length)/2
    return ((arr3[m]+arr3[m+1])/2)
    
};

(function(arr1,arr2){
    console.log("Immediately")
    const arr3=arr1.concat(arr2)
    const m=(arr3.length)/2
    console.log ((arr3[m]+arr3[m+1])/2)
})([1,2,3],[4,5,6]);



console.log("Median",median([1,2,3],[4,5,6]));