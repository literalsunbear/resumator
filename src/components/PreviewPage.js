import React from 'react';

const PreviewPage = props => {     
    return(
        <div className='preview-page'>
            {/* rendered CV */}
            {/* name, title, avi */}
            <div
            className='preview-hero-container'>
                <h1>{props.name}</h1>
                <h2>{props.title}</h2>
                <div
                className='preview-hero-avi'
                style={{ 
                    backgroundImage: `url(${props.avi})`,
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
                            {props.skills.map(skill => {
                                return(
                                    <li
                                    key={skill}
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
                            {props.tech.map(tech => {
                                return(
                                    <li
                                    key={tech}
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
                        <p>{props.summary}</p>
                    </div>
                    <div
                    className='preview-contact-container'>
                        <h3>contact</h3>
                        <p>{props.addr1}</p>
                        <p>{props.addr2}</p>
                        <p>{props.phone}</p>
                        <p>{props.email}</p>   
                    </div>
                    <div
                    className='preview-experience-container'>
                        <h3>experience</h3>
                        <ul
                        className='preview-exp-list'>
                            {props.experience.map(exp => {
                                return(
                                    <li
                                    key={exp.company}
                                    className='preview-exp-item'>
                                        <p
                                        style={{
                                            fontWeight: 'bold',
                                            opacity: .65
                                        }}>{exp.company}</p>
                                        <p>{exp.title}</p>
                                        <p
                                        style={{
                                            fontStyle: 'italic'
                                        }}>{exp.dates}</p>
                                        <p>{exp.description}</p>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div
                    className='preview-education-container'>
                        <h3>education</h3>
                        <ul
                        className='preview-exp-list'>
                            {props.education.map(edu => {
                                return(
                                    <li
                                    key={edu.company}
                                    className='preview-edu-item'>
                                        <p
                                        style={{
                                            fontWeight: 'bold',
                                            opacity: .65
                                        }}>{edu.institution}</p>
                                        <p>{edu.degree}</p>
                                        <p
                                        style={{
                                            fontStyle: 'italic'
                                        }}>{edu.dates}</p>
                                        <p>{edu.description}</p>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>

            </div>
        </div>
        )
    }

export default PreviewPage;