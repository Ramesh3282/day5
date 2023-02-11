const  primenumber=function(numberArr){
    console.log("Anonymous")
    primeArra=[]
    numberArr.forEach((val)=>{
       flag=true 
       for(i=2;i<val;i++){
        if (val%i==0){
            flag=false 
            break
        }
       }
       if (flag){
        primeArra.push(val)
       }
    })
    return (primeArra);
};

(function(numberArr){
    console.log("Immediately")
    primeArra=[]
    numberArr.forEach((val)=>{
       flag=true 
       for(i=2;i<val;i++){
        if (val%i==0){
            flag=false 
            break
        }
       }
       if (flag){
        primeArra.push(val)
       }
    })
    console.log(primeArra)
})([10,3,7,13,20,17]);



console.log("Prime Number",primenumber([5,7,2,15,11,13,78,90]));