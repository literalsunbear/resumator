import React from 'react';
import AddEduModalWindow from './AddEduModalWindow';

import addBtn from '../static/images/add_black_24dp.svg';

class AddEduModal extends React.Component {
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
            className='add-edu-modal-container'>
                <div
                className='add-edu-modal-btn'
                onClick={this.showModal}>
                    <img src={addBtn}></img>
                </div>
                <AddEduModalWindow
                show={this.state.show}
                hide={this.hideModal}
                submit={this.props.submit}/>
            </div>

        )
    }
}
export default AddEduModal;