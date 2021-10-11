import React from 'react';
import PreviewPage from './PreviewPage';
import Skills from './Skills';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            title: '',
            avi: '',
            summary: '',
            contact: {
                phone: '',
                addressOne: '',
                addressTwo: '',
                email: ''
            },
            skills: [
                'eating sandwiches',
                'hanging out',
                'being generally very cool'
            ],
            technologies: [],
            experience: {
                expCompany: [],
                expTitle: [],
                expDatesWorked: [],
                expDescription: []
            },
            education: {
                edInstitution: [],
                edFocus: [],
                edDatesAttended: [],
                edDegreeEarned: [],
                edDescription: []
            }
        }

        this.handleEditPageToggle = this.handleEditPageToggle.bind(this);
        this.handlePreviewPageToggle = this.handlePreviewPageToggle.bind(this);
        this.handleEditNameChange = this.handleEditNameChange.bind(this);
        this.handleEditTitleChange = this.handleEditTitleChange.bind(this);
        this.handleEditAviChange = this.handleEditAviChange.bind(this);

        this.handleSummaryChange = this.handleSummaryChange.bind(this);
        this.handleAddr1Change = this.handleAddr1Change.bind(this);
        this.handleAddr2Change = this.handleAddr2Change.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
    }

    handleEditPageToggle() {
        const edit = document.querySelector('.edit-page');
        const preview = document.querySelector('.preview-page');
        edit.classList.toggle('hide');
        preview.classList.toggle('show');
    }
    handlePreviewPageToggle() {
        const edit = document.querySelector('.edit-page');
        const preview = document.querySelector('.preview-page');
        edit.classList.toggle('hide');
        preview.classList.toggle('show');
    }
    handleEditNameChange(e) {
        this.setState({ name: e.target.value });
    }
    handleEditTitleChange(e) {
        this.setState({ title: e.target.value });
    }
    handleEditAviChange(e) {
        this.setState({ avi: URL.createObjectURL(e.target.files[0]) })
    }
    handleSummaryChange(e) {
        this.setState({ summary: e.target.value })
    }
    handleAddr1Change(e) {
        this.setState({ addressOne: e.target.value })
    }
    handleAddr2Change(e) {
        this.setState({ addressTwo: e.target.value })
    }
    handlePhoneChange(e) {
        this.setState({ phone: e.target.value })
    }
    handleEmailChange(e) {
        this.setState({ email: e.target.value })
    }
    render() {
        return(
            <>
            <div className='edit-page'>
                <div
                className='edit-page-toggle-btn'
                onClick={()=>{this.handleEditPageToggle()}}>
                    preview
                </div>
                {/* name, title and headshot */}
                <div className='edit-hero-form'>
                    <label for='name-input'>Your Name: </label>
                    <input
                    type='text'
                    name='name-input'
                    onChange={this.handleEditNameChange}></input>
                    <label for='title-input'>Your Title: </label>
                    <input
                    type='text'
                    name='title-input'
                    onChange={this.handleEditTitleChange}></input>
                    <label for='avi-input'>Choose a Headshot: </label>
                    <input
                    type='file'
                    name='avi-input'
                    onChange={this.handleEditAviChange}></input>
                </div>

                {/* summary section */}
                <div
                className='edit-summary-form'>
                    <label for='summary-input'>Summarize Yourself: </label>
                    <textarea 
                    name='summary-input'
                    onChange={this.handleSummaryChange}></textarea>
                </div>

                {/* contact section */}
                <div
                className='edit-contact-form'>
                    <label for='addr1-input'>Address 1:</label>
                    <input
                    type='text'
                    name='addr1-input'
                    onChange={this.handleAddr1Change}>
                    </input>
                    <label for='addr2-input'>Address 2:</label>
                    <input
                    type='text'
                    name='addr2-input'
                    onChange={this.handleAddr2Change}>
                    </input>
                    <label for='number-input'>Phone:</label>
                    <input
                    type='text'
                    name='number-input'
                    onChange={this.handlePhoneChange}>
                    </input>
                    <label for='email-input'>Email:</label>
                    <input
                    type='email'
                    name='email-input'
                    onChange={this.handleEmailChange}>
                    </input>
                </div>

                {/* skills and tech */}
                <div
                className='edit-skills-tech-container'>
                    <div
                    className='edit-skills-container'>
                        <div
                        className='edit-skills-add-btn'></div>
                        <h3>skills</h3>
                        <Skills
                        skills={this.state.skills}/>
                    </div>
                    <div
                    className='edit-tech-container'>
                        <h3>tech</h3>
                    </div>
                </div>

            </div>
            <PreviewPage
            toggle={this.handlePreviewPageToggle}
            name={this.state.name}
            title={this.state.title}
            avi={this.state.avi}
            
            summary={this.state.summary}
            addr1={this.state.addressOne}
            addr2={this.state.addressTwo}
            phone={this.state.phone}
            email={this.state.email}/>
            </>
        )
    }
}

export default App;