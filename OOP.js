// //OOP constructor
// class Car{
//     Name=''
//     wheels=4
//    constructor(name,wheels){
//     this.Name=name
//     this.wheels=wheels
//     this.drive()
   
//    }
//    drive(){
//     console.log(this.Name+' is driving')
//    }
//    gerWheel(){
//     console.log(this.Name+' has '+this.wheels+" Wheels")
//    }
//   }
//   new Car("Vanguard",4)
//   let car=new Car('Toyota',10)
//   car.gerWheel()

// //OOP accessifier
// class Person{
//     name='wine wine'
//     #relation='Single'
//     info(){
//     console.log('Her is'+" "+this.#relation)
//     }
// }
// let person=new Person()
// person.name='Ei Thinzar Phyo'
// console.log(person)
// console.log(person.name+' is beauty girl.')
// person.info()


///OOP inheritance
// class Animal{
//     constructor(name){
//         this.Name=name
//         console.log(`${this.Name}`)
//         this.run()
        
//     }
//     run(){
//     console.log(`${this.Name} is running`)
//     }
// }
// new Animal("Dog")

// class Cat extends Animal{
//          speak(){
//             console.log(`${this.Name} is Moww Moww.`)
//         }
// }
// let cat=new Cat("Cat")
// cat.speak()

//OOP asynchronous Promise

function asynchronous(){
    return new Promise((resolve,reject)=>{
        let result=0
        for(let x=0;x<100000;x++){
            result+=x
        }
       if (result){
         resolve(result)
       }
       else{
        reject("I have got an error.")
       }
    })
}
console.log("Work")
asynchronous()
    .then((result)=>{
    console.log(result)
    console.log("After syn task")
    })
    .catch((error)=>{
    console.log(error)
    })
console.log("More than Work")

