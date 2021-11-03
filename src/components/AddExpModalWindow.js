import React, {useState} from 'react';

import clearBtn from '../static/images/clear_black_24dp.svg';
import addBtn from '../static/images/add_black_24dp.svg';

const AddExpModalWindow = props => {
    const [company, setCompany] = useState('')
    const [title, setTitle] = useState('')
    const [dates, setDates] = useState('')
    const [description, setDescription] = useState('')

    const handleCompanyChange = (e) => {
        setCompany(e.target.value)
    }
    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }
    const handleDatesChange = (e) => {
        setDates(e.target.value)
    }
    const handleDescriptionChange = (e) => {
        setDescription(e.target.value)
    }
    const handleSubmit = () => {
        const id = Math.floor(100 + Math.random() * 900) + '';
        props.submit(id, company, title, dates, description);
        setCompany('')
        setTitle('')
        setDates('')
        setDescription('')
        const inputs = document.querySelectorAll('.add-exp-window-input');
        inputs.forEach(input => {
            input.value = '';
        });
        props.hide();
    }
    return(
        <div
        className={props.show ?
                    'add-exp-window display-block' :
                    'add-exp-window display-none'}>
            <p>add your experience</p>
            <input 
            className='add-exp-window-input'
            placeholder='EXAMPLE COMPANY'
            onChange={handleCompanyChange}></input>
            <input 
            className='add-exp-window-input'
            placeholder='Your Title'
            onChange={handleTitleChange}></input>
            <input 
            className='add-exp-window-input'
            placeholder='20XX - 20XX'
            onChange={handleDatesChange}></input>
            <textarea 
            className='add-exp-window-input'
            placeholder='You can add a short description here.'
            onChange={handleDescriptionChange}></textarea>
            <div className='exp-window-btn-group'>
                <div
                className='submit-add-exp-window-btn'
                onClick={()=>{handleSubmit(
                    company,
                    title,
                    dates,
                    description)}}>
                        <img src={addBtn}></img>

                </div>
                <div
                className='hide-add-exp-window-btn'
                onClick={()=>{props.hide()}}>
                    <img src={clearBtn}></img>
                </div>
            </div>   
        </div>
    )
}
export default AddExpModalWindow;