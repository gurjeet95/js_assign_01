const values=process.argv
let mealcost=Number(values[2])
let tip=Number(values[3])
let totalmealcost=mealcost+((tip/100)*mealcost)
console.log(`Total meal cost is ${totalmealcost}`)
