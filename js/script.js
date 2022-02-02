const logoMovil = document.getElementById("logo-movil");
const navMovil = document.getElementById("nav-movil");
const navUl = document.getElementById("nav-ul");

logoMovil.addEventListener("click",()=>{
    navMovil.classList.toggle("select");
    logoMovil.classList.toggle("select");
    if(logoMovil.classList.value.includes("select")) {
        logoMovil.children[0].src = "./images/icon-close.svg";
    }
    else logoMovil.children[0].src = "./images/icon-hamburger.svg";
})

navUl.addEventListener("click",(e)=>{
    const ele = e.target;
    if (ele.classList.value.includes("header__li-box") ){
        ele.parentNode.classList.toggle("select");
    }
    else if (ele.parentNode.classList.value.includes("header__li-box")){
        ele.parentNode.parentNode.classList.toggle("select");
    }
})

