var React = require('react');
import MedicineList from './medicine_list';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <MedicineList />
            </div>
        )
    }
}