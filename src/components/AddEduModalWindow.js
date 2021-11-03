import React, {useState} from 'react';

import clearBtn from '../static/images/clear_black_24dp.svg';
import addBtn from '../static/images/add_black_24dp.svg';

const AddEduModalWindow = props => {
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
        const id = Math.floor(100 + Math.random() * 900) + '';
        props.submit(id, institution, dates, degree, description);
        setInstitution('')
        setDates('')
        setDegree('')
        setDescription('')
        const inputs = document.querySelectorAll('.add-edu-window-input');
        inputs.forEach(input => {
            input.value = '';
        });
        props.hide();
    }
    return(
        <div
        className={props.show ?
                    'add-edu-window display-block' :
                    'add-edu-window display-none'}>
            <p>add your education</p>
            <input 
            className='add-edu-window-input'
            placeholder='EXAMPLE SCHOOL'
            onChange={handleInstitutionChange}></input>
            <input 
            className='add-edu-window-input'
            placeholder='B.S. of Computer Science'
            onChange={handleDegreeChange}></input>
            <input 
            className='add-edu-window-input'
            placeholder='20XX - 20XX'
            onChange={handleDatesChange}></input>
            <textarea 
            className='add-edu-window-input'
            placeholder='You can add a short description here.'
            onChange={handleDescriptionChange}></textarea>
            <div className='edu-window-btn-group'>
                <div
                className='submit-add-edu-window-btn'
                onClick={()=>{handleSubmit(
                    institution,
                    dates,
                    degree,
                    description)}}>
                        <img src={addBtn}></img>
                </div>
                <div
                className='hide-add-edu-window-btn'
                onClick={()=>{props.hide()}}>
                    <img src={clearBtn}></img>
                </div>
            </div>
        </div>
    )
}
export default AddEduModalWindow;