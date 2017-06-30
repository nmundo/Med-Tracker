import React from 'react';
import ReactDOM from 'react-dom';

import {Link} from 'react-router-dom';
import {Route} from 'react-router-dom';
import moment from 'moment';
import TimePicker from 'rc-time-picker';

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
                    <TimePicker
                        showSecond={false}
                        defaultValue={moment().hour(0).minute(0)}
                        className="xxx"
                        onChange={this.onChange}
                        format={'h:mm a'}
                        use12Hours
                    /><br/>
                    <button onClick={ (e) => {
                            e.preventDefault();
                            let formData = [];
                            formData[0] = document.getElementById('medicationName').value;
                            formData[1] = '13pm';
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