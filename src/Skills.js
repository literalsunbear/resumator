import React from 'react';

class Skills extends React.Component {
    constructor(props) {
        super(props);
    };

    render(){
        return(
            <ul
            className='edit-skills-list'>
                {this.props.skills.map(skill => 
                    <li
                    className='edit-page-skill'
                    key={skill}>
                        <div
                        className='edit-skills-delete-btn'>X</div>
                        <input
                        placeholder={skill}></input>
                    </li>
                )}
            </ul>
        )

    }
}
export default Skills;