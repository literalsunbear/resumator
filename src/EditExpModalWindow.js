import React from 'react';

import clearBtn from './static/images/clear_black_24dp.svg';
import addBtn from './static/images/add_black_24dp.svg';

class EditExpModalWindow extends React.Component {
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
    handleSubmit(id, company, title, dates, description) {
        this.props.submit(id, company, title, dates, description);
        this.setState({ id: '', company: '', title: '', dates: '', description: '' });
        this.props.hide();
    }
    render() {
        const windowClassName = this.props.show ? 'edit-exp-window display-block' : 'edit-exp-window display-none';
        return(
            <div
            className={windowClassName}>
                <p>edit your experience</p>
                <input 
                placeholder={this.props.company}
                onChange={this.handleCompanyChange}></input>
                <input 
                placeholder={this.props.title}
                onChange={this.handleTitleChange}></input>
                <input 
                placeholder={this.props.dates}
                onChange={this.handleDatesChange}></input>
                <textarea 
                placeholder={this.props.description}
                onChange={this.handleDescriptionChange}></textarea>
                <div
                className='exp-window-btn-group'>
                    <div
                    className='submit-edit-exp-window-btn'
                    onClick={()=>{this.handleSubmit(
                        this.props.id,
                        this.state.company,
                        this.state.title,
                        this.state.dates,
                        this.state.description)}}>
                            <img src={addBtn}></img>
                    </div>  
                    <div
                    className='hide-edit-exp-window-btn'
                    onClick={()=>{this.props.hide()}}>
                        <img src={clearBtn}></img>
                    </div>          
                </div>
                
            </div>
        )
    }
}
export default EditExpModalWindow;