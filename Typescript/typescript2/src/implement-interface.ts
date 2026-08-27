interface People{
    name: string,
    age:number
    isLegal():boolean
}

class Manager implements People{
    name: string
    age: number

    department: string  // here implements the people in department 

    constructor(name:string, age:number , department: string){
    this.name = name;
    this.age = age
    this.department = department
    }
    
    isLegal(){
        return this.age>18
    }
}

let user  = new Manager("john" , 34 , "engineer")
console.log(user.isLegal())
console.log(user.age)
console.log(user.name)
console.log(user.department);