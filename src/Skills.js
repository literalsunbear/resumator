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
                    <li>
                        <div
                        className='edit-skills-delete-btn'>X</div>
                        <p>{skill}</p>
                    </li>
                )}
            </ul>
        )

    }
}
export default Skills;