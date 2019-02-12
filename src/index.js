import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TimerComponent from './TimerComponent';
import * as serviceWorker from './serviceWorker';


const rootElement = document.getElementById('root');  
ReactDOM.render(<TimerComponent />, rootElement);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
