

const btnE1=document.querySelector(".btn");
const closeE1=document.querySelector(".close-icon");

const trailerContainerE1 = document.querySelector(".trailer-container");

const videoE1 = document.querySelector(".video");


btnE1.addEventListener("click",()=>{
    trailerContainerE1.classList.remove("active");
    closeE1.classList.remove("active");
    videoE1.play();

});

closeE1.addEventListener("click",()=>{
    trailerContainerE1.classList.add("active");
    closeE1.classList.add("active");
    videoE1.pause();
})