import React from 'react';

class Skill extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div
            className='skill'>
                <p>{this.props.skill}</p>
            </div>
        )
    }
}
export default Skill;