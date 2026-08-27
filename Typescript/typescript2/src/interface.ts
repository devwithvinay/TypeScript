interface User{
    name: string, 
    age :number , 
    address?: {  // make user address as optional
        city:string,
        pincode:number
    }
}

let user: User = {
    name: "Vinay",
    age: 23,
    address:{
        city:"BOkaro", 
        pincode:825043
    }
}

// their is user2 and address doen't need so how can we make optional either need or not so[ address ?: { } ]

let user2: User ={
    name:"ravi",
    age:22
}
// Any particular need then rest of make optional of then and pincode ko rehne do wiase 

function isLegal(user:User):boolean{
    if(user.age>18){
        return true
    }else{
        return false
    }

}
isLegal(user)

// 

interface People{
    name:string,
    age:number,
    greet:()=>string,
    greet2(): string
}

let person: People ={
    name:"Vinay",
    age:23,
    greet:()=>{
        return "Vinay"
    },

    greet2 (){
        return "welcome"
    }
    
}
person.greet()
person.greet2()
