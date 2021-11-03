import React, {useState} from 'react';
import AddEduModalWindow from './AddEduModalWindow';

import addBtn from '../static/images/add_black_24dp.svg';

const AddEduModal = props => {
    const [show, setShow] = useState(false)
    const hideModal = () => {
        setShow(false)
    }
    const showModal = () => {
        setShow(true)
    }
    return(
        <div
            className='add-edu-modal-container'>
                <div
                className='add-edu-modal-btn'
                onClick={showModal}>
                    <img src={addBtn}></img>
                </div>
                <AddEduModalWindow
                show={show}
                hide={hideModal}
                submit={props.submit}/>
            </div>
    )
}
// *********************************************
// USING CLASS COMPONENT
// *********************************************
// class AddEduModal extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             show: false
//         }
//         this.showModal = this.showModal.bind(this);
//         this.hideModal = this.hideModal.bind(this);
//     }
//     showModal = () => {
//         this.setState({show: true});
//     };
//     hideModal = () => {
//         this.setState({show: false})
//     }

//     render() {
//         return(
//             <div
//             className='add-edu-modal-container'>
//                 <div
//                 className='add-edu-modal-btn'
//                 onClick={this.showModal}>
//                     <img src={addBtn}></img>
//                 </div>
//                 <AddEduModalWindow
//                 show={this.state.show}
//                 hide={this.hideModal}
//                 submit={this.props.submit}/>
//             </div>

//         )
//     }
// }
export default AddEduModal;