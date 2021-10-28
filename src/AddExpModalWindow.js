import React from 'react';

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
    handleSubmit() {
        this.props.submit();
        this.props.hide();
    }
    render() {
        const windowClassName = this.props.show ? 'edit-exp-window display-block' : 'edit-exp-window display-none';
        return(
            <div
            className={windowClassName}
            id={`edit-exp-window-${this.props.id}`}>
                <p>add your experience</p>
                <input 
                onChange={this.handleCompanyChange}></input>
                <input 
                onChange={this.handleTitleChange}></input>
                <input 
                onChange={this.handleDatesChange}></input>
                <textarea 
                onChange={this.handleDescriptionChange}></textarea>
                <div
                className='hide-edit-exp-window-btn'
                onClick={()=>{this.props.hide()}}>[hide]</div>
                <div
                className='submit-edit-exp-window-btn'
                onClick={()=>{this.handleSubmit(
                    this.state.company,
                    this.state.title,
                    this.state.dates,
                    this.state.description)}}>[submit]</div>
            </div>
        )
    }
}
export default AddExpModalWindow;