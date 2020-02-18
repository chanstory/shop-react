import React, { Component } from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import Login from './login/Login';
import Join from './join/Join';
import Main from './main/Main';
import CategoryDetail from './category/CategoryDetail';

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
                    <Route exact path="/" component={Main}/>
                    <Route exact path="/join" component={Join}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/category-detail/:item" component={CategoryDetail}/>
                </BrowserRouter>
            </div>
        );
    }
}
App.propTypes = propTypes;
App.defaultProps = defaultProps;
export default App;
