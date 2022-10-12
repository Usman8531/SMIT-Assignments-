var str=25.12345;
document.getElementById("string").style.fontSize="x-large";
var original=document.getElementById("string").innerHTML=str;

// taking input 
var input=()=>document.getElementById("text").value;
//output
 function output(){

     return document.getElementById("output").innerHTML;
 }
//  Round a number 

function round1(){
    let roundNumber=Math.round(str);
     document.getElementById("print").innerHTML=roundNumber;
}

// ceil Button 
function ceil1(){
    let roundNumber=Math.ceil(str);
     document.getElementById("print").innerHTML="<span style='color:green'>"+ roundNumber+"</span>"+"<br>"+"\n Ceil the Original String";
}

// Floor a butoon 
function floor1(){
    let roundNumber=Math.floor(str);
     document.getElementById("print").innerHTML="<span style='color:green'>"+ roundNumber+"</span>"+"<br>"+"\nFloor the  Original String";
}

// generate a random number 
function generate(){
    let roundNumber=Math.random();
     document.getElementById("print").innerHTML="<span style='color:green'>"+ roundNumber+"</span>"+"<br>"+"\nGeneraing a Random Number ";
}

// threw dice 
function dice(){
    let roundNumber=Math.random();
    dice1=(6*roundNumber)+1
threw=Math.floor(dice1);
     document.getElementById("print").innerHTML="<span style='color:green'>"+threw+"</span>"+"<br>"+"\nGeneraing a Random Number from 0 To 6";
}

// generate a strone password 

function password1(){
    let originalString="";
    let symbols1="=?.,!@#$$%^&*()_"
    let upperCase1="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let number1="12345557890"
    let lowerCase1="abcdefghijklmnopqrstuvwxyz"
    let possibleString=symbols1+upperCase1+lowerCase1+number1 ;
    let length=input();
    if(!length){
        alert("Please Enter the length")
        return
    }else{
        for(var i=0;i<length;i++){
            originalString += possibleString.charAt(Math.random()*originalString.length)
        }
    }
document.getElementById("print").innerHTML="<span style='color:green'>"+"Strong Password"+"</span>"+"<br>"+originalString
}

// converting string 

function converting(){
    let input1=input();
    // let type=(typeof input)
if(input1.trim()==""){
    alert("Enter the Number")
    return
}else{

    // var output1=
    document.getElementById("print").innerHTML= "<span style='color:green'>"+"Default String"+"</span>"+"<br>"+"<span style='color:red'>"+input1+"</span>"+"<br>"+"<span style='color:red'>"+(typeof input())+"</span>";
    // var output2=
    document.getElementById("print").innerHTML+="<br>"+"<span style='color:green'>"+"Number"+"</span>"+"<br>"+"<span style='color:red'>"+parseInt(input1)+"</span>"+"<br>"+"<span style='color:red'>"+"Number" +"</span>";
    // var output3=
    document.getElementById("print").innerHTML+="<br>"+"<span style='color:green'>"+"Float"+"</span>"+"<br>"+"<span style='color:red'>"+parseFloat(input1)+"</span>"+"<br>"+"<span style='color:red'>"+"Float"+"</span>"
    // document.getElementById("print").innerHTML="<span style='font-size:20px'>"+output1+"<br>"+output2+"<br>"+output3+"</span>";
    
}
}

// controlling function 

function controll(){
    let input1=input();
if(input1.trim()==""){
    alert("Enter the Number")
    return
}else{
    var dig=+prompt("Enter the Limiting Value")
    input1=Number(input1)
    let output1=input1.toFixed(dig)
    console.log(output1);
    document.getElementById("print").innerHTML="<br>"+"<span style='color:green'>"+"After Converting"+"</span>"+"<br>"+"<span style='color:red'>"+ output1+"</span>"
}
}

// calculating gst 

function gst(){
    
    let input1=input();
    if(input1.trim()==""){
        alert("Enter the input cost");
        return
    }
    else{
        input1=Number(input1)
        var tax=+prompt("Enter the Tax Rate");
         var cost=input1*(tax/100)
        var originalPrice=Math.floor(input1+cost);

    }
    document.getElementById("print").innerHTML="<br>"+"<span style='color:green'>"+"Price"+"</span>"+"<br>"+"<span style='color:red'>"+ input1 +"</span>"
    document.getElementById("print").innerHTML+="<br>"+"<span style='color:green'>"+"Tax Amount"+"</span>"+"<br>"+"<span style='color:red'>"+ cost+"</span>"
    document.getElementById("print").innerHTML+="<br>"+"<span style='color:green'>"+"Price Including Tax"+"</span>"+"<br>"+"<span style='color:red'>"+ originalPrice +"</span>"
}

//clear buttons
function clear2(){
    document.getElementById("print").innerHTML=" "
}
function clear1(){
    document.getElementById("text").innerHTML=" "
}