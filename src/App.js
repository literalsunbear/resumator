import React from 'react';
import PreviewPage from './PreviewPage';
import EditExpModal from './EditExpModal';
import AddExpModal from './AddExpModal';
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
                'version control',
                'agile / SCRUM',
                'test-driven development'
            ],
            tech: [
                'HTML',
                'CSS',
                'Javascript'
            ],
            experience: [
                {
                id: '1',
                company: 'EXAMPLE COMPANY',
                title: 'Your Title',
                dates: '20XX - 20XX',
                description: 'You can add a short description' +
                ' to outline some of your basic duties during your' +
                ' tenure at this job.'
                }
            ],
            education: [
                {
                id: '1',
                institution: '',
                focus: '',
                dates: '',
                degree: '',
                description: ''
                }
            ],
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

        this.handleEditExpSubmit = this.handleEditExpSubmit.bind(this);
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
    // header fxns
    handleEditNameChange(e) {
        this.setState({ name: e.target.value });
    }
    handleEditTitleChange(e) {
        this.setState({ title: e.target.value });
    }
    handleEditAviChange(e) {
        this.setState({ avi: URL.createObjectURL(e.target.files[0]) })
    }
    // basic info fxns
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
    // skills fxns
    handleDeleteSkill(skill) {
        let arr = this.state.skills;
        arr = arr.filter(e => e !== skill);
        this.setState({ skills: arr });
    }
    handleAddSkill() {
        const el = document.querySelector('#skill-add-input');
        let arr = this.state.skills;
        if(el.value) {
            arr.push(el.value);
            this.setState({ skills: arr });
        } else {
            alert('Please provide a skill in the input field');
        }
        el.value = '';
    }
    // tech fxns
    handleDeleteTech(technology) {
        let arr = this.state.tech;
        arr = arr.filter(e => e !== technology);
        this.setState({ tech: arr });
    }
    handleAddTech() {
        const el = document.querySelector('#tech-add-input');
        let arr = this.state.tech;
        if(el.value) {
            arr.push(el.value);
            this.setState({ tech: arr });
        } else {
            alert('Please provide a technology in the input field');
        }
        el.value = '';
    }
    // exp fxns
    handleEditExpSubmit(id, company, title, dates, description) {
        var arr = this.state.experience;
        var el = arr.filter(el => el.id === id);
        el.company = company;
        el.title = title;
        el.dates = dates;
        el.description = description;
        arr = arr.filter(e => e.id !== id);
        arr.push(el);
        this.setState({ experience: arr });
    }
    handleDeleteExp(id) {
        var arr = this.state.experience;
        arr = arr.filter(e => e.id !== id);
        this.setState({ experience: arr });
    }
    handleAddExpSubmit() {
        alert('you are adding experience');
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
                {/* NAME/TITLE/HEADSHOT */}
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

                {/* SUMMARY */}
                <div
                className='edit-summary-form'>
                    <label for='summary-input'>Summarize Yourself: </label>
                    <textarea 
                    name='summary-input'
                    onChange={this.handleSummaryChange}></textarea>
                </div>

                {/* CONTACT */}
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

                {/* SKILLS AND TECHNOLOGY */}
                <div
                className='edit-skills-tech-container'>
                    {/* skills section */}
                    <div
                    className='edit-skills-section'>
                        <p
                        className='edit-skills-section-label'>Skills:</p>
                        {this.state.skills.map(skill => {
                            return(
                                <div
                                className='edit-page-skill'>
                                    <div
                                    className='skill-delete-btn'
                                    onClick={()=>{this.handleDeleteSkill(skill)}}>
                                        [delete]
                                    </div>
                                    <p>{skill}</p>
                                </div>
                            )
                        })}
                        <div
                        className='edit-skills-add'>
                                                        <div
                            className='skill-add-btn'
                            onClick={()=>{this.handleAddSkill()}}>[add]</div> 
                            <input
                            type='text'
                            id='skill-add-input'
                            onChange={this.handleAddSkillChange}></input>
                        </div>
                        
                    </div>

                    {/* tech section */}
                    <div
                    className='edit-tech-section'>
                        <p
                        className='edit-tech-section-label'>Technology:</p>
                        {this.state.tech.map(technology => {
                            return(
                                <div
                                className='edit-page-technology'>
                                    <div
                                    className='skill-delete-btn'
                                    onClick={()=>{this.handleDeleteTech(technology)}}>
                                        [delete]
                                    </div>
                                    <p>{technology}</p>
                                </div>
                            )
                        })}
                        <div
                        className='edit-tech-add'>
                            <div
                            className='tech-add-btn'
                            onClick={()=>{this.handleAddTech()}}>[add]</div> 
                            <input
                            type='text'
                            id='tech-add-input'
                            onChange={this.handleAddSkillChange}></input>
          
                        </div>
                        
                    </div>
                </div>
                
                {/* EXPERIENCE */}
                <div
                className='edit-experience-container'>
                    <p
                    className='edit-experience-section-label'>Experience:</p>
                    {this.state.experience.map(exp => {
                        return(
                            <div
                            className='edit-page-exp'
                            id={`edit-page-exp-${exp.id}`}>
                                <p className='edit-page-exp-item-company'>{exp.company}</p>
                                <p className='edit-page-exp-item-title'>{exp.title}</p>
                                <p className='edit-page-exp-item-dates'>{exp.dates}</p>
                                <p className='edit-page-exp-item-description'>{exp.description}</p>
                                <div
                                className='exp-delete-btn'
                                onClick={()=>{this.handleDeleteExp(exp.id)}}>[delete]</div>
                                <EditExpModal
                                id={exp.id}
                                company={exp.company}
                                title={exp.title}
                                dates={exp.dates}
                                description={exp.description}
                                submit={this.handleEditExpSubmit}/>
                            </div>
                        )
                    })}
                   <AddExpModal
                   submit={this.handleAddExpSubmit}/>
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
            email={this.state.email}
            
            skills={this.state.skills}
            tech={this.state.tech}
            
            experience={this.state.experience}/>
            </>
        )
    }
}

export default App;