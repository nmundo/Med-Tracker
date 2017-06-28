var React = require('react');
var ReactDOM = require('react-dom');
import AddMedicineUI from './add_medicine_ui';

export default class MedicineListItem extends React.Component {
    render() {
        return (
            <button onClick={addMedicine}>
                Add
            </button>
        );
    }

    addMedicine() {
        (ReactDOM.render(
            <AddMedicineUI />,
            document.getElementById('addMedicine') 
        ))
    }
}