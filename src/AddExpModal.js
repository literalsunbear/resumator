import React from 'react';
import AddexpModalWindow from './AddExpModalWindow';

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
            className='add-exp-modal-container'>
                <div
                className='add-exp-modal-btn'
                onClick={this.showModal}>[add]</div>
                <AddexpModalWindow
                show={this.state.show}
                hide={this.hideModal}
                submit={this.props.submit}/>
            </div>

        )
    }
}
export default EditExpModal;