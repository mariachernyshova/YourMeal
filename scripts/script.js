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

/* Модалка корзины*/
let modalDelivery = document.querySelector('.modal_delivery');
let orderSubmitButton = document.querySelector('.order__submit');
orderSubmitButton.onclick = function() {
    modalDelivery.classList.toggle('modal__open');
  
};

/* Закрытие модалок*/
let modalCloseButtonList = document.querySelectorAll('.modal__close');

let openModalProduct = document.querySelector('.modal_product');
let openModalDelivery = document.querySelector('.modal_delivery');

modalCloseButtonList.forEach(btn => {
    btn.addEventListener('click', () => {
        openModalProduct.classList.remove('modal__open');
        openModalDelivery.classList.remove('modal__open');
    });
});

