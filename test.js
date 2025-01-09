let test=function(){
    console.log("Hello")
}
test()

// ```Call Back function Part 1```
function sayName(name,fun){
    console.log(name)
    fun()
}
sayName("Wine Wine",function(){
    console.log("Hello,Nice to Me You!")
})

// ```Call Back function Part 2```
function sayName(names,fun){
    
    console.log("Welcome Baby:"+fun(names))
}
sayName("Wine",function(name){return name})

function twice(num,modifier){

  console.log(modifier(num)*2)
}
twice(5,function(num){
 return num+6
})

// ```Arrow Key Function```
let sayName=()=>"Hello"
console.log(sayName())

let greetings=(word)=>word;
console.log(greetings("Wine Nice to Me You"))

let twice=num=>num*2
console.log(twice(5))
