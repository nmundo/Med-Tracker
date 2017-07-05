import React from 'react';
import ReactDOM from 'react-dom';

import TimePicker from 'material-ui/TimePicker';

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
    saveNewMedicine(medData) {
        console.log(...medData);
        addNewMedicine(...medData);
        //TODO send user back to medicine list
    }

    render() {
        return (
            <div>
                **Add medicine UI**
                <form>
                    Name<br/>
                    <input type='text' placeholder='Medication Name' id='medicationName'/><br/>
                    Time<br/>
                    <TimePicker id='medTimePicker'/><br/>
                    <button onClick={ (e) => {
                            e.preventDefault();
                            let formData = [];
                            formData[0] = document.getElementById('medicationName').value;
                            formData[1] = document.getElementById('medTimePicker').value;
                            this.saveNewMedicine(formData);
                    }}>
                        Done
                    </button><Link to='/medicinelist'>Cancel</Link>
                </form>
            </div>
        );
    }
    onChange(value) {
        return 0;
    }
}