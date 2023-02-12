const stringtitleconversion=(strArr)=>{
    console.log("Anonymous")
    let stringArr=[]
    strArr.forEach((val)=>{
        
        stringArr.push(val.charAt(0).toUpperCase()+val.slice(1))
    })
    return(stringArr)
};

console.log(stringtitleconversion(["hi","hello","welcome"]));