import React from 'react';

import clearBtn from './static/images/clear_black_24dp.svg';
import addBtn from './static/images/add_black_24dp.svg';

class AddEduModalWindow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            institution: '',
            dates: '',
            degree: '',
            description: ''
        }
        this.handleInstitutionChange = this.handleInstitutionChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleDegreeChange = this.handleDegreeChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    }
    handleInstitutionChange(e) {
        this.setState({ institution: e.target.value });
    }
    handleDateChange(e) {
        this.setState({ dates: e.target.value });
    }
    handleDegreeChange(e) {
        this.setState({ degree: e.target.value });
    }
    handleDescriptionChange(e) {
        this.setState({ description: e.target.value });
    }
    handleSubmit(institution, dates, degree, description) {
        const id = Math.floor(100 + Math.random() * 900) + '';
        this.props.submit(id, institution, dates, degree, description);
        this.setState({ id: '', institution: '', dates: '', degree: '', description: '' });
        const inputs = document.querySelectorAll('.add-edu-window-input');
        inputs.forEach(input => {
            input.value = '';
        });
        this.props.hide();
    }
    render() {
        const windowClassName = this.props.show ? 'add-edu-window display-block' : 'add-edu-window display-none';
        return(
            <div
            className={windowClassName}>
                <p>add your education</p>
                <input 
                className='add-edu-window-input'
                placeholder='EXAMPLE SCHOOL'
                onChange={this.handleInstitutionChange}></input>
                <input 
                className='add-edu-window-input'
                placeholder='B.S. of Computer Science'
                onChange={this.handleDegreeChange}></input>
                <input 
                className='add-edu-window-input'
                placeholder='20XX - 20XX'
                onChange={this.handleDateChange}></input>
                <textarea 
                className='add-edu-window-input'
                placeholder='You can add a short description here.'
                onChange={this.handleDescriptionChange}></textarea>
                <div className='edu-window-btn-group'>
                    <div
                    className='submit-add-edu-window-btn'
                    onClick={()=>{this.handleSubmit(
                        this.state.institution,
                        this.state.dates,
                        this.state.degree,
                        this.state.description)}}>
                            <img src={addBtn}></img>

                    </div>
                    <div
                    className='hide-add-edu-window-btn'
                    onClick={()=>{this.props.hide()}}>
                        <img src={clearBtn}></img>
                    </div>
                </div>
                
            </div>
        )
    }
}
export default AddEduModalWindow;