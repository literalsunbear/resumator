import React from 'react';
import EditExpModalWindow from './EditExpModalWindow';

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
            className='edit-task-modal-container'>
                <div
                className='edit-exp-modal-btn'
                onClick={this.showModal}>[edit]</div>
                <EditExpModalWindow
                show={this.state.show}
                hide={this.hideModal}
                id={this.props.id}
                title={this.props.title}
                company={this.props.company}
                dates={this.props.dates}
                description={this.props.description}/>
            </div>

        )
    }
}
export default EditExpModal;