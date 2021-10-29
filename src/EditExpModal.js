import React from 'react';
import EditExpModalWindow from './EditExpModalWindow';

import editBtn from './static/images/edit_black_24dp.svg';

class EditExpModal extends React.Component {
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
            className='edit-exp-modal-container'>
                <div
                className='edit-exp-modal-btn'
                onClick={this.showModal}>
                    <img src={editBtn}></img>
                </div>
                <EditExpModalWindow
                show={this.state.show}
                hide={this.hideModal}
                id={this.props.id}
                company={this.props.company}
                title={this.props.title}
                dates={this.props.dates}
                description={this.props.description}
                submit={this.props.submit}/>
            </div>

        )
    }
}
export default EditExpModal;