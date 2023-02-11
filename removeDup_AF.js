const removedup=function(arr){
    let unique=[]
    console.log("Anonymous")
    arr.forEach((val) => {
        if (unique.indexOf(val) === -1){
            unique.push(val)
        }
    })
    return (unique)
};

(function(arr){
    let unique=[]
    console.log("Immediately invoke function")
    arr.forEach((val) => {
        if (unique.indexOf(val) === -1){
            unique.push(val)
        }
    })
    console.log(unique)
})([10,20,20,30,40,50,50])


console.log("Remove duplicater",removedup([10,20,20,30,40,50,50]))