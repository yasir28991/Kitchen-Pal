let searchForm = document.querySelector('.search-form')
let shoppingCart = document.querySelector('.shopping-cart')

let searchBtn = document.getElementById('search-btn')
let cartBtn = document.getElementById('cart-btn')

searchBtn.onclick = () => {
    searchForm.classList.toggle('active')
}

cartBtn.onclick = () => {
    shoppingCart.classList.toggle('active')
}