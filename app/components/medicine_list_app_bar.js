import React from 'react';
import AppBar from 'material-ui/AppBar';
import {Link} from 'react-router-dom';

import AddMedicineUI from './add_medicine_ui';

export default class MedicineListAppBar extends React.Component {
    render() {
        return (
            <div>
                <AppBar
                    title="Medicine List"
                    iconElementRight={
                        <AddMedicineUI />
                    }
                />
            </div>
        )
    }
}