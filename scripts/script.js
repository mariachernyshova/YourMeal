let catalogOrder = document.querySelector('.catalog__order');

let catalogOrderButton = document.querySelector('.order__wrap-title');
catalogOrderButton.onclick = function() {
    catalogOrder.classList.toggle('order_open');
  
};


let orderCloseButton = document.querySelector('.order__close');
orderCloseButton.addEventListener('click', () => {
    catalogOrder.classList.remove('order_open');
});