import React from 'react';
import EditPage from './EditPage';
import PreviewPage from './PreviewPage';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <>
            <div 
            className='main-toggle'>
                X
            </div>
            <EditPage/>
            <PreviewPage/>
            </>
        )
    }
}

export default App;