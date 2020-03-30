import React, { Component } from 'react';

import { observer, inject } from 'mobx-react';

import { Link } from 'react-router-dom';

import Navigation from '../navigation/Navigation';
import Footer from '../footer/Footer';

import './Login.css';

@inject('loginStore')
@observer
class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { loginStore } = this.props;

        return(
            <div>
                <Navigation/>
                <div className="border border-dark rounded text-center loginForm">
                    <div className="font-weight-bold mt-5">
                        ACCOUNT LOGIN
                    </div>
                    <div className="m-1 mt-4">
                        <input type="text" className="form-control col-lg-10 m-auto" name ="loginId" id="loginId" placeholder="id" onChange={loginStore.handleChange}></input>
                    </div>
                    <div className="m-1">
                        <input type="password" className="form-control col-lg-10 m-auto" name="loginPassword" id="loginPassword" placeholder="password" onChange={loginStore.handleChange}></input>
                    </div>
                    <div className="mt-5 mb-2 ml-3 mr-3">
                        <input type="button" className="btn btn-dark col-lg-10" id="login" value="LOG IN" onClick={() => loginStore.login(this)}></input>
                    </div>
                    <div className="m-2 ml-3 mr-3">
                        <Link to="/join"><input type="button" className="btn btn-dark col-lg-10" id="join" value="회원가입"></input></Link>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Login;
