let users=[]

let btn=document.getElementById("submit"),
btn2=document.getElementById("btn2"),
btn3=document.getElementById("btn3"),
remove=document.getElementById("remove"),
print=document.querySelector("#output");

let printD=(print1)=>{
print.innerHTML=print1;
}

// get randomid

function randId(){
    return (Math.random().toString(36).slice(2))
}
// toastify message 

function toastNote(clr,msg){
    var bgcolor;
    switch(clr){
        case("error"):
        bgcolor=`linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)`;
        break;
        case("Success"):
        bgcolor=`linear-gradient(90deg, rgba(15,95,119,1) 50%, rgba(29,184,253,1) 100%)`;
        break;
        default:
            bgcolor:"#000";
            break;
    }
    Toastify({
        text: msg,
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: bgcolor,
        },
    }).showToast();
    
}
function empty(){
firstName=" "
lastName=" "
dob=" "
email=" "
}
//   toastNote("success","I am Busy")

// calculate age 
function dateOfBirth(){
    let today=new Date().getTime()
let Birth=new Date(dob).getTime()
let age=today-Birth;
age=age/1000/60/60/24/365
return age
}


function inputVal(val){
    return document.getElementById(val).value;
}
var pattren=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let hand=()=>{
    let firstName = inputVal('Fname')
    let lastName = inputVal('Lname')
    let email = inputVal('email')
    let dob = inputVal('dob')
    firstName = firstName.trim()
    lastName = lastName.trim()
    email = email.trim()
if(!firstName || firstName.length<3){
    toastNote('error',"Please Eneter your name")
return
}
if(!email || email.match(pattren)  )
    {   
        
    }
    else{
        toastNote('error',"Enter the Email Correctely")
        return ;
    }
    if(!dob){
        toastNote('error',"Enter Your Date of Birth")
        return
    }
    
    let user={
        firstName,
        lastName,
        email,
        dob,
    }
    user.age=dateOfBirth()
    user.id=randId()

    
    users.push(user)
    console.log(users);

    toastNote('success',"Your Data is succesfuly Added")
    
}
btn.addEventListener('click',hand)

btn2.addEventListener("click",showdata)

function showdata(){

    if(!users.length){
toastNote('error',"There is no User Exist")
return
    }
let tableHaead=  ` <table class="table">
<thead>
<tr>
<th scope="col">#</th>
<th scope="col">Fist Name</th>
<th scope="col">Last Name</th>
<th scope="col">Email</th>
<th scope="col">DOB</th>
<th scope="col">ID</th>
<th scope="col">Age</th>
</tr>
</thead>
<tbody>` 
let tableBody=''
let tableEnd=`</tbody>
</table>`

for (let i = 0; i < users.length; i++) {
    tableBody += `<tr>
    <th scope="row">${i+1}</th><td>${users[i].firstName}</td><td>${users[i].lastName}</td><td>${users[i].email}</td><td>${users[i].dob}</td><td>${randId()}</td>
    </tr>`;
    
}

var toatalData =tableHaead+"<tbody>"+tableBody+"</tbody>"+tableEnd;
printD(toatalData)
}
function show(){
    if(!users.length){
        toastNote('error',"There is no user Exist")
        return
    }
    for (let i = 0; i < users.length; i++) {
        console.log(users[i]);
        
    }
}

btn3.addEventListener('click',show)


remove.addEventListener('click',remove1)
function remove1(){
    printD(" ")
}