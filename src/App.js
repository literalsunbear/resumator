import React from 'react';
import EditPage from './EditPage';
import PreviewPage from './PreviewPage';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            title: '',
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

    render() {
        return(
            <>
            <EditPage
            toggle={this.handleEditPageToggle}/>
            <PreviewPage
            toggle={this.handlePreviewPageToggle}/>
            </>
        )
    }
}

export default App;