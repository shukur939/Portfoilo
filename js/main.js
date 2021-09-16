/*-------------------Header-Nav-----------------------------*/
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", ()=>{
    hideSection();
    toggleNavbar();
    document.body.classList.toggle("hide-scrolling");
});
function hideSection(){
    document.querySelector("section.active").classList.toggle("fade-out");
}
function toggleNavbar(){
    document.querySelector(".header").classList.toggle("active");
}
/*-------------------Active Section-----------------------------*/
document.addEventListener("click", (e) =>{
    if(e.target.classList.contains("link-item") && e.target.hash !== ""){
        document.querySelector(".overlay").classList.add("active");
        navToggler.classList.add("hide");
        if(e.target.classList.contains("nav-item")){
            toggleNavbar();

        }else{
            hideSection();
            document.body.classList.add("hide-scrolling");
        }
        setTimeout(()=>{
            document.querySelector("section.active").classList.remove("active","fade-out");
            document.querySelector(e.target.hash).classList.add("active");
            window.scrollTo(0,0);
            document.body.classList.remove("hide-scrolling");
            navToggler.classList.remove("hide");
            document.querySelector(".overlay").classList.remove("active");
        },500);
    }
})

/*-------------------About-----------------------------*/
const tabsContainer = document.querySelector(".about-tabs");
aboutSection = document.querySelector(".about-section");

tabsContainer.addEventListener("click", (e)=>{
    if(e.target.classList.contains("tab-item") && !e.target.classList.contains("active")){
        tabsContainer.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const target = e.target.getAttribute("data-target");
        aboutSection.querySelector(".tab-content.active").classList.remove("active");
        aboutSection.querySelector(target).classList.add("active");
    }
});
/*-------------------Portfoilo-----------------------------*/
document.addEventListener("click", (e) => {
    if(e.target.classList.contains("view-project-btn")){
       togglePortfoiloPopup();
       portfoiloItemDetails(e.target.parentElement)
    }
})
function togglePortfoiloPopup(){
    document.querySelector(".portfoilo-popup").classList.toggle("open");
    document.querySelector(".main").classList.toggle("fade-out");
}
document.querySelector(".pp-close").addEventListener("click",togglePortfoiloPopup);

// / hide pop up  clicking outside/
document.addEventListener("click", (e) =>{
    if(e.target.classList.contains("pp-inner")){
        togglePortfoiloPopup();
    }
})

function  portfoiloItemDetails(portfoiloItem){
    document.querySelector(".pp-thumbnail img").src =
    portfoiloItem.querySelector(".portfoilo-item-thumbnail img").src

    document.querySelector(".pp-header h3").innerHTML=
    portfoiloItem.querySelector(".portfoilo-item-title").innerHTML;

    document.querySelector(".pp-body ").innerHTML=
    portfoiloItem.querySelector(".portfoilo-item-details").innerHTML;
}

/*-------------------Header-Nav-----------------------------*/
