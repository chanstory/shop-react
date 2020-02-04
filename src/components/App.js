import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { BrowserRouter, Route } from 'react-router-dom';

import Login from './Login';
import Join from './Join';
import Main from './Main';
import 'bootstrap/dist/css/bootstrap.css';

const propTypes = {
};
const defaultProps = {
};

class App extends Component {
    constructor(props) {
        super(props);
		this.state = {
		};

    }

    render() {
        return(
            <div>
                <BrowserRouter>
                    <Route exact path="/" component={Login}/>
                    <Route exact path="/join" component={Join}/>
                    <Route exact path="/main" component={Main}/>
                </BrowserRouter>
            </div>
        );
    }
}
App.propTypes = propTypes;
App.defaultProps = defaultProps;
export default App;
