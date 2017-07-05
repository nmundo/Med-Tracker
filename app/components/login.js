import React from 'react';
import {Link} from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Link to='/medicinelist'>
                    <RaisedButton label="Login" primary={true} />
                </Link>
            </div>
        )
    }
}