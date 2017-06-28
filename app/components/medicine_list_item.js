var React = require('react');
var ReactDOM = require('react-dom');

export default class MedicineListItem extends React.Component {
    render() {
        return (
            <li>
                {this.props.name},
                {this.props.time},
                <button>Details</button> {/* TODO button will open modal with details/option to edit */}
            </li>
        );
    }
}