const values=process.argv
console.log(values[2])
let num1=Number(values[2])
let num2=Number(values[3])
let sum=num1+num2
if(sum>100 && sum<1000)
{
    console.log(`sum is greater than 100 but less than 1000`)
}
else if(sum<100)
{
 console.log(`sum is less than 100`)   
    
}
else if(sum>10)
{
    
    console.log(`sum is greater than 10`)
}