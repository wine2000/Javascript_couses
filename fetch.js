
let userInput=prompt("Enter User ID to search:")
fetch('https://jsonplaceholder.typicode.com/todos/'+userInput)
.then((response)=>{
    return response.json()
})
.then((data)=>{
console.log(data)
})
.catch((err)=>{
    console.log(err)
})

async function fetchTodos(){
 try{
    let response=await fetch('https://jsonplaceholder.typicode.com/todos/')
    let data=await response.json()
    console.log(data)
 }
 catch(err){
    console.log(err)
 }
}
fetchTodos()

