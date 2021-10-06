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
            {/* rendered CV */}
            <div
            className='preview-hero-container'>
                <h1>{this.props.name}</h1>
                <h2>{this.props.title}</h2>
                <image
                src={this.props.avi}></image>
            </div>
        </div>
        )
    }
}

export default PreviewPage;