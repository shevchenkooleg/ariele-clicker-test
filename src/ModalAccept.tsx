import React from 'react';

const ModalAccept = () => {
    return (
        <div className="modal" id="modal-accept">
            <div className="modal__close js-modal-close"><img src="images/close.svg" alt='img'/></div>
            <div className="modal__icon"><img src="images/check.svg" alt='img'/></div>
            <div className="modal__name">Заявка оформлена</div>
            <div className="modal__body">
                <div className="modal__order">Номер заявки:&nbsp;<span></span></div>
                <div className="modal__description"><p>Обязательно сохраните номер заявки, чтобы не&nbsp;потерять
                    свой заказ</p><p>Заказ появится в течение 3 рабочих дней в личном кабинете сайта&nbsp;<a
                    href="https://f-ariel.ru" target="_blank" rel='noreferrer'>f-ariel.ru</a>&nbsp;с возможностью
                    оплаты.</p></div>
                <div className="modal__products-empty">
                    <span>Обратите внимание, что некоторые товары были исключены из&nbsp;заказа в&nbsp;связи с&nbsp;отсутствием на складе:</span>
                    <ul className="modal__products-saled"></ul>
                </div>
                <div className="btn js-modal-close">Готово</div>
            </div>
        </div>
    );
};

export default ModalAccept;