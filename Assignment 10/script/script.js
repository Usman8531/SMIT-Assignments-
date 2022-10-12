
const btn1=document.querySelector("#btn1"),
btn2=document.querySelector("#btn2"),
btn3=document.querySelector("#btn3"),
btn4=document.querySelector("#btn4"),
btn5=document.querySelector("#btn5"),
btn6=document.querySelector("#btn6"),
btn7=document.querySelector("#btn7"),
btn8=document.querySelector('#output');

// output data 
function print(printData){
    btn8.innerHTML=printData;
}
var windowpopup;

function windowpopup(){
    return window.open('',`myWindow`,`width=420,height=300,top=100,left=200`)
}
// triger on click event 

btn1.addEventListener('click',button1)
btn2.addEventListener('click',button2)
btn3.addEventListener('click',button3)
btn4.addEventListener('click',button4)
btn5.addEventListener('click',button5)
btn6.addEventListener('click',button6)
// btn7.addEventListener('click',button7)
// Button 1 
function button1(){
    print(window.location.href);
}

// button 2 
function button2(){
    window.location.href=('https://www.google.com/')
}
// buton 3 
function button3(){
    window.location.replace('https://www.google.com/')

}
function button4(){
    windowpopup()
}
function button5(){
    windowpopup().document.write("Asslam O Alaikum")
}
function button6(){
    windowpopup().location.assign(`https://getbootstrap.com/docs/5.2/getting-started/introduction/`)
}
function button7(){
    console.log("hlo");
    let stop=windowpopup().close()
    stop()
}