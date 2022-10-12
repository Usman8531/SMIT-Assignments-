// Input type
var input=()=>{
  setInterval(() => {
    document.getElementById("string").innerHTML=new Date();
  }, 1000);
  }
input()
// output section
var print=(output)=>{
   document.getElementById("print").innerHTML=output;
  
}
//  print("HI")
// footer 
var time=new Date()
let year=time.getFullYear();
document.getElementById("year").innerHTML=year;
 
let day=time.getDay();
console.log(day)

var week=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
console.log(week[day]);

// Button day 
var today=()=>{  
    print(" ")
print(week[day])
}
// birthday Button
var days=()=>{
  print(" ")
    var dob=document.getElementById('input').value;
    if(!dob){
        Toastify({
            text: "Please Enter Your Date of Birth",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #2193b0, #6dd5ed)",
            },
            onClick: function(){} // Callback after click
          }).showToast();
          return
    }

    var yourDate=new Date(dob);
    var crntDate=new Date();
    let time=crntDate-yourDate;
    // time.toLocaleString();
    let final=Math.floor(time/(1000*60*60*24))
    let html=`${final} </br> Days Passed you Born`;
print(html)
}

// Upcomming Birthday 

var birthday=()=>{
 
  print(" ")
  var dob=document.getElementById('input').value;
  if(!dob){
    setTimeout(()=>{
      alert("Enter The Upcomming Date ")
      duration:1000;
    },1000)
    Toastify({
          text: "Please Enter Your Date of Birth",
          duration: 3000,
          destination: "https://github.com/apvarun/toastify-js",
          newWindow: true,
          close: true,
          gravity: "top", // `top` or `bottom`
          position: "left", // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
          style: {
            background: "linear-gradient(to right, #2193b0, #6dd5ed)",
          },
          onClick: function(){} // Callback after click
        }).showToast();
        return
  }

  var yourDate=new Date(dob);
  var bornDate=yourDate.getTime();
  var crntDate=new Date();
  var today=crntDate.getTime();
  let msDiff=bornDate-today;
  // time.toLocaleString();
  let daysDiff=Math.floor(msDiff/(1000*60*60*24))
  let html=`${daysDiff} </br> Days left in your Nxt Birthday`
  print(html)
}

// greet function button 

function greet(){
  print(" ")
  var uName=prompt('Enter Your Name')
  var date=new Date();
  var hour=date.getHours();
  if(hour>0 && hour <=11){
    print(`Good Morning ${uName}`)
  }
  else if(hour>=12 && hour <=16){
    print(`Good AfterNoon ${uName}`)
  }
  else if(hour>=17 && hour <=23)
  print(`Good Evening ${uName}`)
}

// tell time Buttons 
var time1=()=>{
  var time=new Date();
  var hours=time.getHours();
  var min=time.getMinutes();
  var sec=time.getSeconds();
  print(`You Press the Button on </br>${hours} : ${min} : ${sec}`)
}
function time2(){
  time1();
}
function time3(){
  time1();
  
}

// claculate Tax 

function calulate(num1){
  if(num1<=1000){
    var taxrate=17;
    var Tax=num1*taxrate/100;
    return Tax;
  }
  else if(num1>=1000){
    taxrate=8;
    var Tax=num1*taxrate/100;
    return Tax;
  }
}
// if(price>1000){
//   taxrate=16;
// }
// else{
//   taxrate=8;
// }
var calTax=()=>{
  print(" ");
  var price=+prompt("Enter the Price");
  if(!price){
    Toastify({
      text: "Please Enter the Price",
      duration: 3000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "left", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #2193b0, #6dd5ed)",
      },
      onClick: function(){} // Callback after click
    }).showToast();
    return
  }
  var taxrate=16;
  let tax=Math.floor( calulate(price,taxrate));
  
  print(`Tax: ${tax}`)
}

//  Both Sum of Price and Tax

var price=()=>{
  print(" ");
  let InPrice=+prompt("Enter the Price");
  if(!InPrice){
    Toastify({
      text: "Please Enter the Price",
      duration: 3000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "left", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #2193b0, #6dd5ed)",
      },
      onClick: function(){} // Callback after click
    }).showToast();
    return
  }
  let tax=calulate(InPrice);
  var total=tax+InPrice;
print(`Total: ${total}`)
}


// Clear Buttons 
var clear2=()=>{
  print(" ");
}

var clear1=()=>{
  document.getElementById('input').innerHTML=" ";
}