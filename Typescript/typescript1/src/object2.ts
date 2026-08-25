

let firstName: string = "Vinay"
let age: number = 23

function greet( user:{
       name: string,
       age: number,
       email:string
}){
// this is an type of an object
}

let user:{
    name: string,
    age: number,
    email:string
} = {
    name:"vinay",
    age:23,
    email:"email.com"

}
// har jagar user: {} ka type declare krne accha ek variable me type store kr k as user: userType kar kw pass krna like this 
/*

   function greet( user:{ // typeData 
    name: string,
    age: number,
    email:string 
   ){
    
// this is an type of an object
       }

let user:{ // typeData
    name: string,
    age: number,
    email:string
} = {
    name:"vinay",
    age:23,
    email:"email.com"

}


*/

// if i change in object we need to change in two places , so repeating is bad practice so for this interface comes to picture

// if we pass like variable in this user:{name:string , age:number , lastname:string} 
                                // user: userType