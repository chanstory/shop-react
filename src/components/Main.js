import React, { Component } from 'react';
import PropTypes from 'prop-types';

import axios from 'axios';

import { decorate, observable, action } from 'mobx';
import { observer } from 'mobx-react';

import { Link } from 'react-router-dom';

import { Jumbotron , Nav, NavItem, NavLink} from 'reactstrap';

import '../css/Main.css';

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
            <div>
                <Jumbotron>
                    메인
                </Jumbotron>
                <Nav vertical>
                    <NavItem>
                      <NavLink href="#">Link</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#">Link</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#">Another Link</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink disabled href="#">Disabled Link</NavLink>
                    </NavItem>
                </Nav>
            </div>
        );
    }
}
Main.propTypes = propTypes;
Main.defaultProps = defaultProps;
export default Main;
