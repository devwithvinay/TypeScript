type User = Record<string,{ name:string; age:number }>

const users: User = {
    "person1": {name :"Vinay" , age : 23} , 
    "person2": {name: "ravi" , age :19},
    "person3": {name: "manish" , age:20},
    "person4":{name: "sumit", age: 20}, 
    "person5":{name:"Chhotu ",age: 18}
}
console.log(users["person1"])