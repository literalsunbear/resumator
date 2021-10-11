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
                    <li
                    className='edit-page-tech'
                    key={technology}>
                        <div
                        className='edit-tech-delete-btn'>X</div>
                        <input
                        placeholder={technology}></input>
                    </li>
                )}
            </ul>
        )

    }
}
export default Tech;