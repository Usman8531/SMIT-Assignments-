// alert("Learnig Advnace js")

const users=[
    {Name:"Usman",city:"Faisalabad",age:"19",email:"Usman@gmail.com",status:"active",id:"123"},
    {Name:"Fahad",city:"Faisalabad",age:"22",email:"Fahad@gmail.com",status:"inactive",id:"124"},
    {Name:"Umer",city:"Faisalabad",age:"21",email:"umer@gmail.com",status:"active",id:"125"},
    {Name:"Saim",city:"Faisalabad",age:"21",email:"saim@gmail.com",status:"active",id:"126"},
    {Name:"Ali",city:"Faisalabad",age:"21",email:"ali@gmail.com",status:"active",id:"121"},
    {Name:"Shami",city:"Faisalabad",age:"21",email:"shami@gmail.com",status:"inactive",id:"127"},
];
// console.log(users);
// by using simple for loops 
// for(let i=0;i<users.length;i++)[
//     console.log(users[i])
// ]
//  using for of loop

// for(user of users){
// console.log(user)
// }

// using for in loop 

// let singleUser=users[0]
// console.log(singleUser);
// for(let key in singleUser){
//     console.log(key);
// }
// for(let property in singleUser){
//     console.log(singleUser[property]);
// }

// using nested for of and for in loop 

// for(let property of users){
//     for(let user in property){
//         console.log(user +" =>"+ property[user]);
//     }
// }

// arrow functions 
// let fun=()=>{
//     alert("i am learning Advance JS")
// }
// fun();

// let fun=()=>alert("i am learning Advance JS")
// fun()


const mapBtn=document.querySelector("#btn1"),
filterBtn=document.querySelector("#btn2"),
findBtn=document.querySelector("#btn3");

let mapMethod=()=>{
    let userMap=users.map((user,index)=>{
        return user.age*2;
    })
    alert("Output is in console")
    console.log(userMap);
}
let filterMethod=()=>{
    let filterUser=users.filter((user1,index)=>{
        return user1.status ==='active'
    })
    alert("Output is in console")
    console.log(filterUser);
}
let findMethod=()=>{
    let findUser=users.find((user)=>{
        return user.age>18;
    })
    alert("Output is in console")
    console.log(findUser);
}
mapBtn.addEventListener('click',mapMethod);
filterBtn.addEventListener('click',filterMethod);
findBtn.addEventListener('click',findMethod);