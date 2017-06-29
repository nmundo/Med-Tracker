import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';

import MedicineListItem from './medicine_list_item';
import {getUserMedicines} from '../utils/get_user_data';

// export {medicines};

// let {medicines} = [];

//test data to be replaced with stuff from server later
// var medicines = [
//     {
//         name: "Advil",
//         time: "5pm",
//         id: 0
//     },
//     {
//         name: "Claritin",
//         time: "8pm",
//         id: 1
//     }
// ];

export default class MedicineList extends React.Component {
    constructor() {
        super();
        this.state = {medicines: []};
    }

    getMedicineList() {
        getUserMedicines().then(medicines => {
            this.setState({ medicines });
        })
    }

    componentWillMount() {
        this.getMedicineList();
    }

    render() {
        let {medicines} = this.state;
        return (
            <div className="medicine_list">
                <Link to='/addMed'> Add medicine </Link>
                {medicines.map((medicine) =>
                    <ul key={medicine.id}>
                        <MedicineListItem name={medicine.name} time={medicine.time} id={medicine.id}/>
                    </ul>
                )}
            </div>
        );
    }
}