const odd=(numberArr) =>{

    numberArr.forEach((val)=>{
        if (val%2!=0){
            console.log(val)
        }
    })
}

odd([10,15,20,25,30,35])