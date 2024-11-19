import React, { useState } from 'react';

interface OrderCardProps {
    setShowModal: (show: boolean) => void;
}

const OrderCard = (props: OrderCardProps) => {

    const {setShowModal} = props

    const [addItem, setAddItem] = useState(false);

    const onAddToCartBtnClick = () => {
        setTimeout(()=>{setAddItem(true)}, 2000)
        console.log('Add-to-cart-click')
    }

    const onOpenModalBtnClick = () => {
        setTimeout(()=>{setShowModal(true)}, 2000)
        console.log('Open-modal-click')
    }

    return (
        <div className="products">
            <div className="container">
                <h2 className="products__title">Каталог</h2>
                <div className="products__wrapper" id="products__wrapper">
                    <div className="product">
                        <div className="product__image">
                            <img src="https://f-ariel.ru/images/zmeya_doktor.png" alt='Шар кракле "Змейка Доктор"'
                                 style={{width: '500px'}}/>
                        </div>
                        <h2
                            className="product__name"
                        >
                            Шар кракле "Змейка Доктор"
                        </h2>
                        <p className="product__description">Арт. 263, 100 мм.</p>
                        <p className="product__price">6&nbsp;500 ₽</p>
                        <button
                            className="add-to-cart product--disabled"
                            data-name="Шар кракле &quot;Змейка Доктор&quot;"
                            data-id="128"
                            data-description="Арт. 263, 100 мм."
                            data-price="6500"
                            data-img="https://f-ariel.ru/images/zmeya_doktor.png"
                            onClick={onAddToCartBtnClick}
                        >
                            Добавить в корзину
                        </button>
                    </div>
                </div>
                <div
                    className="products__loader loading"
                    style={{display: 'none'}}
                >
                    Загружаем список товаров...
                </div>
                <button
                    onClick={onOpenModalBtnClick}
                    disabled={!addItem}
                    className="products__button btn open-modal-cart btn-modal"
                >
                    Оформить заявку
                </button>
            </div>
        </div>
    );
};

export default OrderCard;