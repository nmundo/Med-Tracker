import React from 'react';
import {Switch, Route} from 'react-router-dom';

import MedicineList from './medicine_list';
import AddMedicineUI from './add_medicine_ui';
import Login from './login';
import MedicineItemDetails from './medicine_details';

export default class App extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Login} />
                <Route path='/medicinelist' component={MedicineList} />
                <Route path='/addMed' component={AddMedicineUI} />
                <Route path='/medicinedetails' component={MedicineItemDetails} />
            </Switch>
        )
    }
}