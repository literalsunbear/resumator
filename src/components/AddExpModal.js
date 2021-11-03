import React, {useState} from 'react';
import AddexpModalWindow from './AddExpModalWindow';

import addBtn from '../static/images/add_black_24dp.svg';

const AddExpModal = props => {
    const [show, setShow] = useState(false)
    const hideModal = () => {
        setShow(false)
    }
    const showModal = () => {
        setShow(true)
    }
    return(
        <div
        className='add-exp-modal-container'>
            <div
            className='add-exp-modal-btn'
            onClick={showModal}>
                <img src={addBtn}></img>
            </div>
            <AddexpModalWindow
            show={show}
            hide={hideModal}
            submit={props.submit}/>
        </div>
    )
}
export default AddExpModal;