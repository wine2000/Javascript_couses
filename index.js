String

let greet='Hello World'
console.log(greet)

let my_name='wine'
console.log(my_name)

let height=`5"1'`
console.log(height)

//Template String using
console.log(`${greet} ${my_name} .\nYour height is ${height}`)

//Boolean datatype
console.log(Boolean(greet))
console.log(Boolean(""))

//undefined
let a;
console.log(a)
//null
let b=null
console.log(b)
//NaN
let num1;
let num2=1;
console.log(num1+num2)

Expression
1+2
"abf"+3
//Output value 

statement
let sum=1+2
//Output undefined
 

```Age Calculation ```
function age_Calculate(age){
    const current=new Date().getFullYear()
    if (age >current){
        console.log("Impossible age!")
        return null
    }
    else{
        return current-age
    }
   
}
let user_age=prompt("Show Me Your Birthday(Y): ")
if (isNaN(user_age)){
    console.log("Invalid input.Please Enter valid input.")
}
else{
    let result=age_Calculate(parseInt(user_age))
    if (result!=null){
        console.log("Your age is: "+result+" Years old.")
    }
}

//String
let str=" Wine  "
str=str.trim()
console.log(str)

//Object Create
let person={
    name:'wine',
    age:25,
    cute:['hair','body','finger'],
    eat(){
        console.log("Her skin is so beautiful.")
    }
}
console.log(person.cute)