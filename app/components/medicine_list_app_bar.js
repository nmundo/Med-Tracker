import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import {Link} from 'react-router-dom';

export default class MedicineListAppBar extends React.Component {
    render() {
        return (
            <div>
                <AppBar
                    title="Medicine List"
                    iconElementRight={
                        <Link to='/addMed'>
                            <FlatButton label='Add Medicine' />
                        </Link>
                    }
                />
            </div>
        )
    }
}