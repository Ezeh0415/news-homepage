const lis = document.getElementsByTagName("li");
const h4 = document.getElementsByTagName("h4");
const h5 = document.getElementsByTagName("h5");
let i = document.getElementById("i");

const mobile = $("#mobile-nav");


let btn2 = document.getElementById("btn2").addEventListener("click" , function(){
    mobile.animate({opacity:1})
    i.style.opacity = "0" ;
    
})

let btn1 = document.getElementById("btn1").addEventListener("click" , function(){
    mobile.animate({opacity:0})
    i.style.opacity = "1" ;
})


