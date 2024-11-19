import React from 'react';

const Header = () => {

    return (
        <>
            <header className="header"></header>
            <div className="offer">
                <div className="message hidden"></div>
                <div className="message-remove hidden"></div>
                <div className="container">
                    <h1 className="offer__title">
                        Стеклянные елочные украшения фабрики "Ариель"
                    </h1>
                    <div
                        className="offer__description"
                    >
                        Здесь Вы можете оформить заявку на покупку наших изделий.
                    </div>
                    <a
                        className="offer__button"
                        target='_blank'
                        rel='noreferrer'
                        href="https://f-ariel.ru/dokumenty/instrukciya_order.pdf"
                    >
                        Как заказать?
                    </a>
                </div>
            </div>
        </>
    );
};

export default Header;