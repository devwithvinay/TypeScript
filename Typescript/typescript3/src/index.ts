//revision 

// function Greet (name:string){
//     console.log("hello", name)
// }

// Greet("Vinay")

// function sum(num1: number , num2 : number) : number{
//     return num1 + num2 
// }

//  console.log(sum(4,2));

// function Delay(fn:()=>void){
//     setTimeout(fn ,1000)
// }

// Delay(()=>{
//     console.log('Hii There ! ');
// })

// function DelayedFn(anotherFn:(a:string)=>string){
//     setTimeout(anotherFn , 2000)
// }

// function Greet(name:string){
//     return name
// }

// console.log(DelayedFn(Greet))

//  NUmber 

// function sum(num1: number , num2: number){
//     return num1 + num2
// }

// console.log(sum(56,34));

// // String

// function Greet(name: string){
//     return "hello"+name
// }

// Greet("VInay")

// // Boolean

// function isEven(num: number): boolean{
//     if(num%2===0){
//         return true
//     }else{
//        return  false
//     }
// }

// isEven(5)


// object 
// interface User{
//     name: string,
//     age: number,
//     address?:{
//        vill: string, 
//        pincode: number
//     }
// }

// let user: User ={
//     name:"Vinay",
//     age:23,
//     address:{
//         vill: "nawadih",
//         pincode:1234
//     }
// }
// let user2: User={
//       name:"ravi",
//       age: 20
// }

// function isLegal(user:User):boolean{
//     if(user.age>18){
//         return true

//     }else{
//         return false
//     }
// }

// isLegal(user)

// // onbject with function

// interface person {
//     name: string,
//     age: number,
//     greet():string,
//     greet2:()=>string
// }

// let people: person={
//     name:"Vinay",
//     age:23,
//     greet(){
//         return "welcome"
//     },
//     greet2:()=>{
//         return "Vinay"
//     }
// }

// people.greet()
// people.greet2()


// interface person{
//     name: string , 
//     age: number,
//     isLegal(): boolean
// }


// class Manager implements person{
//     name: string;
//     age: number;

//     department : string
//     constructor(name:string , age: number , department:string){
//     this.name = name;
//     this.age = age;
//     this.department = department
//     }
//     isLegal(){
//         return this.age>18
//     }
// }

// let people = new Manager("john" , 34 ,"engineer")

// console.log(people.isLegal())

// console.log(people.name);
// console.log(people.age);
// console.log(people.department);
 

// // address applied in persnol data 

// interface Address{
//     vill: string , 
//     hNo: number, 
//     pincode: number,
//     country: string

// }

// interface User{
//     name: string, 
//     age: number ,
//     address:Address
// }

// interface Office{
//     address:Address
// }

// let user: User ={
//     name: "Vinay",
//     age: 23, 
//     address:{
//         vill:"nawadih",
//         hNo:23,
//         pincode:1233,
//         country:"India"
//     }
// }


// types

// union 

// type userId = string | number

// function printId(id: userId){
//     console.log(id);
// }

// printId("Vinay")
// // Dono me koi ek daalo accept ho jyga
// printId(120)


// type Admin = {
//     name: string ,
//     role: "Admin"
// }

// type user = {
//     name: string,
//     role:"user"
// }

// type person  = Admin | user

// let CheckUser: person = {
//     name:"Vinay",
//     role:"Admin" // nahi to user , ek hi daal skte hai

// }

// Intersection 

// type Person ={
//     name: string , 
//     age: number
// }

// type Address = {
//     city: string , 
//     pincode: number ,
//     country: string
// }

// type personData = Person & Address

// let user: personData = {
//     name: "Vinay" , 
//     age: 23 , 
//     city:"nawadih",
//     pincode:13423,
//     country:"India"
//     }

    // Array 
// Numbers

    let marks:number[]= [90 , 30 , 33  ,90]
    marks.push(97)
    console.log(marks);

    // string

    let teas : string[]= ["blackTea" , "oolongTea" , "lemonTea" , "greenTea" ]

    teas.push("GingerTea")
    console.log(teas);

    // Objects

    type User = {
        name: string
        age: number ,
        role: string
    }

    let users:User[] = [
        {name:"Vinay" , age: 23 , role:"Developer"} , 
        {name:"kamdev" , age: 19 , role:"Designer"},
        {name:"Rahul" , age: 18 , role: "Editor"},
        {name:"sumit" , age: 18 , role:"Developer"}
    ]

    function showDevelopers(users:User[]){
        for (let user of users){
            if(user.role==="Developer"){
                console.log(user.name);
            }
        }
    }

    showDevelopers(users)
