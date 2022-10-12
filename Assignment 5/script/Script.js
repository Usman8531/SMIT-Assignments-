var str = "I Love My Country \n I like My City Faisalabad \n I Love My Homeland";
var arr = ["Faisalabad \n", " Multan \n", " Lahore", " Karachi"]
document.getElementById("string").innerText = str;
// Lower Case Button  

function lowercase() {
    document.getElementById("print").innerHTML = "";
    var converted = str.toLocaleLowerCase();
    document.getElementById("print").innerHTML = converted;


}

//  Upper Case Button 

function uppercase() {
    document.getElementById("print").innerHTML = "";
    var convert1 = str.toLocaleUpperCase();
    document.getElementById("print").innerHTML = convert1;

}

// Capatilize Button 
function captalize() {
    document.getElementById("print").innerHTML = "";
    var convert2 = '<span class="text-transform=capitalize;">' + str + "<\span>"
    document.getElementById("print").innerHTML = convert2;
}

// Better formating Booton 

function better() {
    document.getElementById("print").innerHTML = "";
    var input = document.getElementById("text").value;
    input = input.toLowerCase();
    if (input.trim() == "") {
        alert("Please Enter the Text")
        return
    }
    document.getElementById("print").style.textTransform = 'capitalize';
    document.getElementById("print").innerHTML = input;

}

// Print all cities 

function cities() {
    document.getElementById("print").innerHTML = "";
    let text = " ";
    for (var i of arr) {
        text += i + '<br>'

    }
    document.getElementById("print").innerHTML = text;
}

// add Your City in List 

function add() {
    document.getElementById("text").innerHTML = ""
    let newCity = document.getElementById("text").value
    if (!newCity) {
        alert("Enter Your text")
        return

    }
    else {
        let firstChar = newCity.charAt(0)
        firstChar = firstChar.toUpperCase()
        let remaingChar = newCity.slice(1)
        remaingChar = remaingChar.toLowerCase()
        newCity = firstChar + remaingChar

        arr.push(newCity)
        document.getElementById("print").innerHTML = 'your City' + '<span style="color:green; font-weight: bold;">' + ' ' + newCity + ' ' + '</span>' + " Successfully Added"
    }
}

//Check My City Name Added to List

function check() {

    let city = document.getElementById('text').value
    if (!city) {
        alert("Enter City Name")
        return
    }
    else {
        let firstChar = city.charAt(0)
        firstChar = firstChar.toUpperCase()
        let remaingChar = city.slice(1)
        remaingChar = remaingChar.toLowerCase()
        city = firstChar + remaingChar


        let cityFound = false
        for (let i = 0; i < arr.length; i++) {
            if (city == arr[i]) {
                document.getElementById("print").innerHTML = 'your City' + '<span style="color:green; font-weight: bold;">' + ' ' + city + ' ' + '</span>' + " Found in the List"
                cityFound = true
            }

        }
        if (cityFound == false) {

            console.log(arr)
            document.getElementById("print").innerHTML = 'your City' + '<span style="color:green; font-weight: bold;">' + ' ' + city + ' ' + '</span>' + " not Found in the List"


        }

    }

    // let text = " ";
    // for (var i of arr) {
    //   text += i + '<br>'

    // }
    // document.getElementById("print").innerHTML = text+"5) "+ myaddition;
}

// find Word in String 

function find() {
    document.getElementById("print").innerHTML = "";



    var data1 = document.getElementById("text").value;

    data1 = data1.toLowerCase()
    let string = str.slice()
    string = string.toLowerCase()
    // console.log(string)
    let find = string.indexOf(data1)
    // console.log(find)

    if (find == '-1') {

        document.getElementById("print").innerHTML = data1 + ' word not Found'



    } else {
        document.getElementById("print").innerHTML = data1 + ' word found at index ' + find

    }



}
function replace() {
    document.getElementById("print").innerHTML = "";



    let wordToReplace = document.getElementById("text").value;
    if (!wordToReplace) {
        alert("enter a Word which u want to replace")
        return
    } 
    else {
        wordToReplace = wordToReplace.toLowerCase()
        str=str.toLowerCase()
        let replaceWith = prompt("enter the new word ")
        wordToReplace = new RegExp(wordToReplace, 'g')


        let str1 = str.replace(wordToReplace, replaceWith)
        console.log(str1)
        document.getElementById('print').innerHTML = str1




    }
}