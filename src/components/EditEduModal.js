import React, {useState} from 'react';
import EditEduModalWindow from './EditEduModalWindow';

import editBtn from '../static/images/edit_black_24dp.svg';
const EditEduModal = props => {
    const [show, setShow] = useState(false)
    const hideModal = () => {
        setShow(false)
    }
    const showModal = () => {
        setShow(true)
    }
    return(
        <div
        className='edit-edu-modal-container'>
            <div
            className='edit-edu-modal-btn'
            onClick={showModal}>
                <img src={editBtn}></img>
            </div>
            <EditEduModalWindow
            show={show}
            hide={hideModal}
            id={props.id}
            institution={props.institution}
            dates={props.dates}
            degree={props.degree}
            description={props.description}
            submit={props.submit}/>
        </div>
    )
}
export default EditEduModal;