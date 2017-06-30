import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import Header from './header';
import Main from './main';

export default class App extends React.Component {
    render() {
        return (
            <BrowserRouter basename="/medtracker">
                <div>
                    <Header />
                    <Main />
                </div>
            </BrowserRouter>
        )
    }
}