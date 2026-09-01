interface User{
    name:string, 
    age:number,
    email:string
}


const users = new Map<string , User>()

// it makes the make strict

users.set("person1",{name:"Vinay" , age:23 ,email:"vinay@123"})
users.set("person2",{name:"Sarah", age:22 , email: "sarah@123"})

// if i forgot something to put in it gives error 

const user = users.get("person2")
console.log(user)