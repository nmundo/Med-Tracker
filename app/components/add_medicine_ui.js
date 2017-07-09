import React from 'react';
import ReactDOM from 'react-dom';

import TimePicker from 'material-ui/TimePicker';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

import {Link} from 'react-router-dom';
import {Route} from 'react-router-dom';

import {addNewMedicine} from '../utils/save_user_data';

const ButtonToNavigate = ({ title, history }) => (
  <button
    type="button"
    onClick={() => history.push('/medicinelist')}
  >
    {title}
  </button>
);

export default class MedicineListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    saveNewMedicine(medData) {
        console.log(...medData);
        addNewMedicine(...medData);
        //TODO send user back to medicine list
    }

    handleOpen() {
        this.setState({open: true});
    };

    handleClose() {
        this.setState({open: false});
        console.log(this.props);
        this.props.history.push('/medicinelist');
    };

    submitForm() {
        let formData = [];
        formData[0] = document.getElementById('medicationName').value;
        formData[1] = document.getElementById('medTimePicker').value;
        this.saveNewMedicine(formData);
        this.handleClose();
    };

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleClose.bind(this)}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.submitForm.bind(this)}
            />,
        ];

        return (
            <div>
                <FlatButton label='Add Medicine' onTouchTap={this.handleOpen.bind(this)} />
                <Dialog 
                    title="Add Medicine"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                >
                    <form>
                        <TextField
                            hintText='Medication Name'
                            floatingLabelText='Medication Name'
                            id='medicationName'
                        /><br/>
                        <TimePicker
                            floatingLabelText='Medication Time'
                            id='medTimePicker'
                        /><br/>
                    </form>
                </Dialog>
            </div>
        );
    }
    onChange(value) {
        return 0;
    }
}