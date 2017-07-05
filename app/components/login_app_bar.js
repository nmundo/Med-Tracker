import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

export default class LoginAppBar extends React.Component {
    render() {
        return (
            <div>
                <AppBar
                    title="Med Tracker"
                    /* TODO move login button here */
                />
            </div>
        )
    }
}