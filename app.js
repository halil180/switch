
////// find the  button
let button = document.querySelector('#btn')


//change the background color by adding a new class to the body 
button.addEventListener('click',function () {
    let el = document.querySelector('body')
    el.classList.toggle('black')
    
})