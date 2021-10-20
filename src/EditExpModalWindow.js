import React from 'react';

class EditExpModalWindow extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const windowClassName = this.props.show ? 'edit-exp-window display-block' : 'edit-exp-window display-none';
        return(
            <div
            className={windowClassName}>
                <h1>hello modal</h1>
            </div>
        )
    }
}
export default EditExpModalWindow;