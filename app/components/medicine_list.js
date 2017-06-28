var React = require('react');
var ReactDOM = require('react-dom');

import {Link} from 'react-router-dom';
import MedicineListItem from './medicine_list_item';

//test data to be replaced with stuff from server later
var medicines = [
    {
        name: "Advil",
        time: "5pm",
        id: 0
    },
    {
        name: "Claritin",
        time: "8pm",
        id: 1
    }
];

export default class MedicineList extends React.Component {
    render() {
        return (
            <div className="medicine_list">
                {/* TODO will open bootstrap modal */}
                <Link to='/addMed'> Add medicine </Link>
                {medicines.map((medicine) =>
                    <ul key={medicine.id}>
                        <MedicineListItem name={medicine.name} time={medicine.time}/>
                    </ul>
                )}
            </div>
        );
    }
}