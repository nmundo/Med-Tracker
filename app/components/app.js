import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

import Header from './header';
import Main from './main';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class LoginButton extends React.Component {

  render() {
    return (
      <FlatButton {...this.props} label="Login" />
    );
  }
}

class Logged extends React.Component {
  render() {
    return (
      <div>btths</div>
    )
  }
}

export default class App extends React.Component {

    render() {
        return (
            <BrowserRouter basename="/medtracker">
                <MuiThemeProvider>
                    <div>
                        <AppBar
                            title="Med Tracker"
                            iconElementRight={false ? <Logged /> : <LoginButton />}
                        ></AppBar>
                        {/*<Header />*/}
                        <Main />
                    </div>
                </MuiThemeProvider>
            </BrowserRouter>
        )
    }
}