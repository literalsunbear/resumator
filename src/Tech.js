import React from 'react';

class Tech extends React.Component {
    constructor(props) {
        super(props);
    };

    render(){
        return(
            <ul
            className='edit-tech-list'>
                {this.props.tech.map(technology => 
                    <li>
                        <div
                        className='edit-tech-delete-btn'>X</div>
                        <p>{technology}</p>
                    </li>
                )}
            </ul>
        )

    }
}
export default Tech;