const body = document.querySelector('body')
const darkBtn = document.getElementById('dark-btn')
const lightBtn = document.getElementById('light-btn')

const modalStorage = localStorage.getItem(`mode`)
if(modalStorage){
    document.body.classList.add(`dark-mode`)
    darkBtn.classList.toggle(`hidden`)
    lightBtn.classList.toggle(`hidden`)
}
 
function mode(){
    darkBtn.classList.toggle(`hidden`)
    lightBtn.classList.toggle(`hidden`)
    document.body.classList.toggle(`dark-mode`)
}
darkBtn.addEventListener(`click`, () => {
    mode()
    localStorage.setItem(`mode`, `dark-mode`)
})
lightBtn.addEventListener(`click`,() => {
    mode()
    localStorage.setItem(`mode`, ``)
})