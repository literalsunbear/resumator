import React from 'react';

import clearBtn from '../static/images/clear_black_24dp.svg';
import addBtn from '../static/images/add_black_24dp.svg';

class EditEduModalWindow extends React.Component {
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
    handleSubmit(id, institution, dates, degree, description) {
        this.props.submit(id, institution, dates, degree, description);
        this.setState({ id: '', institution: '', dates: '', degree: '', description: '' });
        this.props.hide();
    }
    render() {
        return(
            <div
            className={this.props.show ?
                        'edit-edu-window display-block' :
                        'edit-edu-window display-none'}>
                <p>edit your education</p>
                <input 
                placeholder={this.props.institution}
                onChange={this.handleInstitutionChange}></input>
                <input 
                placeholder={this.props.degree}
                onChange={this.handleDegreeChange}></input>
                <input 
                placeholder={this.props.dates}
                onChange={this.handleDateChange}></input>
                <textarea 
                placeholder={this.props.description}
                onChange={this.handleDescriptionChange}></textarea>
                <div
                className='edu-window-btn-group'>
                    <div
                    className='submit-edit-edu-window-btn'
                    onClick={()=>{this.handleSubmit(
                        this.props.id,
                        this.state.institution,
                        this.state.dates,
                        this.state.degree,
                        this.state.description)}}>
                            <img src={addBtn}></img>
                    </div>  
                    <div
                    className='hide-edit-edu-window-btn'
                    onClick={()=>{this.props.hide()}}>
                        <img src={clearBtn}></img>
                    </div>          
                </div>
                
            </div>
        )
    }
}
export default EditEduModalWindow;