import React, {useState} from 'react';

import clearBtn from '../static/images/clear_black_24dp.svg';
import addBtn from '../static/images/add_black_24dp.svg';

const EditEduModalWindow = props => {
    const [institution, setInstitution] = useState('')
    const [dates, setDates] = useState('')
    const [degree, setDegree] = useState('')
    const [description, setDescription] = useState('')

    const handleInstitutionChange = (e)=> {
        setInstitution(e.target.value)
    }
    const handleDatesChange = (e)=> {
        setDates(e.target.value)
    }
    const handleDegreeChange = (e)=> {
        setDegree(e.target.value)
    }
    const handleDescriptionChange = (e)=> {
        setDescription(e.target.value)
    }
    const handleSubmit = ()=> {
        props.submit(props.id, institution, dates, degree, description);
        setInstitution('')
        setDates('')
        setDegree('')
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
                    'edit-edu-window display-block' :
                    'edit-edu-window display-none'}>
            <p>edit your education</p>
            <input 
            className='edit-edu-window-input'
            placeholder={props.institution}
            onChange={handleInstitutionChange}></input>
            <input 
            className='edit-edu-window-input'
            placeholder={props.degree}
            onChange={handleDegreeChange}></input>
            <input 
            className='edit-edu-window-input'
            placeholder={props.dates}
            onChange={handleDatesChange}></input>
            <textarea 
            className='edit-edu-window-input'
            placeholder={props.description}
            onChange={handleDescriptionChange}></textarea>
            <div
            className='edu-window-btn-group'>
                <div
                className='submit-edit-edu-window-btn'
                onClick={()=>{handleSubmit()}}>
                        <img src={addBtn}></img>
                </div>  
                <div
                className='hide-edit-edu-window-btn'
                onClick={()=>{props.hide()}}>
                    <img src={clearBtn}></img>
                </div>          
            </div>
        </div>
    )
}
export default EditEduModalWindow;