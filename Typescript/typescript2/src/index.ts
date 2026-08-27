
// Number
function sum(a:number , b:number): number{
    return a+b
}

let ans = sum(2,4)
console.log('sum is: '+ans);


// String 

function Greet(name:string):string{
    return "hello"+name
}
 
Greet("Vinay")

// Boolean 

function isEven(num:number):boolean{
    if(num%2==0){
        return true
    }else{
        return false
    }

}

isEven(5)
