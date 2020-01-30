import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

const propTypes = {
};
const defaultProps = {
};
class Login extends Component {
    constructor(props) {
        super(props);


    }

    render() {
        return(
            <div>
                <div>
                    <input type="text" id="loginId" placeholder="id"></input>
                    <input type="button" id="login" value="login" onClick={this.callApi}></input>
                </div>
                <div>
                    <input type="password" id="loginPassword" placeholder="password"></input>
                </div>
                <div>
                    <Link to="/join"><input type="button" id="join" value="회원가입"></input></Link>
                </div>
            </div>
        );
    }
}
export default Login;
