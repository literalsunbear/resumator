import React from 'react';

class PreviewPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className='preview-page'>
            <div
                className='preview-page-toggle-btn'
                onClick={this.props.toggle}>
                    edit
            </div>
            {/* rendered CV */}
            {/* name, title, avi */}
            <div
            className='preview-hero-container'>
                <h1>{this.props.name}</h1>
                <h2>{this.props.title}</h2>
                <div
                className='preview-hero-avi'
                style={{ 
                    backgroundImage: `url(${this.props.avi})`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover' }}></div>
            </div>
            {/* main content */}
            <div
            className='preview-main-content-container'>
                {/* skills, tech */}
                <div
                className='preview-left-column'>
                    <div
                    className='preview-skills-container'>
                        <h3>skills</h3>
                        <ul
                        className='preview-skills-list'>
                            {this.props.skills.map(skill => {
                                return(
                                    <li
                                    className='preview-skill-item'>
                                        {skill}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div
                    className='preview-tech-container'>
                        <h3>technology</h3>
                        <ul
                        className='preview-tech-list'>
                            {this.props.tech.map(tech => {
                                return(
                                    <li
                                    className='preview-tech-item'>
                                        {tech}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                {/* summary, contact, exp, edu */}
                <div
                className='preview-right-column'>
                    <div
                    className='preview-summary-container'>
                        <h3>summary</h3>
                        <p>{this.props.summary}</p>
                    </div>
                    <div
                    className='preview-contact-container'>
                        <h3>contact</h3>
                        <p>{this.props.addr1}</p>
                        <p>{this.props.addr2}</p>
                        <p>{this.props.phone}</p>
                        <p>{this.props.email}</p>   
                    </div>
                </div>

            </div>

        </div>
        )
    }
}

export default PreviewPage;