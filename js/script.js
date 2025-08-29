function userScroll(){
    const nav = document.querySelector(".navbar");
    if(window.scrollY > 40){
        nav.classList.add("bg-dark","nav-sticky")
    }
    else{
        nav.classList.remove("bg-dark","nav-sticky");
    }
}

document.addEventListener("scroll", userScroll);
const toggleButton = document.querySelector(".navbar-toggler");
toggleButton.addEventListener("click", function(){
   document.querySelector(".navbar").classList.toggle("bg-dark");
})