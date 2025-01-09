let mixture=new Array("Dog",34,8.3,"Cat")
console.log(mixture.length)


let data1=[1,2,3]
let data2=[4,5,6]
let result=[...data1,...data2]
console.log(result)

//Spread Operator ...
function add(a,b){
    return a+b
}
let nums=[233,3444]
console.log(add(...nums))

//map 1
let info=[2.3,4,5,6]
let new_info=info.map((num)=>{
    return num+100
})
console.log(new_info)

//map 2
let names=['John','Arial','Smith']
names=names.map(name=> 'Mrs'+name)
console.log(names)

//filter method
let numbers=[1,2,3,4,5,6]
let filter_numbered=numbers.filter(num=>num!=4)
console.log(filter_numbered)

//reduce method
let reduced_numbers=numbers.reduce((prev,current)=>{
  return prev+current
})
console.log(reduced_numbers)