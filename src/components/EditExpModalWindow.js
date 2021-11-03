import React, {useState} from 'react';

import clearBtn from '../static/images/clear_black_24dp.svg';
import addBtn from '../static/images/add_black_24dp.svg';

const EditExpModalWindow = props => {
    const [company, setCompany] = useState('')
    const [title, setTitle] = useState('')
    const [dates, setDates] = useState('')
    const [description, setDescription] = useState('')

    const handleCompanyChange = (e)=> {
        setCompany(e.target.value)
    }
    const handleTitleChange = (e)=> {
        setTitle(e.target.value)
    }
    const handleDatesChange = (e)=> {
        setDates(e.target.value)
    }
    const handleDescriptionChange = (e)=> {
        setDescription(e.target.value)
    }
    const handleSubmit = () => {
        props.submit(props.id, company, title, dates, description);
        setCompany('')
        setTitle('')
        setDates('')
        setDescription('') 
        const inputs = document.querySelectorAll('.edit-edu-window-input');
        inputs.forEach(input => {
            input.value = '';
        });       
        props.hide();
    }
    return(
        <div
        className={props.show ?
                    'edit-exp-window display-block' :
                    'edit-exp-window display-none'}>
            <p>edit your experience</p>
            <input 
            className='edit-edu-window-input'
            placeholder={props.company}
            onChange={handleCompanyChange}></input>
            <input 
            className='edit-edu-window-input'
            placeholder={props.title}
            onChange={handleTitleChange}></input>
            <input 
            className='edit-edu-window-input'
            placeholder={props.dates}
            onChange={handleDatesChange}></input>
            <textarea 
            className='edit-edu-window-input'
            placeholder={props.description}
            onChange={handleDescriptionChange}></textarea>
            <div
            className='exp-window-btn-group'>
                <div
                className='submit-edit-exp-window-btn'
                onClick={()=>{handleSubmit()}}>
                        <img src={addBtn}></img>
                </div>  
                <div
                className='hide-edit-exp-window-btn'
                onClick={()=>{props.hide()}}>
                    <img src={clearBtn}></img>
                </div>          
            </div>
            
        </div>
    )
}
export default EditExpModalWindow;