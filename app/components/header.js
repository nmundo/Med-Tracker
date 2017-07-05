import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import { Switch, Route } from 'react-router'

import Header from './header';
import Main from './main';
import LoginAppBar from './login_app_bar';
import MedicineListAppBar from './medicine_list_app_bar';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={LoginAppBar} />
                    <Route path="/medicinelist" component={MedicineListAppBar} />
                </Switch>
            </div>
        )
    }
}