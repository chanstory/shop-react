import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';
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
             <Login/>
            </div>
        );
    }
}
App.propTypes = propTypes;
App.defaultProps = defaultProps;
export default App;
