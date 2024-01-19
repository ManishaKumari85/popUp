const btnEl = document.querySelector(".btn")

const closeEl = document.querySelector(".close-icon")

const trailerContainerEl = document.querySelector(".trailer-container");

btnEl.addEventListener("click",()=>{
trailerContainerEl.classList.remove("active")
});

closeIconEl.addEventListener("click",()=>{
    trailerContainerEl.classList.add("active")
    VideoEl.pause();
    VideoEl.currentTime = 0;
    });