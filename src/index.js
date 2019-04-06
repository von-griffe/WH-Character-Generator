import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { TodoApp } from"./TodoApp"
import * as serviceWorker from './serviceWorker';
import { data } from './data.js'
ReactDOM.render(<TodoApp data={data}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
