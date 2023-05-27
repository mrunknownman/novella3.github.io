var popUpForm = document.querySelector('#pop-up-form')

var bg = document.querySelector('#bg')
var popUpHead = document.querySelector('#pop-up-head')

const show1 = () =>{
    bg.classList.add('bg')
    popUpForm.style.display = 'block'
    popUpHead.innerHTML = "Забронируйте " + document.getElementById('prd-ttl1').innerHTML
}

document.getElementById('btn1').addEventListener('click', show1)

const show2 = () =>{
    bg.classList.add('bg')
    popUpForm.style.display = 'block'
    popUpHead.innerHTML = "Забронируйте " + document.getElementById('prd-ttl2').innerHTML
}

document.getElementById('btn2').addEventListener('click', show2)

const show3 = () =>{
    bg.classList.add('bg')
    popUpForm.style.display = 'block'
    popUpHead.innerHTML = "Забронируйте " + document.getElementById('prd-ttl3').innerHTML
}

document.getElementById('btn3').addEventListener('click', show3)

const show4 = () =>{
    bg.classList.add('bg')
    popUpForm.style.display = 'block'
    popUpHead.innerHTML = "Забронируйте " + document.getElementById('prd-ttl4').innerHTML
}

document.getElementById('btn4').addEventListener('click', show4)

const show5 = () =>{
    bg.classList.add('bg')
    popUpForm.style.display = 'block'
    popUpHead.innerHTML = "Забронируйте " + document.getElementById('prd-ttl5').innerHTML
}

document.getElementById('btn5').addEventListener('click', show5)

const show6 = () =>{
    bg.classList.add('bg')
    popUpForm.style.display = 'block'
    popUpHead.innerHTML = "Забронируйте " + document.getElementById('prd-ttl6').innerHTML
}

document.getElementById('btn6').addEventListener('click', show6)

const popUpClose = () =>{
    bg.classList.remove('bg')
    popUpForm.style.display = 'none'
}

bg.addEventListener('click', popUpClose)


var form = document.getElementById('frm1')

const submitForm = () =>{
    console.log(form.name.value)
    console.log(form.tel.value)
    console.log(form.date.value)
    alert("Спасибо " + form.name.value + " мы скоро свяжемся с вами")
}

form.addEventListener('submit', submitForm)

var pd1 = document.getElementById('pd1').innerHTML
var pd2 = document.getElementById('pd2').innerHTML
var pd3 = document.getElementById('pd3').innerHTML
var pd4 = document.getElementById('pd4').innerHTML
var pd5 = document.getElementById('pd5').innerHTML
var pd6 = document.getElementById('pd6').innerHTML    

const sortPrice = () =>{
    document.getElementById('pd1').innerHTML = pd6
    document.getElementById('pd2').innerHTML = pd3
    document.getElementById('pd3').innerHTML = pd2
    document.getElementById('pd4').innerHTML = pd4
    document.getElementById('pd5').innerHTML = pd1
    document.getElementById('pd6').innerHTML = pd5
    listener()
}

document.getElementById('price').addEventListener('click', sortPrice)

const sortPopularity = () =>{
    document.getElementById('pd1').innerHTML = pd1
    document.getElementById('pd2').innerHTML = pd2
    document.getElementById('pd3').innerHTML = pd3
    document.getElementById('pd4').innerHTML = pd4
    document.getElementById('pd5').innerHTML = pd5
    document.getElementById('pd6').innerHTML = pd6
    listener()
}

document.getElementById('popularity').addEventListener('click', sortPopularity)

const sortSpace = () =>{
    document.getElementById('pd1').innerHTML = pd5
    document.getElementById('pd2').innerHTML = pd3
    document.getElementById('pd3').innerHTML = pd4
    document.getElementById('pd4').innerHTML = pd1
    document.getElementById('pd5').innerHTML = pd6
    document.getElementById('pd6').innerHTML = pd2
    listener()
}

document.getElementById('space').addEventListener('click', sortSpace)

const listener = () =>{
    document.getElementById('btn1').addEventListener('click', show1)
    document.getElementById('btn2').addEventListener('click', show2)
    document.getElementById('btn3').addEventListener('click', show3)
    document.getElementById('btn4').addEventListener('click', show4)
    document.getElementById('btn5').addEventListener('click', show5)
    document.getElementById('btn6').addEventListener('click', show6)
}