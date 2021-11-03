import React, {useState} from 'react';
import EditExpModalWindow from './EditExpModalWindow';

import editBtn from '../static/images/edit_black_24dp.svg';

const EditExpModal = props => {
    const [show, setShow] = useState(false)
    const hideModal = () => {
        setShow(false)
    }
    const showModal = () => {
        setShow(true)
    }
    return(
        <div
        className='edit-exp-modal-container'>
            <div
            className='edit-exp-modal-btn'
            onClick={showModal}>
                <img src={editBtn}></img>
            </div>
            <EditExpModalWindow
            show={show}
            hide={hideModal}
            id={props.id}
            company={props.company}
            title={props.title}
            dates={props.dates}
            description={props.description}
            submit={props.submit}/>
        </div>

    )
}
export default EditExpModal;