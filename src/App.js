import React from 'react';
import PreviewPage from './PreviewPage';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            title: '',
            avi: [],
            summary: '',
            contact: {
                phone: '',
                addressOne: '',
                addressTwo: '',
                email: ''
            },
            skills: [],
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
    }

    handleEditPageToggle() {
        const edit = document.querySelector('.edit-page');
        const preview = document.querySelector('.preview-page');
        edit.classList.toggle('hide');
        preview.classList.toggle('show');

        alert(`hey there, ${this.state.name}!`)
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
        const image = e.target.files[0];
        this.setState({ avi: image });
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


            </div>
            <PreviewPage
            toggle={this.handlePreviewPageToggle}
            name={this.state.name}
            title={this.state.title}
            avi={this.state.avi}/>
            </>
        )
    }
}

export default App;