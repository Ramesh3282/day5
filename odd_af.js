const  findOddNUmber=function(numberArr){
    console.log("Anonymous")
    numberArr.forEach((val)=>{
        if (val%2!=0){
            console.log(val)
        }
    })
};


(function(number){
    console.log("Immediately invoke function");
    number.forEach((val)=>{
        if (val%2!=0){
            console.log(val)
        }
    })
   
  
})([10,15,20,25,30,35,45]);


const number_array=[5,10,13,77,80];
findOddNUmber(number_array);


