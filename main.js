let searchForm = document.querySelector('.search-form')
let shoppingCart = document.querySelector('.shopping-cart')
let loginForm = document.querySelector('.login-form')

let searchBtn = document.getElementById('search-btn')
let cartBtn = document.getElementById('cart-btn')
let loginBtn = document.getElementById('login-btn')

searchBtn.onclick = () => {
    searchForm.classList.toggle('active')
}

cartBtn.onclick = () => {
    shoppingCart.classList.toggle('active')
}

loginBtn.onclick = () => {
    loginForm.classList.toggle('active')
}