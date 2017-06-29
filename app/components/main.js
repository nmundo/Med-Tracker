import React from 'react';
import {Switch, Route} from 'react-router-dom';

import MedicineList from './medicine_list';
import AddMedicineUI from './add_medicine_ui';
import Login from './login';

export default class App extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Login} />
                <Route path='/medicinelist' component={MedicineList} />
                <Route path='/addMed' component={AddMedicineUI} />
            </Switch>
        )
    }
}