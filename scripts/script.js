/* Открытие и закрытие корзины */
let catalogOrder = document.querySelector('.catalog__order');
let catalogOrderButton = document.querySelector('.order__wrap-title');
catalogOrderButton.onclick = function() {
    catalogOrder.classList.toggle('order_open');
  
};
let orderCloseButton = document.querySelector('.order__close');
orderCloseButton.addEventListener('click', () => {
    catalogOrder.classList.remove('order_open');
});

/* Модалка карточки*/
let modalProduct = document.querySelector('.modal_product');
let productDetailButtonList = document.querySelectorAll('.product__detail');
productDetailButtonList.forEach(btn => {
    btn.addEventListener('click', () => {
        modalProduct.classList.add('modal__open');
    });
});

/* Закрытие модалок*/
let openModal = document.querySelector('.modal_product');
let modalCloseButton = document.querySelector('.modal__close');
modalCloseButton.addEventListener('click', () => {
    openModal.classList.remove('modal__open');
});