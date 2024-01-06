const btn = document.querySelector("#add")
const list = document.querySelector('.shopping_list')
const price = document.querySelector("#valor")
const name = document.querySelector('#name')
const result = document.querySelector('.total')

let itens = []

btn.addEventListener("click", send)

function send(){
event.preventDefault()

const cart = document.createElement('div')
cart.classList.add('cart')

const itemPrice = document.createElement('p')
itemPrice.innerText = `R$ ${price.value}`

const itemName = document.createElement('p')
itemName.innerText = name.value

itemPrice.style.marginLeft= '5px'



console.log(price.value)

let subPrice = Number(price.value)

itens.push({
    valor: subPrice
})
console.log(valor)
let soma = 0
itens.map(function(val){
    soma +=parseFloat(val.valor)
    
})

console.log(subPrice)
console.log(itens)

cart.appendChild(itemName)
cart.appendChild(itemPrice)

list.appendChild(cart)

price.value = ''
name.value = ''


result.innerHTML = ''

result.innerHTML += `R$ ${soma.toFixed(2)}`







}


