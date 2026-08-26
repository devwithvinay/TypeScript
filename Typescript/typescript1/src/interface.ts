
interface UserType {
    firstName:string,
    lastName:string,
    age:number
}

function greet(user:UserType){

}

let user: UserType= {
    firstName:"Vinay",
    age:23,
    lastName:"Kumar"
}

// its simple way to describe the type in single place any update change in UserType and put their key:value in user 

function isLegal(user:UserType){
    if(user.age>18){
        return true
    }else{
        return false
    }

}   

let value = (isLegal(user))
console.log(value)