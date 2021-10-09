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
            <div
            className='preview-hero-container'>
                <h1>{this.props.name}</h1>
                <h2>{this.props.title}</h2>
                <img
                src={this.props.avi}></img>
            </div>
        </div>
        )
    }
}

export default PreviewPage;