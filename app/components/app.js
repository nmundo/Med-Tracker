var React = require('react');

import Header from './header';
import Main from './main';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Main />
            </div>
        )
    }
}