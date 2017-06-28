var React = require('react');

import {Switch, Route} from 'react-router-dom';
import MedicineList from './medicine_list';
import AddMedicineUI from './add_medicine_ui';

export default class App extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={MedicineList} />
                <Route path='/addMed' component={AddMedicineUI} />
            </Switch>
        )
    }
}