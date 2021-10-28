import React from 'react';

class EditExpModalWindow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 'x',
            company: 'x',
            title: 'x',
            dates: 'x',
            description: 'x'
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
        this.props.hide();
    }
    render() {
        const windowClassName = this.props.show ? 'edit-exp-window display-block' : 'edit-exp-window display-none';
        return(
            <div
            className={windowClassName}
            id={`edit-exp-window-${this.props.id}`}>
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
                className='hide-edit-exp-window-btn'
                onClick={()=>{this.props.hide()}}>[hide]</div>
                <div
                className='submit-edit-exp-window-btn'
                onClick={()=>{this.handleSubmit(
                    this.props.id,
                    this.state.company,
                    this.state.title,
                    this.state.dates,
                    this.state.description)}}>[submit]</div>
            </div>
        )
    }
}
export default EditExpModalWindow;