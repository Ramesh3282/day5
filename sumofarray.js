const sumArra=function(numberArray){
    let sum=0
    console.log("Anonymous")
    numberArray.forEach((val) =>{

        sum=sum+val

    })
    return(sum)

};


(function(numberArray){
    let sum=0
    console.log("Immediately invoke function")
    numberArray.forEach((val) =>{

        sum=sum+val

    })
    console.log(sum)

})([10,20,30,40]);


console.log(sumArra([100,200,300,400]))