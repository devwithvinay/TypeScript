interface User {
  name: string;
  age: number;
  email: string;
  password: string;
}

type updateProps = Pick<User, "name" | "age" | "password">;


type updatePropsOptional = Partial<updateProps>

function updateUser(updateProps: updatePropsOptional) {
  // hit db to update user
}

updateUser({
  password: "vsbodbubsud",
});

/*
// At a time we need to update all three then it works 

updateUser({
    name:"vinay",
    age:23,
    password:"kjsdsdsnvksn"
})
    */

// but i need to update my password only

// type updatePropsOptional = Partial<updateProps> // now i can

// pass this  updatePropsOptional into function






