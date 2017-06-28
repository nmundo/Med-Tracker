var React = require('react');
var ReactDOM = require('react-dom');

import {BrowserRouter} from 'react-router-dom';

import App  from './components/app';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('app')
);