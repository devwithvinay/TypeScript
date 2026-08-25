function greet( user: {
     name: string,
     age: number
     }) {
  console.log("hello" + user.name);
}

greet({
  name: "Vinay",
  age: 23,
});

//or

let user = {
  name: "vinay",
  age: 23,
};

greet(user);


