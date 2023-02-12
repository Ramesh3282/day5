const sumArra=(numberArray)=>{
    let sum=0
    
    numberArray.forEach((val) =>{

        sum=sum+val

    })
    return(sum)

};

console.log(sumArra([100,200,300,400]))