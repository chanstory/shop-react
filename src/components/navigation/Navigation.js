import React, { Component } from 'react';

import LoginStore from '../../store/LoginStore.js';
const loginStore = new LoginStore();

const propTypes = {
};
const defaultProps = {
};
class Navigation extends Component {
    componentDidMount(){
        if(loginStore.loginCheck()){

        }
    }

    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
              <div className="container">
                <a className="navbar-brand" href="/">태찬컴퓨터</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                      <a className="nav-link" href="/login">로그인</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/join">회원가입</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">마이페이지</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">주문조회</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">장바구니</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
        );
    }
}
Navigation.propTypes = propTypes;
Navigation.defaultProps = defaultProps;
export default Navigation;
