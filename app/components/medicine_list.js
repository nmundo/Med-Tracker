import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';

import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

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
        if (typeof(medicines) === "object") {
            return (
                <div className="medicine_list">
                    
                    <List>
                        {medicines.map((medicine) =>
                            <ListItem
                                primaryText={medicine.name}
                                secondaryText={medicine.time}
                                rightIconButton={<Link to={'/medicinedetails/?id=' + medicine.id}>Details</Link>}
                            />
                        )}
                    </List>
                </div>
            );
        } else {
            return (
                <div>
                    Error loading data
                </div>
            );
        }
        
    }
}