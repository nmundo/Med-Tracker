import React from 'react';
import ReactDOM from 'react-dom';

import {getIndividualMedicine} from '../utils/get_user_data';

export default class MedicineItemDetails extends React.Component {
    constructor() {
        super();
        this.state = {medicine: []};
    }

    getMedicineDetails() {
        getIndividualMedicine(0).then(medicine => {
            this.setState({ medicine });
        })
    }

    componentWillMount() {
        this.getMedicineDetails();
    }
    
    render() {
        let {medicine} = this.state;
        return (
            <div>
                {medicine.name}<br/>
                {medicine.time}<br/>
                <button>Edit</button>
            </div>
        );
    }
}