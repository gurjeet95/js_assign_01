let myarr=[]
myarr.push(1)        //add element to end of array
console.log(myarr)
myarr.unshift(2)     //add element to start of array
myarr.push(5)        //add element to end of array
// myarr.forEach((item,index)=>{console.log(   `${index}: ${item}`)}) 
myarr.shift()        //remove element from start
myarr.pop()         // remove element from end
myarr.forEach((item,index)=>{console.log(   `${index}: ${item}`)})
