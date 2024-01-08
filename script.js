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

const itemDelete = document.createElement('button')
itemDelete.innerHTML = "Excluir"
itemDelete.classList.add('itemDelete')
itemPrice.style.marginLeft= '5px'


let subPrice = Number(price.value)

itens.push({
    id: 0,
    valor: subPrice
})
let soma = 0
itens.map(function(val){
    soma +=parseFloat(val.valor)
    
})

cart.appendChild(itemName)
cart.appendChild(itemPrice)
cart.appendChild(itemDelete)

list.appendChild(cart)

price.value = ''
name.value = ''


result.innerHTML = ''

result.innerHTML += `R$ ${soma.toFixed(2)}`


itemDelete.addEventListener('click', deleteItem)
function deleteItem(e){
    e.target.parentElement.remove()

    function remove(itens, e, subPrice){
        return itens.filter(function(i) {
            return i[e] !== subPrice
        })
    }
    itens = remove(itens, "valor", subPrice)

    let soma = 0
itens.map(function(val){
    soma +=parseFloat(val.valor)
    
})

result.innerHTML = `R$ ${soma.toFixed(2)}`


}
}




