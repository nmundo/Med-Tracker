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

export default class MedicineListItem extends React.Component {
    render() {
        return (
            <ListItem
                primaryText={this.props.name}
                secondaryText={this.props.time}
                rightIconButton={<Link to={'/medicinedetails/?id=' + this.props.id}>Details</Link>}
            />
        );
    }
}