import React, {useState} from 'react';

interface ModalFormProps {
    setShowAcceptModal: (isShow: boolean) => void
    setShowErrorModal: (isShow: boolean) => void
}

const ModalForm = (props: ModalFormProps) => {

    const { setShowAcceptModal, setShowErrorModal } = props

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [formComment, setFormComment] = useState('')
    const [isChecked, setIsChecked] = useState(false)

    const onSubmitClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        console.log('lastName ', lastName)
        console.log('firstName ', firstName)
        console.log('email ', email)
        console.log('phone ', phone)
        console.log('formComment ', formComment)
        setShowAcceptModal(true)
    }


    return (
        <div className="modal" id="modal-cart">
            <div className="modal__close js-modal-close"><img src="images/close.svg" alt='img'/></div>
            <div className="modal__title">Заявка</div>
            <div className="modal__products"></div>
            <form className="modal__form">
                <div className="form-group"><label>Фамилия</label> <input placeholder="Иванов" name="surname"
                                                                          id="surname" onChange={(e)=>setLastName(e.currentTarget.value)}/><span
                    className="error-msg" id="surname-error"></span></div>
                <div className="form-group"><label>Имя</label> <input placeholder="Иван" name="name"
                                                                      id="name" onChange={(e)=>setFirstName(e.currentTarget.value)}/><span className="error-msg"
                                                                                       id="name-error"></span>
                </div>
                <div className="form-group" id="phone-validate"><label>Номер телефона</label> <input type="tel"
                                                                                                     placeholder="+7 (___) ___-__-__"
                                                                                                     name="phone"
                                                                                                     id="phone"
                                                                                                     inputMode="text"
                                                                                                     onChange={(e)=>setPhone(e.currentTarget.value)}
                />
                    <span
                    className="error-msg" id="phone-error"></span></div>
                <div className="form-group"><label>Email</label> <input placeholder="example@mail.ru" name="email"
                                                                        id="email" onChange={(e)=>setEmail(e.currentTarget.value)}/><span className="error-msg"
                                                                                          id="email-error"></span>
                </div>
                <div className="form-group"><label>Адрес доставки</label> <textarea name="formComment"
                                                                                    placeholder="Адрес отделения СДЭК / Город, улица, дома, квартира / Самовывоз"
                                                                                    id="formComment"
                                                                                    onChange={(e)=>setFormComment(e.currentTarget.value)}
                ></textarea><span
                    className="error-msg" id="address-error"></span></div>
                <label className="checkbox"><input type="checkbox" checked={isChecked} onChange={()=>setIsChecked((prev)=>!prev)}/><span
                    className="checkmark"></span><span className="checkbox__text">Даю согласие на обработку&nbsp;
                    <a href="https://f-ariel.ru/title.php/#pers"
                       target="_blank" rel='noreferrer'>персональных данных</a></span></label>
                <div id="captcha-container" className="smart-captcha_invisible"
                     data-testid="smartCaptcha-container">
                    <div style={{display: 'none'}}>
                        <iframe frameBorder="0"
                                src="https://smartcaptcha.yandexcloud.net/backend.636bb879d1085041bc19.html?sitekey=ysc1_aiOTqFCNUbcnlFTvdFJxbtge7SgILnH7yBPjY9tU99353f9c&amp;theme=light&amp;hl=ru&amp;host=order.f-ariel.ru&amp;href=https%3A%2F%2Forder.f-ariel.ru%2F&amp;test=false&amp;webview=false&amp;hideChallengeContainer=false"
                                aria-hidden="true" allow="encrypted-media *;"
                                style={{
                                    display: 'block',
                                    width: '100%',
                                    height: '100%',
                                    zIndex: '0',
                                    transform: 'translate3d(0px, 0px, 0px)'
                                }}
                                data-testid="backend-iframe" title="SmartCaptcha backend"></iframe>
                    </div>
                    <input type="hidden" name="smart-token" data-testid="smart-token" value=""/></div>
                <button type="submit" className="" onClick={onSubmitClickHandler}>Оформить заявку</button>
                <span className="error-msg" id="form-error"></span>
                <div className="modal__caption"><p>Форма защищена&nbsp;<a
                    href="https://yandex.ru/legal/smartcaptcha_notice/" target="_blank" rel='noreferrer'>Yandex
                    SmartCaptcha</a>
                </p></div>
            </form>
        </div>
    );
};

export default ModalForm;