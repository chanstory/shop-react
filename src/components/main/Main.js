import React, { Component } from 'react';
import PropTypes from 'prop-types';

import axios from 'axios';

import { decorate, observable, action } from 'mobx';
import { observer } from 'mobx-react';

import { Link } from 'react-router-dom';

import { Jumbotron , Nav, NavItem, NavLink} from 'reactstrap';

import './Main.css';

import Navigation from '../navigation/Navigation';
import Category from '../category/Category';
import Footer from '../footer/Footer';
import MainImage from '../mainImage/MainImage';
import Rows from '../row/Rows';

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
                <Navigation/>
                {/*Page Content*/}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <Category/>
                        </div>
                        {/*.col-lg-3 end*/}
                        <div className="col-lg-9">
                            <MainImage/>
                            <Rows/>
                            {/*.row end*/}
                        </div>
                        {/*.col-lg-9 end*/}
                    </div>
                    {/*.row end*/}
                </div>
                {/*.container end*/}
                <Footer/>
            </div>
        );
    }
}
Main.propTypes = propTypes;
Main.defaultProps = defaultProps;
export default Main;
