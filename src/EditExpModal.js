import React from 'react';
import EditExpModalWindow from './EditExpModalWindow';

class EditExpModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
        this.showModal = this.showModal.bind(this);
    }
    showModal = () => {
        this.setState({show: true});
    };

    render() {
        return(
            <div
            className='edit-task-modal-container'>
                <div
                className='edit-exp-modal-btn'
                onClick={this.showModal}>[edit]</div>
                <EditExpModalWindow
                show={this.state.show}/>
            </div>

        )
    }
}
export default EditExpModal;