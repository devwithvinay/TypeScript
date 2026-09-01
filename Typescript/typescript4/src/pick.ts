type User={
    id:string;
    name:string;
    age:number;
    email:string;
    password:string;
}
// bad approch 
/*
type updateProps={
    name:string,
    age: number,
    password: string
}

// if any change both place to update it 
*/


type updateProps = Pick<User,"name"| "age" |"password">

function updateUser(updateProps:updateProps){
    // hit the database and update the user data 
}