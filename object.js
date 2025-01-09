console.log(window)

setTimeout(() => {
    console.log("HI")
}, 3000);

let persons={
    name:'aung',
    age:34,
    eat:()=>{
      console.log(this)
      setTimeout(() => {
        console.log(this)
      }, 3000);
    }
}
console.log(persons.eat())

let person1={
    name:'wine'
}
let person2={
    age:32
}
let person3={...person1,...person2}
console.log(person3)

let {hairColor,height}={'hairColor':'Black',height:5}
console.log(hairColor)
console.log(height)

let person=[
    {name:'wine',age:24,gender:'girl'},
    {name:'phyo',age:67,gender:'girl'},
    {name:'hein',age:13,gender:'boy'}
]

let names=person.map((p)=>{
    return p.name
})
console.log(names)

let filtered_girl=person.filter((p)=>{
    return p.gender==="girl" && p.age>50
})
console.log(filtered_girl)

let Sname=prompt("Search to name:")
let search=person.map((p)=>{
 return p.name.includes(Sname)
})
console.log(search)

//JSON format
let fruits='{"apple":200,"orange":300}'
console.log(JSON.parse(fruits))

const jsonString = {"name":"John","age":30,"isStudent":false};
console.log(JSON.stringify(jsonString))

let prices=[100,200,34,68,13,56,900,200]
let filtered_price=prices.map(price=>{
    if(price==100)
       price-=100
    return price
})
console.log(filtered_price)

let age=30
let strs=age>18?"Yes":"NO"
console.log(strs)

//switch case statement
let person_s=[
         {name:'wine',age:24,gender:'girl'},
         {name:'phyo',age:67,gender:'girl'},
         {name:'hein',age:13,gender:'boy'}
     ]

let people=person.map(human=>{
    switch(human.gender){
    case 'girl':
        console.log("Girl")
    case 'boy':
        console.log("BOy")
    default:
        console.log("Unknown.")
}
return human
})
console.log(people)

//for loop
for(let x=0;x<3;x++){
 console.log("HIIHIHI"+x)
}

let str=['wine','mama','ei']
for(let st=0;st<str.length;st++){
    console.log(str[st])
}

//for of loop
let stre=['wine','mama','ei']
for(st of stre){
    console.log(st)
}

//for in loop
let alpha={
    'a':'apple',
    'b':'brown'
}
for(al in alpha){
    console.log(`${al} is ${alpha[al]}`)
}