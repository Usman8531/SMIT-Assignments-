const btn1 = document.querySelector("#btn1"),
  btn2 = document.querySelector("#btn2"),
  btn3 = document.querySelector("#btn3");
// output=document.querySelector("#output");

var print = (output) => {
  document.getElementById("output").innerHTML = output;
};

var setData=()=>{
   let newName= prompt("Enter your Name")
   if(!newName){
       alert("Enter your name please")
       return
    }
    var names=localStorage.getItem('users')
    if(names==null){
        names=[]
        
    }
else{
    names=JSON.parse(names)
}
names.push(newName)
localStorage.setItem('users',JSON.stringify(names))
print(`${newName} Have been Succesfully Added`  )
}
btn1.addEventListener("click", setData);


var getData=()=>{
    var names=localStorage.getItem('users')
    if(names==null){
        alert("There is No Data To Show")
        return
    }
    names=JSON.parse(names)
    print(`${names} alredy added`)
    
}

btn2.addEventListener('click',getData);


var removeData=()=>{
    if(names=null){
        alert("There is no Data Exist To Delete")
    }
    var names=localStorage.removeItem('users');
print("Data From Local Storage have been Succesfully Removed")
}



btn3.addEventListener('click',removeData);
