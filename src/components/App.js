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
            <Provider rootStore = { rootStore } loginStore = {rootStore.login} userStore = {rootStore.user}>
                <BrowserRouter>
                    <Route exact path="/" component={Main}/>
                    <Route exact path="/join" component={Join}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/category-detail/:item" component={CategoryDetail}/>
                </BrowserRouter>
            </Provider>
        );
    }
}
App.propTypes = propTypes;
App.defaultProps = defaultProps;
export default App;
