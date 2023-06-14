let search = document.querySelector('.search');

document.querySelector('#search-bar').onclick  = () => {
    search.classList.toggle('active');
    shoppingcart.classList.remove('active');


}

let shoppingcart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick  = () => {
    shoppingcart.classList.toggle('active');
    search.classList.remove('active');

}