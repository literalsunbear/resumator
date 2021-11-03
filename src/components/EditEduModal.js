import React from 'react';
import EditEduModalWindow from './EditEduModalWindow';

import editBtn from '../static/images/edit_black_24dp.svg';

class EditEduModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }
    showModal = () => {
        this.setState({show: true});
    };
    hideModal = () => {
        this.setState({show: false})
    }

    render() {
        return(
            <div
            className='edit-edu-modal-container'>
                <div
                className='edit-edu-modal-btn'
                onClick={this.showModal}>
                    <img src={editBtn}></img>
                </div>
                <EditEduModalWindow
                show={this.state.show}
                hide={this.hideModal}
                id={this.props.id}
                institution={this.props.institution}
                dates={this.props.dates}
                degree={this.props.degree}
                description={this.props.description}
                submit={this.props.submit}/>
            </div>

        )
    }
}
export default EditEduModal;