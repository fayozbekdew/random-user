//const { rejects } = require("assert")
//const { resolve } = require("path")

// api
const API = 'https://randomuser.me/api/?results=9'

// for leader
const overlay = document.getElementById('overlay')

//loader function

function loaderFunc(toggle){
    if(toggle){
        overlay.classList.remove(`hidden`)
    }else{
        overlay.classList.add(`hidden`)
    }
}

const getData = (resourse) =>{
    return new Promise((resolve, rejects) => {
        const request = new XMLHttpRequest()


        request.addEventListener(`readystatechange`, () =>{
        if(request.readyState < 4){
        loaderFunc(true)
        }else if(request.readyState == 4 && request.status == 200){
        const data = JSON.parse(request.responseText)
        resolve(data.results)
        loaderFunc(false)
        } else if( request.request == 4){
        rejects(`ERRORS !!!`)
        loaderFunc(false)
        }
        })

        request.open(`GET`, resourse)
        request.send()
    })
}

const reload = () =>{
    getData(API)
    .then((data) => {
        updateUI( data);
    }).catch((err) => {
        console.log(err);
    })
}
document.addEventListener(`DOMContentLoaded`, reload )