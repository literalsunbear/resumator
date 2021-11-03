import React from 'react';

import clearBtn from '../static/images/clear_black_24dp.svg';
import addBtn from '../static/images/add_black_24dp.svg';

class AddExpModalWindow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            company: '',
            title: '',
            dates: '',
            description: ''
        }
        this.handleCompanyChange = this.handleCompanyChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleDatesChange = this.handleDatesChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    }
    handleCompanyChange(e) {
        this.setState({ company: e.target.value });
    }
    handleTitleChange(e) {
        this.setState({ title: e.target.value });
    }
    handleDatesChange(e) {
        this.setState({ dates: e.target.value });
    }
    handleDescriptionChange(e) {
        this.setState({ description: e.target.value });
    }
    handleSubmit(company, title, dates, description) {
        const id = Math.floor(100 + Math.random() * 900) + '';
        this.props.submit(id, company, title, dates, description);
        this.setState({ id: '', company: '', title: '', dates: '', description: '' });
        const inputs = document.querySelectorAll('.add-exp-window-input');
        inputs.forEach(input => {
            input.value = '';
        });
        this.props.hide();
    }
    render() {
        return(
            <div
            className={this.props.show ?
                        'add-exp-window display-block' :
                        'add-exp-window display-none'}>
                <p>add your experience</p>
                <input 
                className='add-exp-window-input'
                placeholder='EXAMPLE COMPANY'
                onChange={this.handleCompanyChange}></input>
                <input 
                className='add-exp-window-input'
                placeholder='Your Title'
                onChange={this.handleTitleChange}></input>
                <input 
                className='add-exp-window-input'
                placeholder='20XX - 20XX'
                onChange={this.handleDatesChange}></input>
                <textarea 
                className='add-exp-window-input'
                placeholder='You can add a short description here.'
                onChange={this.handleDescriptionChange}></textarea>
                <div className='exp-window-btn-group'>
                    <div
                    className='submit-add-exp-window-btn'
                    onClick={()=>{this.handleSubmit(
                        this.state.company,
                        this.state.title,
                        this.state.dates,
                        this.state.description)}}>
                            <img src={addBtn}></img>

                    </div>
                    <div
                    className='hide-add-exp-window-btn'
                    onClick={()=>{this.props.hide()}}>
                        <img src={clearBtn}></img>
                    </div>
                </div>
                
            </div>
        )
    }
}
export default AddExpModalWindow;