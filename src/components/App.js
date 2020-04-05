import React, { Component } from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import { Provider } from 'mobx-react';

import Login from './login/Login';
import Join from './join/Join';
import Main from './main/Main';
import CategoryDetail from './category/CategoryDetail';

import 'bootstrap/dist/css/bootstrap.css';

import RootStore from '../store/RootStore.js';
const rootStore = new RootStore();


const propTypes = {
};
const defaultProps = {
};

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                test
            </div>
        );
    }
}
App.propTypes = propTypes;
App.defaultProps = defaultProps;
export default App;
