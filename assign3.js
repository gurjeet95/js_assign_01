const values=process.argv
let num1=Number(values[2])
let num2=Number(values[3])
let sum=num1+num2
let output
if(sum>10 && sum<100)
{
    
    output="sum is greater than 10 but less than 100"
}
else if(sum>100 && sum<1000)
{
    output="sum is greater than 100 but less than 1000"
}
console.log(output)
