import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';
import { Route } from 'react-router-dom';
import Login from './Login';


const propTypes = {
};
const defaultProps = {
};



class App extends Component {
    constructor(props) {
        super(props);
		this.state = {
			data: ''
		};

    }



    render() {
        return(
            <div>
                //<Route exact path="/" component={Login}/>
                <Login/>
            </div>
        );
    }
}
App.propTypes = propTypes;
App.defaultProps = defaultProps;
export default App;
