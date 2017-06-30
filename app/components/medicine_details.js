import React from 'react';
import ReactDOM from 'react-dom';

import {browserHistory} from 'react-router';
import {Link} from 'react-router-dom';

import {getIndividualMedicine} from '../utils/get_user_data';

export default class MedicineItemDetails extends React.Component {
    constructor() {
        super();
        this.state = {medicine: []};
    }

    getMedicineDetails() {
        getIndividualMedicine(this.props.location.search.split('id=')[1]).then(medicine => {
            this.setState({ medicine });
        })
    }

    componentDidMount() {
        this.getMedicineDetails();
    }
    
    render() {
        let {medicine} = this.state;
        return (
            <div>
                {medicine.name}<br/>
                {medicine.time}<br/>
                <button>Edit</button>
                <Link to='/medicinelist'>Back</Link>
            </div>
        );
    }
}