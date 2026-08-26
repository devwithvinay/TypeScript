
function Greet(name: string){
    console.log("hello" , name)
}

Greet("Vinay")

function Add(a:number , b:number){
  
  return a+b
}

let ans = Add(4,5)
console.log(ans)

function DelayedCall(fn: ()=> void){
    setTimeout(fn,1000)
}

DelayedCall(function(){
    console.log('Hii Vinay');
})

//or

function delay(anotherFn: ()=> number){
    setTimeout(anotherFn , 1000)
}

function log(){
    return 1;
}

 delay(log)


// or

function Delaying(fn: (a: string)=> void){
    setTimeout(fn,1000)
}

function greet(name: string){
    console.log('hello'+name);
}

Delaying(greet)
