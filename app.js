let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;
let buttons = ["red","yellow","green","blue"]
let h2 = document.querySelector("h2")


document.addEventListener("keypress", ()=>{
    if(started === false){
        console.log("started")
        started = true
    }

    levelUp();
})

function btnFlash(btn){
    btn.classList.add("flash")
    setTimeout(()=>{
        btn.classList.remove("flash")
    },250)
}

function levelUp(){
    level++;
    h2.innerHTML = `Level ${level}`

    let randInd = Math.floor(Math.random()*3) 
    let ranColor = buttons[randInd]
    let randBtn = document.querySelector(`.${ranColor}`)
    btnFlash(randBtn);
}