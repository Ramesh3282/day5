const rotate=function(arr,k){
    let rotateArr=[]
    console.log("Anonymous")
    for(let i=0;i<k;i++){
        rotateArr.push(arr.shift())
    }
    console.log(rotateArr)
    console.log(arr)
    let ro_arr=arr.concat(rotateArr)
    return (ro_arr)
};


(function(arr,k){
    let rotateArr=[]
    console.log("Immediately")
    for(let i=0;i<k;i++){
        rotateArr.push(arr.shift())
    }
    console.log(rotateArr)
    console.log(arr)
    let ro_arr=arr.concat(rotateArr)
    console.log (ro_arr)
})([10,20,30,40,50],2);

console.log(rotate([10,20,30,40,50],2))