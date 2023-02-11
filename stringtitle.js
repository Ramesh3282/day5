const stringtitleconversion=function(strArr){
    console.log("Anonymous")
    let stringArr=[]
    strArr.forEach((val)=>{
        
        stringArr.push(val.charAt(0).toUpperCase()+val.slice(1))
    })
    return(stringArr)
};




(function(strArr){
    console.log("Immediately invoke function");
    let stringArr=[]
    strArr.forEach((val)=>{
        
        stringArr.push(val.charAt(0).toUpperCase()+val.slice(1))
    })
    console.log((stringArr))
})(["hi","hello","welcome"]);


console.log(stringtitleconversion(["hi","hello","welcome"]));

