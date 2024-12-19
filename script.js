let btns = document.querySelectorAll(".btn")

const root = document.documentElement

btns.forEach((element)=>{
element.addEventListener("click",(eve)=>{

root.style.setProperty('--theme-color',eve.target.dataset.colo )

})

})

