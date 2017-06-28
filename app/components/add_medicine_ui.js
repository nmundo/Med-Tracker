var React = require('react');
var ReactDOM = require('react-dom');

import {Link} from 'react-router-dom';
import {Route} from 'react-router-dom';
import moment from 'moment';
import TimePicker from 'rc-time-picker';

const ButtonToNavigate = ({ title, history }) => (
  <button
    type="button"
    onClick={() => history.push('/')}
  >
    {title}
  </button>
);

export default class MedicineListItem extends React.Component {
    render() {
        return (
            <div>
                **Add medicine UI**
                <form>
                    Name<br/>
                    <input type='text' placeholder='Medication Name'/><br/>
                    Time<br/>
                    <TimePicker
                        showSecond={false}
                        defaultValue={moment().hour(0).minute(0)}
                        className="xxx"
                        onChange={this.onChange}
                        format={'h:mm a'}
                        use12Hours
                    /><br/>
                    <Route path="/" render={(props) => <ButtonToNavigate {...props} title="Done" />} /><Link to='/'>Cancel</Link>
                </form>
            </div>
        );
    }
    onChange(value) {
        return 0;
    }
}