let menuIcon = document.getElementsByClassName("mobile-menu-icon");
let mobileMenu = document.getElementsByClassName("top-mobile-menu");


let menuToogleFlag = true;
menuIcon[0].addEventListener("click", function(){
    if(menuToogleFlag){
        mobileMenu[0].style.visibility = "visible";
        menuToogleFlag = false;
    }
    else{
        mobileMenu[0].style.visibility = "hidden";
        menuToogleFlag = true;
    }
});

window.onresize = () => {
    if(window.innerWidth>375){
        mobileMenu[0].style.visibility = "hidden";
        menuToogleFlag = true;
    }
};
