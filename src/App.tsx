import React from 'react';
import './App.css';

function App() {
  return (
      <>
          <header className="header"></header>
          <div className="offer">
              <div className="message hidden"></div>
              <div className="message-remove hidden"></div>
              <div className="container">
                  <h1 className="offer__title">Стеклянные елочные украшения фабрики "Ариель"</h1>
                  <div className="offer__description">Здесь Вы можете оформить заявку на покупку наших изделий.</div>
                  <a className="offer__button" target='_blank' rel='noreferrer'
                     href="https://f-ariel.ru/dokumenty/instrukciya_order.pdf">Как заказать?</a>
              </div>
          </div>
          <div className="products">
              <div className="container">
                  <h2 className="products__title">Каталог</h2>
                  <div className="products__wrapper" id="products__wrapper">
                      <div className="product">
                          <div className="product__image">
                              <img src="https://f-ariel.ru/images/zmeya_doktor.png" alt='Шар кракле "Змейка Доктор"' style={{width: '500px'}}/>
                          </div>
                          <h2 className="product__name">Шар кракле "Змейка Доктор"</h2>
                          <p className="product__description">Арт. 263, 100 мм.</p>
                          <p className="product__price">6&nbsp;500 ₽</p>
                          <button className="add-to-cart product--disabled"
                                  data-name="Шар кракле &quot;Змейка Доктор&quot;" data-id="128"
                                  data-description="Арт. 263, 100 мм." data-price="6500"
                                  data-img="https://f-ariel.ru/images/zmeya_doktor.png">Добавить в корзину
                          </button>
                      </div>
                  </div>
                  <div className="products__loader loading" style={{display: 'none'}}>Загружаем список товаров...</div>
                  <button className="products__button btn open-modal-cart btn-modal">Оформить заявку</button>
              </div>
          </div>
          <footer className="footer"></footer>
          <div className="overlay">
              <div className="modal" id="modal-cart">
                  <div className="modal__close js-modal-close"><img src="images/close.svg" alt='img'/></div>
                  <div className="modal__title">Заявка</div>
                  <div className="modal__products"></div>
                  <form className="modal__form">
                      <div className="form-group"><label>Фамилия</label> <input placeholder="Иванов" name="surname"
                                                                                id="surname"/><span
                          className="error-msg" id="surname-error"></span></div>
                      <div className="form-group"><label>Имя</label> <input placeholder="Иван" name="name"
                                                                            id="name"/><span className="error-msg"
                                                                                             id="name-error"></span>
                      </div>
                      <div className="form-group" id="phone-validate"><label>Номер телефона</label> <input type="tel"
                                                                                                           placeholder="+7 (___) ___-__-__"
                                                                                                           name="phone"
                                                                                                           id="phone"
                                                                                                           inputMode="text"/><span
                          className="error-msg" id="phone-error"></span></div>
                      <div className="form-group"><label>Email</label> <input placeholder="example@mail.ru" name="email"
                                                                              id="email"/><span className="error-msg"
                                                                                                id="email-error"></span>
                      </div>
                      <div className="form-group"><label>Адрес доставки</label> <textarea name="formComment"
                                                                                          placeholder="Адрес отделения СДЭК / Город, улица, дома, квартира / Самовывоз"
                                                                                          id="formComment"></textarea><span
                          className="error-msg" id="address-error"></span></div>
                      <label className="checkbox"><input type="checkbox" checked={true}/><span
                          className="checkmark"></span><span className="checkbox__text">Даю согласие на обработку&nbsp;
                          <a href="https://f-ariel.ru/title.php/#pers"
                             target="_blank" rel='noreferrer'>персональных данных</a></span></label>
                      <div id="captcha-container" className="smart-captcha_invisible"
                           data-testid="smartCaptcha-container">
                          <div style={{display: 'none'}}>
                              <iframe frameBorder="0"
                                      src="https://smartcaptcha.yandexcloud.net/backend.636bb879d1085041bc19.html?sitekey=ysc1_aiOTqFCNUbcnlFTvdFJxbtge7SgILnH7yBPjY9tU99353f9c&amp;theme=light&amp;hl=ru&amp;host=order.f-ariel.ru&amp;href=https%3A%2F%2Forder.f-ariel.ru%2F&amp;test=false&amp;webview=false&amp;hideChallengeContainer=false"
                                      aria-hidden="true" allow="encrypted-media *;"
                                      style={{display: 'block', width: '100%', height: '100%', zIndex: '0', transform: 'translate3d(0px, 0px, 0px)'}}
                                      data-testid="backend-iframe" title="SmartCaptcha backend"></iframe>
                          </div>
                          <input type="hidden" name="smart-token" data-testid="smart-token" value=""/></div>
                      <button type="submit" className="">Оформить заявку</button>
                      <span className="error-msg" id="form-error"></span>
                      <div className="modal__caption"><p>Форма защищена&nbsp;<a
                          href="https://yandex.ru/legal/smartcaptcha_notice/" target="_blank" rel='noreferrer'>Yandex SmartCaptcha</a>
                      </p></div>
                  </form>
              </div>
              <div className="modal" id="modal-accept">
                  <div className="modal__close js-modal-close"><img src="images/close.svg" alt='img'/></div>
                  <div className="modal__icon"><img src="images/check.svg" alt='img'/></div>
                  <div className="modal__name">Заявка оформлена</div>
                  <div className="modal__body">
                      <div className="modal__order">Номер заявки:&nbsp;<span></span></div>
                      <div className="modal__description"><p>Обязательно сохраните номер заявки, чтобы не&nbsp;потерять
                          свой заказ</p><p>Заказ появится в течение 3 рабочих дней в личном кабинете сайта&nbsp;<a
                          href="https://f-ariel.ru" target="_blank" rel='noreferrer'>f-ariel.ru</a>&nbsp;с возможностью оплаты.</p></div>
                      <div className="modal__products-empty"><span>Обратите внимание, что некоторые товары были исключены из&nbsp;заказа в&nbsp;связи с&nbsp;отсутствием на складе:</span>
                          <ul className="modal__products-saled"></ul>
                      </div>
                      <div className="btn js-modal-close">Готово</div>
                  </div>
              </div>
              <div className="modal" id="modal-error">
                  <div className="modal__close js-modal-close"><img src="images/close.svg" alt='img'/></div>
                  <div className="modal__icon"><img src="images/cancel.svg" alt='img'/></div>
                  <div className="modal__name">Заявка отклонена</div>
                  <div className="modal__body">
                      <div className="modal__description">К сожалению, все товары закончились</div>
                      <div className="btn js-modal-close">Готово</div>
                  </div>
              </div>
          </div>
      </>
  );
}

export default App;
