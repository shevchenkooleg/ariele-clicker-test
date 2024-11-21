import React, { useState } from 'react';
import ModalForm from "./ModalForm";
import ModalAccept from "./ModalAccept";
import ModalError from "./ModalError";

interface OrderFormProps {
    showModal: boolean
}

const OrderForm = (props: OrderFormProps) => {

    const {showModal} = props
    const [showAcceptModal, setShowAcceptModal] = useState(false)
    const [showErrorModal, setShowErrorModal] = useState(false)

    return (
        <div className="overlay">
            {showModal &&
                <ModalForm
                    setShowAcceptModal={setShowAcceptModal}
                    setShowErrorModal={setShowErrorModal}
                />
            }
            {showAcceptModal && <ModalAccept/>}
            {showErrorModal && <ModalError/>}
        </div>
    );
};

export default OrderForm;