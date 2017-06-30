import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';

export default class MedicineListItem extends React.Component {
    render() {
        return (
            <li>
                {this.props.name},
                {this.props.time},
                <Link to={'/medicinedetails/?id=' + this.props.id}>Details</Link>
            </li>
        );
    }
}