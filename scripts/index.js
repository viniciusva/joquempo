const $buttonStonePlayer1 = document.querySelector('.button-stone-player-1')
const $buttonPaperPlayer1 = document.querySelector('.button-paper-player-1')
const $buttonScissorsPlayer1 = document.querySelector('.button-scissors-player-1')

const $buttonStonePlayer2 = document.querySelector('.button-stone-player-2')
const $buttonPaperPlayer2 = document.querySelector('.button-paper-player-2')
const $buttonScissorsPlayer2 = document.querySelector('.button-scissors-player-2')

const $fieldPlayer1 = document.querySelector('.field-player-1')
const $fieldPlayer2 = document.querySelector('.field-player-2')

const $buttonStart = document.querySelector('.button-start')

let movePlayer1 = ''
let movePlayer2 = ''
let winner = ''
let started = false

function verifywinner() {
    if(movePlayer1 == movePlayer2){
    setTimeout( function(){ 
        alert('Empatou')
        resetFields()  
        resetVariables()   
    },100)    
    } else if (movePlayer1 == 'stone' && movePlayer2 == 'paper') {
        setTimeout(function(){
            alert('jogadora 2 ganhou')
            resetFields()
            resetVariables()
        },100)    
    } else if (movePlayer1== 'stone' && movePlayer2== 'scissors') {
        setTimeout(function(){
            alert ('jogadora 1 ganhou')
            resetFields()
            resetVariables()
        },100)    
    } else if (movePlayer1 == 'paper' && movePlayer2== 'scissors') {
        setTimeout(function(){
            alert('jogadora 2 ganhou')
            resetFields()
            resetVariables()
        },100)
    } else if (movePlayer1 == 'paper' && movePlayer2 == 'stone') {
        setTimeout( function(){
            alert('jogadora 1 ganhou')
            resetFields()
            resetVariables()
        },100)
    } else if (movePlayer1 == 'scissors' && movePlayer2 == 'paper') {
        setTimeout(function () {
            alert('jogadora 1 ganhou')
            resetFields()
            resetVariables()
        },100)
    } else if (movePlayer1 == 'scissors' && movePlayer2 == 'stone'){
        setTimeout(function (){
            alert('jogadora 2 ganhou')
            resetFields()
            resetVariables()
        },100) 
    }  
}

function resetFields() {
    $fieldPlayer1.innerHTML = ''
    $fieldPlayer2.innerHTML = ''
}
function resetVariables(){
    movePlayer1 = ''
    movePlayer2 = ''
}
$buttonStart.addEventListener('click', function(){
    started = true
})
$buttonPaperPlayer1.addEventListener('click', function(){
   if (started == false) {return }
    movePlayer1 = 'paper'
$fieldPlayer1.innerHTML = '<img src="./images/papel.jpeg">'
verifywinner()
})

$buttonStonePlayer1.addEventListener('click', function(){
    if (started == false) {return }
    movePlayer1= 'stone'
$fieldPlayer1.innerHTML = '<img src="./images/pedra.jpeg">'
verifywinner()
})

$buttonScissorsPlayer1.addEventListener('click', function(){
    if (started == false) {return }
    movePlayer1= 'scissors'
$fieldPlayer1.innerHTML = '<img src="./images/tesoura.jpeg">'
verifywinner()
})

$buttonPaperPlayer2.addEventListener('click', function(){
    if (started == false) {return }
    movePlayer2= 'paper'
$fieldPlayer2.innerHTML = '<img src="./images/papel.jpeg">'
verifywinner()
})

$buttonStonePlayer2.addEventListener('click', function(){
    if (started == false) {return }
    movePlayer2= 'stone'
$fieldPlayer2.innerHTML = '<img src="./images/pedra.jpeg">'
verifywinner()
})

$buttonScissorsPlayer2.addEventListener('click', function(){
    if (started == false) {return }
    movePlayer2= 'scissors'
$fieldPlayer2.innerHTML = '<img src="./images/tesoura.jpeg">'
verifywinner()
})  
