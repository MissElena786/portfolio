
// const  DayNight = document.querySelector(".day-night")
// DayNight.addEventListener('click', function() {
//     DayNight.querySelector("i").classList("fa-moon");
//     document.body.classList.toggle("dark")
// })

// window.addEventListener('load', function(){
//     if(document.body.classList.contains("dark")){
//         DayNight.querySelector("i").classList("fa-sun")  
//     }else{
//         DayNight.querySelector("i").classList("fa-moon")
//     }
// })



$(".fa-square-xmark").css("display","none")
$(".fa-bars").on('click', function(){
    $(".nav").css("display", "block")
    $(".fa-bars").css("display", "none")
    $(".fa-square-xmark").css("display","block")

})
$(".fa-square-xmark").on('click', function(){
    $(".nav").css("display", "none")
    $(".fa-bars").css("display", "block")
    $(".fa-square-xmark").css("display","none")

})

const body = $("body");


$(".day-night").click(function(){
    body.toggleClass("dark-body");
    $(".main").toggleClass("dark-main");
    $(".about").toggleClass("dark-about");
    $(".education").toggleClass("dark-education");
    $(".projects").toggleClass("dark-projects");
    $(".contact").toggleClass("dark-contact");
    $(".footer").toggleClass("dark-footer");


   
});



   

 
