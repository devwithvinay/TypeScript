// readonly 

type User ={
    name:string, 
    age:number
}

let user: Readonly<User> ={
    name:"Vinay",
    age:23
}

// user.age = 23 // it allows
// user.name= "sumit" //  when i put readonly on name gives an error