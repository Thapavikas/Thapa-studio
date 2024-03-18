// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

let elemC = document.querySelector("#elem-container")
let fixed = document.querySelector("#fixed-image")
elemC.addEventListener("mouseenter",function(){
    fixed.style.display="block"
})
elemC.addEventListener("mouseleave",function(){
    fixed.style.display="none"
})

let elems = document.querySelectorAll("#elem")
elems.forEach(function(e){
    e.addEventListener("mouseenter",function(){
    var image =e.getAttribute("data-image")
    fixed.style.backgroundImage=`url(${image})`
    })
})
// this is the scrollbarnd
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 40,
    });
// this is page4
function show1(){
    document.getElementById('design').style.display="block";
    document.getElementById('project').style.display="none";
    document.getElementById('execution').style.display="none";
    document.getElementById('design1').style.display="block";
    document.getElementById('project1').style.display="none";
    document.getElementById('execution1').style.display="none";
}
function show2(){
    document.getElementById('design').style.display="none";
    document.getElementById('project').style.display="block";
    document.getElementById('execution').style.display="none";
    document.getElementById('design1').style.display="none";
    document.getElementById('project1').style.display="block";
    document.getElementById('execution1').style.display="none";
    
}
function show3(){
    document.getElementById('design').style.display="none";
    document.getElementById('project').style.display="none";
    document.getElementById('execution').style.display="block";
    document.getElementById('design1').style.display="none";
    document.getElementById('project1').style.display="none";
    document.getElementById('execution1').style.display="block";
}
