import React from 'react';

class EditPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className='edit-page'>
                <h1>this is the edit page</h1>
                <div
                className='edit-page-toggle-btn'
                onClick={this.props.toggle}>
                    preview
                </div>
            </div>
        )
    }
}

export default EditPage;