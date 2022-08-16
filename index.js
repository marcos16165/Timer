var horas = 0
var minutos = 0
var segundos = 0
var valorFixo 


function start(){
    valorFixo = setInterval(display,1000)
}

function pause(){
    display
    clearInterval(valorFixo)
}

function pare(){
    clearInterval(valorFixo)
    segundos=0
    minutos=0
    document.getElementById('display').innerText='00:00:00'
}

function display(){
    segundos++
    if(segundos == 60){
        minutos++
        segundos = 0
        if(minutos == 60){
            horas++
            minutos = 0
        }
    }
    document.getElementById("display").innerText = addZero(horas)+':'+addZero(minutos)+':'+addZero(segundos)
}

function addZero(digit){
    if(digit < 10)
        return('0'+digit)
    else{
        return(digit)
    } 
}