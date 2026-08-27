abstract class User{
    name:string 
    // age:number

    constructor(name:string , ){
        this.name = name
        // this.age = age
    }
    abstract greet ():string

    heloo(){
        console.log('hii Vinay'); // diff default implementation
    }
}

class employee extends User{
    name:string;
    age: number;

    constructor(name:string , age: number){
        super(name)
        this.name = name
        this.age = age
    }
    greet(){
        return "hii"+this.name
    }

}



