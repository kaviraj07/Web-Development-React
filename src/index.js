import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import Assignment from './ReactAssign/Assignment';

ReactDOM.render(<App appTitle="HR Dashboard"/>, document.getElementById('root'));
//ReactDOM.render(<Assignment />, document.getElementById('root'));
registerServiceWorker();
