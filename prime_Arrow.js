const  primenumber=(numberArr)=>{
   
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

console.log(primenumber([5,7,2,15,11,13,78,90]))