type User = {
  name: string;
  role: string;
  age: number;
};

let users: User[] = [
  {
    name: "Vinay",
    role: "Developer",
    age: 23,
  },
  {
    name: "Manish",
    role: "Designer",
    age: 20,
  },
  {
    name: "Rahul",
    role: "Developer",
    age: 18,
  },
];

function showDeveloper(users:User[]){
    for(let user of users){
    if(user.role === "Developer"){
        console.log(user.name);
    }
}
}

showDeveloper(users)