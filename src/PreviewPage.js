import React from 'react';

class PreviewPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className='preview-page'>
            <h1>this is the preview page</h1>
            <div
                className='preview-page-toggle-btn'
                onClick={this.props.toggle}>
                    edit
                </div>
        </div>
        )
    }
}

export default PreviewPage;