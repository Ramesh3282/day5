const  palindrome=(numberArr)=>{
    
    palindromeArr=[]
    numberArr.forEach((val)=>{
       n=val 
       rev=0
       while(n>0){
        rev=rev*10+n%10
        n=Math.floor(n/10)

       }
       if (rev==val){
        palindromeArr.push(val)
       }
       
    })
    return (palindromeArr);
};


console.log("palindrome Number",palindrome([343,555,707,888,897]));