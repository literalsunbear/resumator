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
            {/* name, title, avi */}
            <div
            className='preview-hero-container'>
                <h1>{this.props.name}</h1>
                <h2>{this.props.title}</h2>
                <img
                src={this.props.avi}></img>
            </div>
            {/* main content */}
            <div
            className='preview-main-content-container'>
                {/* skills, tech */}
                <div
                className='preview-left-column'>
                    <div
                    className='preview-skills-container'>
                    </div>
                    <div
                    className='preview-tech-container'>
                    </div>
                </div>
                {/* summary, contact, exp, edu */}
                <div
                className='preview-right-column'>
                    <div
                    className='preview-summary-container'>
                        <h3>summary</h3>
                        <p>{this.props.summary}</p>
                    </div>
                    <div
                    className='preview-contact-container'>
                        <div
                        className='preview-address-container'>
                            <h3>address</h3>
                            <p>{this.props.addr1}</p>
                            <p>{this.props.addr2}</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
        )
    }
}

export default PreviewPage;