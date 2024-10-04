const about_me = document.getElementById("about_me");
const about_meL = document.getElementById("about_meL");
const closeAbout = about_me.querySelector(".close");

const personal = document.getElementById("personal");
const P_info = document.getElementById("P_info");
const closePersonal = personal.querySelector(".close");

const topMenu = document.querySelector('.top');

about_meL.addEventListener("click", function(event){
    event.preventDefault();
    about_me.style.display = about_me.style.display == "block" ? "none" : "block";
    topMenu.classList.add('disabled');
});
closeAbout.addEventListener("click", function(){
    about_me.style.display = "none";
    topMenu.classList.remove('disabled');
});
window.addEventListener("click", function(event){
    if(event.target === about_me){
        about_me.style.display = "none";
        topMenu.classList.remove('disabled');
    }     
});

P_info.addEventListener("click", function(event) {
    event.preventDefault();
    personal.style.display = personal.style.display === "block" ? "none" : "block";
    topMenu.classList.add('disabled');
});
closePersonal.addEventListener("click", function() {
    console.log("Close button clicked!");
    personal.style.display = "none";
    topMenu.classList.remove('disabled'); 
     
});
window.addEventListener("click", function(event){
    if(event.target === personal){
        personal.style.display = "none";
        topMenu.classList.remove('disabled'); 
    }
     
});

window.addEventListener('load', function(){
    const welcomeMessage = document.querySelector('.welcome-message');
    welcomeMessage.classList.add('animate');

});