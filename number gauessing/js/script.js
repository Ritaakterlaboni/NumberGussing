let screenOne = document.querySelector(".screenOne");
let headingOne = document.querySelector(".headingOne");
let inputNameOne = document.querySelector(".inputNameOne");
let buttonOne = document.querySelector(".buttonOne");
let errorOne = document.querySelector(".errorOne");
let screenTwo = document.querySelector(".screenTwo");

let buttonTwo = document.querySelector(".buttonTwo");
let errorTwo = document.querySelector(".errorTwo");
let inputNameTwo = document.querySelector(".inputNameTwo");


let screen3 = document.querySelector(".screen3");
let inputName3 = document.querySelector(".inputName3");
let button3 = document.querySelector(".button3");
let error3 = document.querySelector(".error3");


let screen4 = document.querySelector(".screen4");
let inputName4 = document.querySelector(".inputName4");
let button4 = document.querySelector(".button4");
let error4 = document.querySelector(".error4");


let screen5 = document.querySelector(".screen5");
let inputName5 = document.querySelector(".inputName5");
let button5 = document.querySelector(".button5");
let error5 = document.querySelector(".error5");

let screen6 = document.querySelector(".screen6");
let screen7 = document.querySelector(".screen7");


buttonOne.addEventListener("click", function(){
    if (inputNameOne.value == ""){
        errorOne.style.display="block";
    }
    else{
        screenOne.style.display="none";
        screenTwo.style.display="block";
        
    }

})


buttonTwo.addEventListener("click", function(){
    if (inputNameTwo.value < 0 || inputNameTwo.value > 10){
        errorTwo.style.display="block";
    }
    else if(inputNameTwo.value == ""){
        errorTwo.style.display="block";
    }
    else{
        screen3.style.display="block";
        screenTwo.style.display="none";
    }
      
})

button3.addEventListener("click", function(){
    if (inputName3.value == ""){
        error3.style.display="block";
    }
    else{
        screen3.style.display="none";
        screen4.style.display="block";
        
    }

})


button4.addEventListener("click", function(){
    if (inputName4.value == ""){
        error4.style.display="block";
    }
    else{
        screen4.style.display="none";
        screen5.style.display="block";
        
    }

})

button4.addEventListener("click", function(){
    if(inputNameTwo.value == inputName4.value){
        screen6.style.display="block";
        screen5.style.display="none";
    }
    else{
        screen5.style.display="none";
        screen6.style.display="none";
        screen7.style.display="block";


    }
})




