import React from 'react';

class EditExpModalWindow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            title: '',
            company: '',
            dates: '',
            description: ''
        }
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleCompanyChange = this.handleCompanyChange.bind(this);
        this.handleDatesChange = this.handleDatesChange.bind(this);
        this.handleDescriptionChange = this.handleTitleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleTitleChange(e) {
        this.setState({ title: e.target.value });
    }
    handleCompanyChange(e) {
        this.setState({ company: e.target.value });
    }
    handleDatesChange(e) {
        this.setState({ dates: e.target.value });
    }
    handleDescriptionChange(e) {
        this.setState({ description: e.target.value });
    }
    handleSubmit() {
        alert('experience submitted');
        this.props.hide();
    }
    render() {
        const windowClassName = this.props.show ? 'edit-exp-window display-block' : 'edit-exp-window display-none';
        return(
            <div
            className={windowClassName}>
                <p>edit your experience</p>
                <input 
                value={this.props.title}
                onChange={this.handleTitleChange}></input>
                <input 
                value={this.props.company}
                onChange={this.handleCompanyChange}></input>
                <input 
                value={this.props.dates}
                onChange={this.handleDatesChange}></input>
                <textarea 
                value={this.props.description}
                onChange={this.handleDescriptionChange}></textarea>
                <div
                className='hide-edit-exp-window-btn'
                onClick={()=>{this.props.hide()}}>[hide]</div>
                <div
                className='submit-edit-exp-window-btn'
                onClick={()=>{this.handleSubmit()}}>[submit]</div>
            </div>
        )
    }
}
export default EditExpModalWindow;