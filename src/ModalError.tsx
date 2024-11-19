import React from 'react';

const ModalError = () => {
    return (
        <div className="modal" id="modal-error">
            <div className="modal__close js-modal-close"><img src="images/close.svg" alt='img'/></div>
            <div className="modal__icon"><img src="images/cancel.svg" alt='img'/></div>
            <div className="modal__name">Заявка отклонена</div>
            <div className="modal__body">
                <div className="modal__description">К сожалению, все товары закончились</div>
                <div className="btn js-modal-close">Готово</div>
            </div>
        </div>
    );
};

export default ModalError;