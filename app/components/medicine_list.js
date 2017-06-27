var React = require('react');
var ReactDOM = require('react-dom');
import MedicineListItem from './medicine_list_item';

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
                <h1>Medicine List</h1>
                <button>Add</button>
                {medicines.map((medicine) =>
                    <ul key={medicine.id}>
                        <MedicineListItem name={medicine.name} time={medicine.time}/>
                    </ul>
                )}
            </div>
        );
    }
}