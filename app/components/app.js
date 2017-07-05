import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from './header';
import Main from './main';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

export default class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
                <BrowserRouter basename="/medtracker">
                    <div>
                        <Header />
                        <Main />
                    </div>
                </BrowserRouter>
            </MuiThemeProvider>
        )
    }
}