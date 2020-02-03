import React, { Component } from 'react';
import PropTypes from 'prop-types';

import axios from 'axios';

import { decorate, observable, action } from 'mobx';
import { observer } from 'mobx-react';

import { Link } from 'react-router-dom';

const propTypes = {
};
const defaultProps = {
};
class Main extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>Main</div>
        );
    }
}
Main.propTypes = propTypes;
Main.defaultProps = defaultProps;
export default Main;
