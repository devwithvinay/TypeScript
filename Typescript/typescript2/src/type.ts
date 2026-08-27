
interface User2 {
  name: string;
  age: number;
} 

// similar but " = " in types

type User = {
    name: string , 
    age: number
}

function greet(user: User){
    return "hlo"+user.name
}

let user = {
    name: "Vinay",
    age : 23
}

// Union and Intersections 

// Union 
type userId = string | number

function printId(id:userId ){
    console.log(id);
}



printId("vinay")
printId(101)

// another example

type Admin = {
    name:string,
    role:"admin"
}
 
type consumer = {
    name :string ,
    role: "consumer"
}
 type person1 = Admin | consumer 

let checkUser: person1={
    name:"Vinay",
    role:"admin"
    //or
    // role:"consumer"
}

// Intersection 

type Person = {
    name:string
}

type Empolyee = {
    id:number
}

type Manager = Person & Empolyee

let manager: Manager = {
    name: "Vinay",
    id: 101
}

// Manager ko person and Employee dono ki property Chahiye 

type people ={
    name: string, 
    age : number
}
 
type address = {
    city : string , 
    pincode: number
}

type vinayDetail = people & address 

let vinayWithAddress: vinayDetail = {
  name: "Vinay Kumar",
  age: 23,
  city: "Chas",
  pincode: 12344,
};

// Vinay details me vinay and uska address dono Chahiye 

